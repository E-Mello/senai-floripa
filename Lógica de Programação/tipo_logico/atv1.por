programa {
    funcao inicio() {
        lógico ehPositivo
        inteiro num

        escreva("Digite um número: ")
        leia(num)

        ehPositivo = (num > 0)

        escreva("O número é positivo? ", ehPositivo, "\n")
    }
}
