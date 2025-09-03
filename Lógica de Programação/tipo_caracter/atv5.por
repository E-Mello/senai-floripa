programa {
    funcao inicio() {
        caractere simbolo

        escreva("Digite um caractere: ")
        leia(simbolo)

        se (simbolo == '@') {
            escreva("Você digitou o caractere especial @.\n")
        } senao {
            escreva("Você não digitou o caractere @.\n")
        }
    }
}
