//GET


const listaProdutos = () => fetch("http://localhost:3000/secaoBonecos__produtos").then(resposta => resposta.json());

export const produtosService = {
    listaProdutos,
}