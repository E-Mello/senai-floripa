# 📘 Aula Revisão – Fundamentos de JavaScript + Jest

**Duração:** 3h30min (com 15min de intervalo)  
**Público:** Lógica de programação

---

## 🎯 Objetivos

- Reforçar os **conceitos essenciais de JavaScript** usados em testes.
- Ensinar a **criar e rodar testes unitários com Jest**.
- Fazer o aluno **aprender praticando**: cada conceito terá explicação curta + exercício imediato.

---

## 🕒 Estrutura Detalhada da Aula

### 1. Boas-vindas e Contextualização (15min)

**Teoria curta:**

- O que são testes e por que usamos.
- O que é o Jest (ferramenta de testes automatizados).
- Por que revisar JavaScript primeiro (bases sólidas → testes funcionam).

**Prática rápida:**

- Mostrar um código errado e como o teste detecta o erro.
- Exemplo:
  ```js
  function soma(a, b) {
    return a - b; // erro
  }
  ```

---

### 2. Revisão de Fundamentos do JavaScript (60min)

**Formato:** 5–10 min de teoria + 10–15 min de prática cada tópico.

1. **Variáveis e Tipos**

   - `let`, `const`, tipos primitivos, array, objeto.
   - **Prática:** cada aluno cria variáveis para nome, idade, aprovado (boolean), notas (array).

2. **Funções e Parâmetros**

   - Definição, parâmetros, `return`.
   - **Prática:** implementar `soma(a, b)` e rodar no console.

3. **Condicionais e Loops**

   - `if/else`, `for`, `while`.
   - **Prática:** função `ehPar(n)` que retorna true/false.

4. **Arrays e Métodos**
   - Explicar `push`, `map`, `filter`.
   - **Prática:** lista de números e filtrar apenas pares.

---

### 3. Intervalo (15min)

---

### 4. Introdução ao Jest (30min)

**Teoria curta:**

- O que é Jest, conceito de “testes automatizados”.
- Sintaxe básica: `test` e `expect`.

**Prática passo a passo:**

1. Criar `soma.js`
   ```js
   function soma(a, b) {
     return a + b;
   }
   module.exports = soma;
   ```
2. Criar `soma.test.js`

   ```js
   const soma = require("./soma");

   test("soma 2 + 3 = 5", () => {
     expect(soma(2, 3)).toBe(5);
   });
   ```

3. Rodar `npm test` e ver o resultado.

---

### 5. Prática Guiada – Testes Simples (45min)

Você conduz no quadro e eles acompanham no PC.

Funções para implementar + testar:

1. `ehPar(n)`
2. `maiorIdade(idade)`
3. `media([notas])`

⚡ Estratégia:

- 1º: rodar no console para garantir que a função funciona.
- 2º: criar o teste e rodar no Jest.

---

### 6. Atividade em Duplas (30min)

**Desafio:** criar e testar funções novas:

1. `inverterString(str)`
2. `fatorial(n)`

Passos orientados:

1. escrever a função no `.js`
2. testar no console
3. criar arquivo `.test.js`
4. rodar Jest

---

### 7. Fechamento e Discussão (15min)

- **Teoria final curta:** importância de revisar sempre lógica + prática.
- **Prática de reflexão:** cada dupla mostra o que conseguiu rodar.
- **Tarefa para casa:** implementar e testar `éPalíndromo(str)`.

---

## 📂 Recursos que você pode levar

- Slides resumidos com teoria (para não gastar tempo escrevendo).
- Arquivos-base já criados (`soma.js`, `soma.test.js`) para agilizar caso os alunos travem.
- Fluxo no quadro: **Código → Console → Teste no Jest**.
