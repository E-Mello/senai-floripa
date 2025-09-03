programa {
    funcao inicio() {
        real salario, novoSalario

        escreva("Digite o salário: ")
        leia(salario)

        novoSalario = salario + (salario * 0.10)

        escreva("O salário com aumento de 10% é: ", novoSalario, "\n")
    }
}
