programa {
    funcao inicio() {
        inteiro numero, fatorial

        escreva("Digite um número (ex.: 3): ")
        leia(numero)

        se (numero == 3) {
            fatorial = 3 * 2 * 1
            escreva("O fatorial de 3 é ", fatorial, "\n")
        } senao {
            escreva("Este programa só calcula o fatorial de 3.\n")
        }
    }
}
