# Exercícios de Testes com Jest + Express

Neste guia você vai aprender a criar uma API simples com **Express** e
testar usando **Jest** com Node 18+ (ESM).

---

## Passo 1: Instalar dependências

```bash
npm install express
npm install --save-dev jest jest-environment-node
```

---

## Passo 2: Configurar o package.json

Adicione a configuração mínima para rodar o Jest em modo ESM, incluindo
`"type": "module"` e o script de teste.

---

## Passo 3: Estrutura do servidor Express

Crie um arquivo `server.js` com as seguintes orientações:

- Importe e inicialize o **Express**.\
- Configure o uso de `express.json()` para interpretar requisições com
  corpo JSON.\
- Crie uma lista inicial de usuários em memória (array de objetos com
  `id`, `name`, `email`).\
- Defina as rotas REST:
  - **GET /users** → retorna todos os usuários.\
  - **GET /users/:id** → retorna o usuário pelo ID ou 404 se não
    encontrado.\
  - **POST /users** → adiciona um novo usuário à lista.\
  - **PUT /users/:id** → substitui completamente os dados de um
    usuário existente.\
  - **PATCH /users/:id** → atualiza parcialmente os dados de um
    usuário.\
  - **DELETE /users/:id** → remove um usuário da lista.

Por fim, exporte o `app` para que possa ser utilizado nos testes.

---

## Passo 4: Criar testes com Jest

Crie o arquivo `tests/api.test.js`:

- Importe o `app` exportado do servidor Express.\
- Use `beforeAll` para iniciar o servidor em uma porta de teste.\
- Use `afterAll` para encerrar o servidor após os testes.

Isso garante o ciclo de vida correto sem precisar rodar manualmente.

---

## Exercício 1: GET básico

Escreva um teste que verifique se `GET /users` retorna **status 200**.

---

## Exercício 2: Retorna array

Escreva um teste que confirme que `GET /users` retorna um **array**.

---

## Exercício 3: POST cria usuário

Crie um teste que envie `name` e `email` e confirme que o usuário foi
criado corretamente.

---

## Exercício 4: GET usuário específico

Escreva um teste que confirme que `GET /users/1` retorna o usuário
correto.

---

## Exercício 5: PUT atualiza usuário

Crie um teste que substitua os dados de um usuário existente e verifique
a alteração.

---

## Exercício 6: PATCH atualiza parcialmente

Escreva um teste que atualize somente o `email` e verifique se foi
modificado corretamente.

---

## Exercício 7: DELETE usuário

Escreva um teste que exclua um usuário e confirme que ele não pode mais
ser acessado.

---

## Exercício 8: Validação de usuário inexistente

Crie um teste que tente acessar `/users/999` e confirme que o retorno é
**404**.

---

## Exercício 9: Lista não vazia

Crie um usuário e depois verifique que a lista de `/users` não está
vazia.

---

## Exercício 10: Encadeamento completo

Implemente um teste com o seguinte fluxo:\

1. Crie um usuário\
2. Recupere esse usuário pelo ID\
3. Exclua o usuário\
4. Verifique que não existe mais

---

👉 Assim você pratica o ciclo completo de testes com Jest em uma API
Express, sem precisar rodar manualmente o servidor.
