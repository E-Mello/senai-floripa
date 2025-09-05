// Aqui criamos a classe router , para validar as nossas rotas
class Router {
  constructor() {
    this.routes = [];
    this.init();
  }

  // Método para adicionar uma rota protegida
  addRoute(uri, callback) {
    this.routes.push({ uri, callback });
  }

  // Método para inicializar a verificação de rota
  init() {
    const self = this;
    window.addEventListener("popstate", function () {
      self.checkAccess(window.location.pathname);
    });
    this.checkAccess(window.location.pathname);
  }

  // Método para verificar se o usuário está autenticado e permitir o acesso à rota
  checkAccess(path) {
    const token = localStorage.getItem("token");
    const isLoginPage = path === "/index.html";
    const isAuthenticated = !!token;

    // Se o usuário não estiver autenticado e não estiver na página de login, redireciona para a página de login
    if (!isAuthenticated && !isLoginPage) {
      window.location = "/index.html";
      return;
    }

    // Percorre todas as rotas protegidas
    for (const route of this.routes) {
      const regEx = new RegExp(`^${route.uri}$`);
      if (path.match(regEx)) {
        // Se a rota corresponder e for protegida, verifica a autenticação
        if (!isAuthenticated) {
          window.location = "/index.html";
          return;
        }
        // Se o usuário estiver autenticado e a rota corresponder, chama a callback da rota
        route.callback();
        return;
      }
    }
  }
}

// Cria uma instância do Router
const router = new Router();

// Adiciona a rota protegida para a página home
router.addRoute("/pages/home.html", function () {
  console.log("Página Home");
});

// Adiciona a rota protegida para a página de listagem de animes
router.addRoute("/pages/listagem_de_animes.html", function () {
  console.log("Listagem de Animes");
});

// Adiciona a rota protegida para a página de gerenciamento de animes
router.addRoute("/pages/gerenciar_animes.html", function () {
  console.log("Gerenciar Animes");
});
