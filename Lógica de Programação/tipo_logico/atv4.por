programa {
    funcao inicio() {
        lógico aprovado
        inteiro nota

        escreva("Digite a nota do aluno: ")
        leia(nota)

        aprovado = (nota >= 7)

        escreva("O aluno foi aprovado? ", aprovado, "\n")
    }
}
