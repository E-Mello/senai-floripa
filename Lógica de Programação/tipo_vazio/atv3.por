programa {
    funcao vazio mostrarErro() {
        escreva("Opção inválida! Tente novamente.\n")
    }

    funcao inicio() {
        inteiro opcao
        escreva("Digite 1 ou 2: ")
        leia(opcao)

        se (opcao <> 1 e opcao <> 2) {
            mostrarErro()
        }
    }
}
