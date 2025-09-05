// middleware.js

class Middleware {
  constructor() {
    this.routes = []; // Armazena as definições de rotas: { uri, callback, protectedRoute }
    this.init(); // Ao criar a instância, já "sobe" os listeners e valida a rota atual
  }

  /**
   * Adiciona uma rota ao middleware
   * @param {string} uri - Caminho da rota
   * @param {function} callback - Função executada quando a rota é acessada
   * @param {boolean} protectedRoute - Define se precisa de autenticação
   */
  addRoute(uri, callback, protectedRoute = true) {
    // Usa parâmetro com valor padrão (= true) para evitar esquecer de marcar rotas privadas
    this.routes.push({ uri, callback, protectedRoute });
  }

  // Inicializa: escuta popstate e cliques em <a>
  init() {
    // 🔹 Voltar/avançar do navegador (navegação pelo histórico do browser)
    window.addEventListener("popstate", () => {
      // Arrow function preserva o "this" léxico (this === instância do Middleware)
      this.handleRoute(window.location.pathname, false);
      // scrollTop=false para não "pular" a página ao usar back/forward
    });

    // 🔹 Intercepta cliques em links internos (SPA-like)
    document.addEventListener("click", (event) => {
      // Event delegation: captura um <a> em qualquer lugar do documento
      const link = event.target.closest("a"); // pega o <a> mais próximo do clique real
      // Só intercepta links internos (começam com "/"); evita mexer em http(s), mailto:, tel:, etc.
      if (link && link.getAttribute("href")?.startsWith("/")) {
        event.preventDefault(); // Bloqueia o full reload do navegador
        const path = link.getAttribute("href");
        this.navigate(path); // Atualiza a URL via pushState e passa pelo middleware
      }
    });

    // 🔹 Checa rota inicial ao carregar/atualizar a página (acesso direto por URL)
    this.handleRoute(window.location.pathname, false);
  }

  // Navegar programaticamente (usar em botões, scripts, etc.)
  navigate(path) {
    window.history.pushState({}, "", path); // Muda a URL sem recarregar a página
    this.handleRoute(path, true); // Valida permissão e executa a rota; scrollTop=true por UX
  }

  // Middleware de verificação de acesso
  handleRoute(path, scrollTop = true) {
    const token = localStorage.getItem("token"); // Onde você guarda a "prova" de login (lado cliente)
    const isAuthenticated = !!token; // Coerção para booleano (string não-vazia => true)

    // Itera sobre as rotas registradas
    for (const route of this.routes) {
      const regEx = new RegExp(`^${route.uri}$`); // ^...$ garante correspondência exata
      if (path.match(regEx)) {
        // Confere se o path atual bate com a rota
        if (route.protectedRoute && !isAuthenticated) {
          // Rota protegida sem token → manda para login (mantendo o fluxo SPA)
          this.navigate("/index.html");
          return;
        }
        // Executa a lógica da rota (carregar conteúdo, iniciar página, etc.)
        route.callback();

        // UX: ao navegar programaticamente, opcionalmente rola pro topo
        if (scrollTop) window.scrollTo(0, 0);
        return; // Evita continuar o loop
      }
    }

    // Se nenhuma rota casou: fallback seguro → login
    this.navigate("/index.html");
  }
}

// Instância do Middleware (um único "roteador" global do app)
const middleware = new Middleware();

// Rota pública (login) — "false" indica que NÃO exige autenticação
middleware.addRoute(
  "/index.html",
  () => {
    console.log("Página de Login");
  },
  false
);

// Rotas protegidas — exigem token no localStorage
middleware.addRoute("/pages/home.html", () => {
  console.log("Página Home");
});

middleware.addRoute("/pages/listagem_de_animes.html", () => {
  console.log("Listagem de Animes");
});

middleware.addRoute("/pages/gerenciar_animes.html", () => {
  console.log("Gerenciar Animes");
});
