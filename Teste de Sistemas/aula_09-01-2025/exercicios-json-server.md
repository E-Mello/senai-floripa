# Testes com Jest + JSON Server (setup automático)

Neste material você vai aprender a configurar o Jest para **subir e
derrubar um JSON Server automaticamente** durante os testes.

---

## Pré-requisitos

1.  Ter Node.js instalado.\

2.  Configurar o Jest com `"type": "module"` no `package.json`.\

3.  Instalar o `json-server`:

    ```bash
    npm install json-server --save-dev
    ```

---

## Estrutura do setup

Antes de iniciar os testes, o servidor deve ser iniciado dentro do
`beforeAll`.\
Depois que todos os testes rodarem, o `afterAll` deve ser responsável
por fechar o servidor.

O Jest se encarrega de controlar o ciclo de vida dos testes.\
Você deve criar esse bloco de setup manualmente antes de escrever os
testes.

---

## Exercício 1: GET básico

Escreva um teste que verifique se o endpoint `/users` retorna **status
200**.

_Dica_: use `fetch` e inspecione `res.status`.

---

## Exercício 2: Retorno em array

Faça uma requisição para `/users` e confirme que o retorno é um
**array**.

_Dica_: transforme a resposta em JSON e use `Array.isArray`.

---

## Exercício 3: POST cria usuário

Simule a criação de um usuário enviando `name` e `email`.\
Verifique se o retorno contém o nome informado.

---

## Exercício 4: GET usuário específico

Recupere `/users/1` e verifique se o retorno tem a propriedade `id: 1`.

---

## Exercício 5: PUT atualiza usuário

Atualize o objeto completo de um usuário, modificando `name` e `email`.

---

## Exercício 6: PATCH atualiza parcialmente

Atualize apenas o `email` de um usuário.\
Depois, confira se foi alterado corretamente.

---

## Exercício 7: DELETE usuário

Exclua um usuário pelo ID e verifique que a rota não retorna mais esse
registro.

---

## Exercício 8: Validação de inexistente

Faça uma requisição para `/users/999` e verifique se retorna **404**.

---

## Exercício 9: Lista não vazia

Crie um usuário e depois confirme que a lista de `/users` não está
vazia.

---

## Exercício 10: Encadeamento completo

Implemente o fluxo:\

1. Crie um usuário\
2. Busque esse usuário\
3. Exclua esse usuário\
4. Verifique que ele não existe mais

---

👉 Assim, o Jest levanta o servidor automaticamente com `beforeAll` e
`afterAll`, mas você precisa implementar esse setup manualmente.
