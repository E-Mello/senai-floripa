programa {
    funcao inicio() {
        logico v1, v2

        escreva("Digite verdadeiro ou falso para o primeiro valor: ")
        leia(v1)

        escreva("Digite verdadeiro ou falso para o segundo valor: ")
        leia(v2)

        se (v1 e v2) {
            escreva("Os dois são verdadeiros.\n")
        } senao {
            escreva("Pelo menos um é falso.\n")
        }
    }
}
