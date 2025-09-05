function logout() {
  localStorage.removeItem("token"); // Remove o token do localStorage ao fazer logout
  window.location = "../index.html"; // Redireciona de volta para a página de login
}

// Verifica se o usuário está autenticado ao acessar a página
window.onload = function () {
  if (!isAuthenticated()) {
    // Se não estiver autenticado, redireciona para a página de login
    window.location = "../index.html";
  }
};

// Função para verificar se o usuário está autenticado com base no token JWT
function isAuthenticated() {
  const token = localStorage.getItem("token");
  // Verificar se o token existe e é válido (pode implementar a verificação do token JWT aqui)
  return !!token;
}
