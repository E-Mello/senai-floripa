// Essa função recebe um array e um índice, retornando o valor no 
// índice especificado ou lançando um erro caso o índice seja inválido.\
// exemplo: array = [1, 3, 5, 7, 8], indice = 3
// resultado esperado => 7
// return array[indice]

export function buscarPorIndice(array, indice){
    if(!Array.isArray(array)){
        return "Erro"
    }
    else if(indice < 0){
        return "Não existe indice negativo"
    }
    array.length
    return array[indice]
}
