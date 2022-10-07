import { produtosService } from "../controller/produtos-controller";


const novoProduto = (nome, preco, imagemURL) => {

    const card = document.createElement("div");
    const conteudo =  `
                <div class="secaoBonecos__produtos-itens">
                    <img class="secaoBonecos__produtos___itens-imagem" src="${imagemURL}">
                    <h4 class="secaoBonecos__produtos___itens-nome">${nome}</h4>
                    <h5 class="secaoBonecos__produtos___itens-preco">${preco}</h5>
                    <a class="secaoBonecos__produtos___itens-link" href="#">Ver produto</a>
                </div>
            `;
    card.innerHTML = conteudo;
    return card;
}


const bonecos = document.querySelector("[data-bonecos]");

const render = async () => {
    try {
        const listaBonecos = await produtosService.listaProdutos();
        listaProdutos.forEach(elemento => {
            bonecos.appendChild(novoProduto(elemento.nome, elemento.preco, elemento.imagemURL));
        })
    }
    catch(erro) {
        console.log(erro);
    };
}

render();