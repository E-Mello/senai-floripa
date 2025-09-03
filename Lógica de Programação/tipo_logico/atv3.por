programa {
    funcao inicio() {
        lógico idadeValida
        inteiro idade

        escreva("Digite sua idade: ")
        leia(idade)

        idadeValida = (idade >= 0 e idade <= 120)

        escreva("A idade digitada é válida? ", idadeValida, "\n")
    }
}
