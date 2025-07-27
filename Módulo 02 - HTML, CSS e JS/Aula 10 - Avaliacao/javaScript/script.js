import { produtos } from "./produtos.js";

const cardsDiv = document.getElementById('card-div');
const nroCarrinho = document.getElementById('nro-carrinho');

let carrinho = 0

window.onload = mostrarProdutos();

function mostrarProdutos() {
    cardsDiv.innerHTML = '';
    produtos.forEach(produto => {
        if (produto.qntEstoque == 0) {
            gerarCardIndisponivel(produto);
        } else {
            gerarCardDisponivel(produto);
        }        
    })   
};

function gerarCardDisponivel(produto) {
    return cardsDiv.innerHTML += `
        <div class=" bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-180 w-100">
            <div class="relative bg-gray-50 p-4">
                <img class="w-full h-125" src="${produto.imagem}">                        
            </div>
            <div class="p-6">
                <h3 class="text-sm font-medium text-gray-900 text-center mb-4 tracking-wide">
                    ${produto.nome}
                </h3>
                <div class="text-center mb-6">
                    <span class="text-2xl font-bold text-gray-900">R$${produto.valor.toFixed(2)}</span>
                </div>
                <button class="w-full bg-black text-white py-3 px-4 font-medium text-sm tracking-wide hover:bg-gray-800 transition-colors duration-200 cursor-pointer" onclick="adicionarAoCarrinho()">
                COMPRAR
                </button> 
            </div>                                    
        </div>              
        `     
}

function gerarCardIndisponivel(produto) {
    return cardsDiv.innerHTML += `
        <div class=" bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-180 w-100">
            <div class="relative bg-gray-50 p-4">
                <img class="w-full h-125" src="${produto.imagem}">                        
            </div>
            <div class="p-6">
                <h3 class="text-sm font-medium text-gray-900 text-center mb-4 tracking-wide">
                    ${produto.nome}
                </h3>
                <div class="text-center mb-6">
                    <span class="text-2xl font-bold text-gray-900">R$${produto.valor.toFixed(2)}</span>
                </div>
                <button class="w-full bg-gray-400 text-white py-3 px-4 font-medium text-sm tracking-wide rounded-lg cursor-not-allowed" 
                disabled>
                    INDISPONÍVEL
                </button> 
            </div>                                    
        </div>
    `
}

function mostrarCategoria(itemCategoria) {
    cardsDiv.innerHTML = '';
    let encontrou = false;
    produtos.forEach(produto => {
        if(produto.categoria == itemCategoria){
            encontrou = true;
            if (produto.qntEstoque == 0) {
                gerarCardIndisponivel(produto);
            } else {
                gerarCardDisponivel(produto);
            }
        }
    })   
    
    if (!encontrou) {
        cardsDiv.innerHTML = `<p class="col-span-3 text-center text-gray-500 text-lg">Nenhum produto encontrado para esta categoria.</p>`;
    }        
};

function adicionarAoCarrinho() {
    carrinho++;
    nroCarrinho.innerHTML = `${carrinho}`; 
};

window.mostrarCategoria = mostrarCategoria;
window.mostrarProdutos = mostrarProdutos;
window.adicionarAoCarrinho = adicionarAoCarrinho;

