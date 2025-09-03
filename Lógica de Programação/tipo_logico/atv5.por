programa {
    funcao inicio() {
        logico chovendo

        escreva("Está chovendo? (verdadeiro/falso): ")
        leia(chovendo)

        se (chovendo) {
            escreva("Leve um guarda-chuva.\n")
        } senao {
            escreva("Não precisa levar guarda-chuva.\n")
        }
    }
}
