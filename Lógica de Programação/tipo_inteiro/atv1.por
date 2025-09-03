programa {
    funcao inicio() {
        inteiro n1, n2

        escreva("Digite o primeiro número: ")
        leia(n1)

        escreva("Digite o segundo número: ")
        leia(n2)

        se (n1 > n2) {
            escreva("O maior é ", n1, "\n")
        } senao {
            escreva("O maior é ", n2, "\n")
        }
    }
}
