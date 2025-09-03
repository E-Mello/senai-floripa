programa {
    funcao inicio() {
        cadeia usuario, senha

        escreva("Digite o usuário: ")
        leia(usuario)

        escreva("Digite a senha: ")
        leia(senha)

        se (usuario == "admin" e senha == "1234") {
            escreva("Acesso permitido.\n")
        } senao {
            escreva("Acesso negado.\n")
        }
    }
}
