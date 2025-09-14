# Exercício de Testes Automatizados com Jest e JSON-Server

## 🎯 Objetivo

Criar uma suíte de testes para validar todas as operações de CRUD (Create, Read, Update, Delete) e também o método `PATCH` da API simulada pelo **json-server**.

---

## 🛠️ Preparação do Ambiente

1. Crie um projeto Node:

   ```bash
   mkdir exercicio-crud-testes
   cd exercicio-crud-testes
   npm init -y
   ```

2. Instale as dependências:

   ```bash
   npm install jest supertest cross-fetch --save-dev
   ```

3. No `package.json`, habilite o modo ES Modules:

   ```json
   {
     "type": "module",
     "scripts": {
       "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
     }
   }
   ```

4. Garanta que o **json-server** está rodando:
   ```bash
   json-server --watch db.json --port 3000
   ```

---

## 🧪 Estrutura do Exercício

Você deve criar o arquivo **`equipamentos.test.js`** dentro de uma pasta `tests/`.  
Este arquivo conterá **todos os testes** relacionados ao CRUD de equipamentos.

---

## 🔍 Regras dos Testes

- Utilize **`beforeAll`** para inicializar o ambiente de testes (ex: verificar se o servidor está ativo).
- Utilize **`afterAll`** para encerrar ou limpar recursos usados nos testes.
- Utilize **o máximo de matchers (`expect`) possíveis do Jest** (`toBe`, `toEqual`, `toContain`, `toBeDefined`, `toHaveProperty`, etc.).
- Teste **todos os endpoints** do CRUD:
  - `GET /equipamentos`
  - `GET /equipamentos/:id`
  - `POST /equipamentos`
  - `PUT /equipamentos/:id`
  - `PATCH /equipamentos/:id`
  - `DELETE /equipamentos/:id`

---

## ✅ Critérios de Avaliação

- O aluno deve conseguir **rodar os testes** com:
  ```bash
  npm test
  ```
- Todos os testes devem **passar**.
- O código deve usar corretamente:
  - `beforeAll` e `afterAll`
  - Matchers variados do Jest (`toBe`, `toEqual`, `toContain`, `toMatchObject`, `toHaveProperty`, `toBeDefined`, etc.)
  - Todos os métodos CRUD, incluindo `PATCH`.

---

## 💡 Desafio Extra

- Criar um segundo conjunto de testes simulando **erros** (ex: acessar um ID inexistente).
- Validar que o servidor retorna o **status code correto** (`404`, `400`, etc.`).
