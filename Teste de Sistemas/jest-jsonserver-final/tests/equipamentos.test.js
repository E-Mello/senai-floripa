import jsonServer from "json-server";

let server;
const baseUrl = "http://localhost:4000";

beforeAll((done) => {
  const app = jsonServer.create();
  const router = jsonServer.router("db.json");
  const middlewares = jsonServer.defaults();

  app.use(middlewares);
  app.use(router);

  server = app.listen(4000, done);
});

afterAll((done) => {
  server.close(done);
});

// -----------------------------
// Exercício 1: GET básico
// -----------------------------
test("GET /equipamentos retorna 200", async () => {
  const res = await fetch(`${baseUrl}/equipamentos`);
  expect(res.status).toBe(200);
});

// -----------------------------
// Exercício 2: Retorna array
// -----------------------------
test("GET /equipamentos retorna um array", async () => {
  const res = await fetch(`${baseUrl}/equipamentos`);
  const data = await res.json();
  expect(Array.isArray(data)).toBe(true);
});

// -----------------------------
// Exercício 3: POST cria equipamento
// -----------------------------
test("POST /equipamentos cria equipamento", async () => {
  const novoEquipamento = {
    nome: "Notebook Dell",
    tipo: "Informática",
    descricao: "i7, 16GB RAM",
    status: "disponível",
  };
  const res = await fetch(`${baseUrl}/equipamentos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(novoEquipamento),
  });
  const data = await res.json();
  expect(data.nome).toBe("Notebook Dell");
  expect(data).toHaveProperty("id");
});

// -----------------------------
// Exercício 4: GET equipamento específico
// -----------------------------
test("GET /equipamentos/1 retorna equipamento válido", async () => {
  const res = await fetch(`${baseUrl}/equipamentos/1`);
  const data = await res.json();
  expect(data).toHaveProperty("id", 1);
});

// -----------------------------
// Exercício 5: PUT atualiza equipamento
// -----------------------------
test("PUT /equipamentos/1 atualiza equipamento", async () => {
  const res = await fetch(`${baseUrl}/equipamentos/1`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id: 1,
      nome: "Notebook Atualizado",
      tipo: "Informática",
      descricao: "Atualizado para i9, 32GB RAM",
      status: "em uso",
    }),
  });
  const data = await res.json();
  expect(data.nome).toBe("Notebook Atualizado");
  expect(data.status).toBe("em uso");
});

// -----------------------------
// Exercício 6: PATCH atualiza parcialmente
// -----------------------------
test("PATCH /equipamentos/1 atualiza status", async () => {
  const res = await fetch(`${baseUrl}/equipamentos/1`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ status: "manutenção" }),
  });
  const data = await res.json();
  expect(data.status).toBe("manutenção");
});

// -----------------------------
// Exercício 7: DELETE equipamento
// -----------------------------
test("DELETE /equipamentos/1 exclui equipamento", async () => {
  await fetch(`${baseUrl}/equipamentos/1`, { method: "DELETE" });
  const res = await fetch(`${baseUrl}/equipamentos/1`);
  expect(res.status).toBe(404);
});

// -----------------------------
// Exercício 8: Validação de equipamento inexistente
// -----------------------------
test("GET /equipamentos/999 retorna 404", async () => {
  const res = await fetch(`${baseUrl}/equipamentos/999`);
  expect(res.status).toBe(404);
});

// -----------------------------
// Exercício 9: Lista não vazia
// -----------------------------
test("POST cria equipamento e lista não está vazia", async () => {
  const novoEquipamento = {
    nome: "Projetor Epson",
    tipo: "Audiovisual",
    descricao: "Full HD 3300 lumens",
    status: "disponível",
  };
  await fetch(`${baseUrl}/equipamentos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(novoEquipamento),
  });
  const res = await fetch(`${baseUrl}/equipamentos`);
  const data = await res.json();
  expect(data.length).toBeGreaterThan(0);
});

// -----------------------------
// Exercício 10: Encadeamento completo
// -----------------------------
test("Fluxo completo de equipamento", async () => {
  // cria
  let res = await fetch(`${baseUrl}/equipamentos`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      nome: "Câmera Canon",
      tipo: "Fotografia",
      descricao: "DSLR com lente 18-135mm",
      status: "disponível",
    }),
  });
  let equipamento = await res.json();

  // pega
  res = await fetch(`${baseUrl}/equipamentos/${equipamento.id}`);
  let data = await res.json();
  expect(data).toHaveProperty("nome", "Câmera Canon");

  // deleta
  await fetch(`${baseUrl}/equipamentos/${equipamento.id}`, {
    method: "DELETE",
  });
  res = await fetch(`${baseUrl}/equipamentos/${equipamento.id}`);
  expect(res.status).toBe(404);
});
