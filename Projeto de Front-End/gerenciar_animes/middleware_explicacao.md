# Explicação detalhada do Middleware de Rotas

## Por que usar uma **classe**?

- **Encapsulamento de estado**: o array de rotas (`this.routes`) e os métodos que mexem nele ficam juntos e isolados — evita poluir o escopo global.
- **API clara**: você expõe um “contrato” simples (`addRoute`, `navigate`) para o resto do app.
- **Extensível/testável**: dá para herdar, “mockar” em testes, criar múltiplas instâncias se um dia precisar (mesmo que hoje use só uma).
- **Ciclo de vida**: o `constructor` roda uma única vez; `init()` registra _listeners_ e garante que a navegação passe pelo “middleware”.

---

## Decisões importantes (o “porquê” além da linha)

### `window.addEventListener("popstate", ...)`

Necessário para o comportamento nativo de **voltar/avançar**. Sem isso, a URL mudaria, mas sua app não reagiria.

### Event delegation com `document.addEventListener("click", ...)` + `closest("a")`

Intercepta **todos** os links criados dinamicamente (não precisa registrar um listener por link).  
`closest("a")` resolve cliques em ícones/`<span>` dentro do `<a>`.

### Filtro `href.startsWith("/")`

Só trata **rotas internas** (ex.: `/pages/home.html`). Links externos, `mailto:`, `tel:`, arquivos para download etc. passam direto.

### `history.pushState` + `handleRoute`

- `pushState` atualiza a URL **sem reload** (SPA).
- `handleRoute` faz o papel de **middleware** (autorização) + **dispatcher** (chama `callback`).

### `!!token`

Torna _truthy/falsy_ de forma explícita (string → booleano). Simples e claro.

### Regex `^${route.uri}$`

Garante que `/pages/home.html` **não** vai casar com `/pages/home.html/qualquer-coisa`.  
(Observação: se um dia aceitar parâmetros dinâmicos, você troca essa linha por algo que monte a `RegExp` com grupos, ou usa uma libzinha de rotas.)

### Fallback para `/index.html`

Segurança/UX: rota desconhecida leva ao login (poderia ser uma 404 específica, se preferir).

---

## Fluxo típico (o que acontece na prática)

1. Página carrega → `constructor` cria `routes` e chama `init()`.
2. `init()` registra `popstate`, o _delegated click_ e chama `handleRoute(pathname atual)`.
3. `handleRoute` encontra a rota; se for privada sem token → vai para `/index.html`; caso contrário, chama a `callback`.
4. Usuário clica num `<a href="/pages/home.html">` → o listener intercepta, faz `preventDefault()`, `pushState`, e `handleRoute("/pages/home.html")` roda, tudo **sem recarregar** a página.

---

## Observações de robustez (opcionais, mas valem ouro)

- **Ignorar cliques com modificadores** (abrir em nova aba, etc.):

  ```js
  if (event.metaKey || event.ctrlKey || event.shiftKey || event.button === 1)
    return;
  ```

- **Ignorar links externos/arquivo/target**:

  ```js
  const href = link.getAttribute("href");
  const target = link.getAttribute("target");
  const isExternal = link.origin && link.origin !== window.location.origin;
  if (target === "_blank" || link.hasAttribute("download") || isExternal)
    return;
  ```

- **Escapar caracteres especiais** se um dia `uri` puder conter regex-reserved chars (., +, ?, etc.).  
  (Hoje suas URIs são simples, então está ok.)

- **Segurança**: token no `localStorage` **não é suficiente** para proteger recursos do servidor. Sempre valide no **backend** (cookies HttpOnly, expiração, _refresh_, etc.). Este middleware protege **telas** do front, não dados de API.
