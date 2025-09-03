programa {
    funcao inicio() {
        caractere letra

        escreva("Digite uma letra: ")
        leia(letra)

        se (letra == 'a') {
            escreva("Você digitou a letra minúscula a.\n")
        } senao se (letra == 'A') {
            escreva("Você digitou a letra maiúscula A.\n")
        } senao {
            escreva("Você digitou outra letra.\n")
        }
    }
}
