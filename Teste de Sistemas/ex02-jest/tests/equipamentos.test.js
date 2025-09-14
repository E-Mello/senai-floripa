// tests/equipamentos.test.js
import fetch from "cross-fetch";

const BASE_URL = "http://localhost:3000/equipamentos";
let novoEquipamentoId;

beforeAll(async () => {
  console.log("🚀 Iniciando testes...");
});

afterAll(async () => {
  console.log("🏁 Finalizando testes...");
});

describe("Testes CRUD de Equipamentos", () => {
  test("GET /equipamentos → deve retornar uma lista de equipamentos", async () => {
    const response = await fetch(BASE_URL);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(Array.isArray(data)).toBe(true);
    expect(data.length).toBeGreaterThan(0);
    expect(data[0]).toHaveProperty("id");
    expect(data[0]).toHaveProperty("nome");
  });

  test("POST /equipamentos → deve criar um novo equipamento", async () => {
    const novoEquipamento = {
      nome: "Monitor LG Ultrawide",
      tipo: "Informática",
      descricao: "Monitor 29 polegadas ultrawide",
      status: "disponível",
    };

    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(novoEquipamento),
    });

    const data = await response.json();
    novoEquipamentoId = data.id;

    expect(response.status).toBe(201);
    expect(data).toMatchObject(novoEquipamento);
    expect(data).toHaveProperty("id");
    expect(data.status).toEqual("disponível");
  });

  test("GET /equipamentos/:id → deve retornar o equipamento criado", async () => {
    const response = await fetch(`${BASE_URL}/${novoEquipamentoId}`);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toHaveProperty("id", novoEquipamentoId);
    expect(data.nome).toBe("Monitor LG Ultrawide");
    expect(data.tipo).toContain("Informática");
  });

  test("PUT /equipamentos/:id → deve atualizar o equipamento", async () => {
    const atualizado = {
      nome: "Monitor LG Ultrawide 29'",
      tipo: "Informática",
      descricao: "Monitor atualizado",
      status: "em uso",
    };

    const response = await fetch(`${BASE_URL}/${novoEquipamentoId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(atualizado),
    });

    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data.nome).toBe("Monitor LG Ultrawide 29'");
    expect(data.status).toBe("em uso");
    expect(data).toEqual(expect.objectContaining(atualizado));
  });

  test("PATCH /equipamentos/:id → deve alterar apenas o campo status", async () => {
    const response = await fetch(`${BASE_URL}/${novoEquipamentoId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status: "manutenção" }),
    });

    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toHaveProperty("status", "manutenção");
    expect(data.nome).toMatch(/Monitor LG/);
  });

  test("DELETE /equipamentos/:id → deve remover o equipamento", async () => {
    const response = await fetch(`${BASE_URL}/${novoEquipamentoId}`, {
      method: "DELETE",
    });

    expect(response.status).toBe(200);

    const checkResponse = await fetch(`${BASE_URL}/${novoEquipamentoId}`);
    expect(checkResponse.status).toBe(404);
  });
});