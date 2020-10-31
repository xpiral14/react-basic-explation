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


/**
 * A api será capaz de fazer requisições HTTP por aí. Nesse caso, criamos uma instancia do axios que define pra gente dois atributos padrões: A url de base, que é o que sempre será passado junto com a rota que definirmos, e os headers que contém por padrão um header content-type que fala que só queremos a resposta no formato JSON
 * 
 * O que são requisições?
 * Requisições é a base do protocolo HTTP, sempre terá um cliente e um servidor que interagem e trocam informações. O cliente pede, o servidor processa e dá o que o cliente espera ou não, mas sempre há uma resposta.
 * 
 * O que são headers?
 * Headers é onde fica as configurações da nossa requisição. Exemplo: tipo de retorno que queremos na resposta, o nosso token de autorização, nossos cookies, sistema de controle de cache e por aí vai.
 * 
 * O que são respostas?
 * Resposta é tudo aquilo que o servidor retorna pra gente, essa resposta também contem um `body` o qual pode ser vazio ou não dependo do que você espera (quem diz se é vazio ou não é a API)
 */
export default Axios.create({
  baseURL: "https://fakerestapi.azurewebsites.net/api",
  headers: {
    "content-type": "application/json",
  },
});
