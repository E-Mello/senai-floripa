import { buscarPorIndice } from "../src/atividade"

describe("Teste função buscar por indice", ()=>{
    const valores = [2, 3, 5, 7]
    test("Validar se no indice 0 o valor é 2", ()=>{
        expect(buscarPorIndice(valores, 0)).toBe(2)
    })
    test("Validar se no indice 1 o valor é 3", ()=>{
        expect(buscarPorIndice(valores, 1)).toBe(3)
    })
    test("Validar se no indice 2 o valor é 5", ()=>{
        expect(buscarPorIndice(valores, 2)).toBe(5)
    })
    test("Validar se no indice 3 o valor é 7", ()=>{
        expect(buscarPorIndice(valores, 3)).toBe(7)
    })

    test("Validar se no indice 3 o valor é 7", ()=>{
        expect(buscarPorIndice("valores", 3)).toBe("Erro")
    })

    test("Validar se no indice 3 o valor é 7", ()=>{
        expect(buscarPorIndice(5, 3)).toBe("Erro")
    })

    test("Validar se no indice 3 o valor é 7", ()=>{
        expect(buscarPorIndice(valores, -3)).toBe("Não existe indice negativo")
    })


})

