programa {
    funcao inicio() {
        cadeia palavra1, palavra2

        escreva("Digite a primeira palavra: ")
        leia(palavra1)

        escreva("Digite a segunda palavra: ")
        leia(palavra2)

        se (palavra1 == palavra2) {
            escreva("As palavras são iguais.\n")
        } senao {
            escreva("As palavras são diferentes.\n")
        }
    }
}
