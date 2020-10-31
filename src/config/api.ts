import Axios from "axios";


// ========= VERBOS HTTP ================
// GET -> let dados

// POST -> escrever dados

// PATCH -> Atualizar um campo

// PUT -> Atualizar todos os dados

// DELETE -> Deletar um


// ========= STATUS HTTP ================
// começam com 2xx: Sucesso na requisição
// começam 3xx: Redirecionamento
// começam com 4xx:  Erro do cliente
// começam com 5xx: Erro de servidor

export default Axios.create({
  baseURL: "https://fakerestapi.azurewebsites.net/api",
  headers: {
    "content-type": "application/json",
  },
});
