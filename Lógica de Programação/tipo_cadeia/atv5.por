programa {
    funcao inicio() {
        cadeia resposta

        escreva("Digite 'sim' ou qualquer outra coisa: ")
        leia(resposta)

        se (resposta == "sim") {
            escreva("Resposta positiva.\n")
        } senao {
            escreva("Resposta negativa.\n")
        }
    }
}
