# Middleware Router em JavaScript (SPA)

Este documento explica como transformar o middleware fornecido em um **mini-roteador SPA** que realmente controla as rotas, carregando o conteúdo certo em tela.

---

## 🔑 Ideia central

1. Cada rota registrada chama um `callback` → esse callback deve **injetar o conteúdo correto** na página (DOM).
2. Você pode:
   - **Carregar HTML externo** (`fetch` + `innerHTML`) e jogar dentro de um `<div id="app">`.
   - **Renderizar templates JS** diretamente.
   - **Misturar os dois** (mais flexível).

---

## 🛠️ Exemplo prático (SPA com carregamento dinâmico)

Suponha que seu `index.html` tenha:

```html
<body>
  <div id="app"></div>
  <script src="./middleware.js"></script>
</body>
```

No `middleware.js`, ajuste os callbacks para realmente carregar conteúdo:

```js
function loadPage(filePath) {
  fetch(filePath)
    .then((res) => {
      if (!res.ok) throw new Error("Página não encontrada");
      return res.text();
    })
    .then((html) => {
      document.getElementById("app").innerHTML = html;
    })
    .catch((err) => {
      document.getElementById(
        "app"
      ).innerHTML = `<h2>Erro: ${err.message}</h2>`;
    });
}

// Rotas públicas e protegidas
middleware.addRoute(
  "/index.html",
  () => loadPage("./pages/login.html"), // Exemplo: login separado
  false
);

middleware.addRoute("/pages/home.html", () => {
  loadPage("./pages/home.html");
});

middleware.addRoute("/pages/listagem_de_animes.html", () => {
  loadPage("./pages/listagem_de_animes.html");
});

middleware.addRoute("/pages/gerenciar_animes.html", () => {
  loadPage("./pages/gerenciar_animes.html");
});
```

---

## 🚦 Fluxo de navegação

- Usuário clica em `<a href="/pages/home.html">Home</a>`.
- O middleware intercepta.
- Verifica se precisa de autenticação.
- Se OK, chama `loadPage("./pages/home.html")`.
- O HTML da página é injetado no `#app`.

Sem reload, sem perder o token. Isso já é um **router SPA artesanal**.

---

## 🔒 Proteção real

Se quiser forçar login antes:

- No `handleRoute`, você já verifica `localStorage.getItem("token")`.
- Caso falhe → `this.navigate("/index.html")`.
- Assim, páginas protegidas nunca aparecem sem login.

---

## 📦 Extra: melhorar UX

- Adicionar um **loader** enquanto busca HTML (`document.getElementById("app").innerHTML = "Carregando..."`).
- Suportar **parâmetros de rota** (`/anime/123`) usando regex com `:id`.
- Cachear páginas já carregadas para não refazer `fetch`.

---

👉 Resumindo:  
Hoje seu middleware **decide quem pode acessar**. Para “controlar de fato”, basta fazer o `callback` carregar/renderizar a view correspondente.
