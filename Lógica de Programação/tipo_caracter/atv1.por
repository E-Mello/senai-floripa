programa {
    funcao inicio() {
        caractere letra

        escreva("Digite uma letra: ")
        leia(letra)

        se (letra == 'a' ou letra == 'A') {
            escreva("Você digitou a vogal A.\n")
        } senao {
            escreva("Você não digitou a vogal A.\n")
        }
    }
}
