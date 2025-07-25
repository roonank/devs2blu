import { produtos } from "./produtos.js";

const cardsDiv = document.getElementById('card-div');

window.onload = mostrarProdutos();

function mostrarProdutos() {
    cardsDiv.innerHTML = '';
    produtos.forEach(produto => (
        cardsDiv.innerHTML += `
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
                <button class="w-full bg-black text-white py-3 px-4 font-medium text-sm tracking-wide hover:bg-gray-800 transition-colors duration-200">
                    COMPRAR
                </button> 
            </div>                                    
        </div>              
        `
    ))
}

