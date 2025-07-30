const cardsDiv = document.getElementById('card-div');
const nroCarrinho = document.getElementById('nro-carrinho');
const carrinhoPopup = document.getElementById('carrinho-popup');
const itensCarrinho = document.getElementById('itens-carrinho');
const totalCarrinho = document.getElementById('total-carrinho');

let produtos = [];
let carrinho = [];

const produtosSalvos = localStorage.getItem('produtosRKStore');
if (produtosSalvos) {
   produtos = JSON.parse(produtosSalvos);
   mostrarProdutos();
   atualizarCarrinho(); 
} else {
    import('./produtos.js').then(prod => {
        produtos = prod.produtos;
        salvarProdutos();        
    })
}

const carrinhoSalvo = localStorage.getItem('carrinhoRKStore');
if (carrinhoSalvo) {
    carrinho = JSON.parse(carrinhoSalvo);
}

window.onload = () => {
    mostrarProdutos();
    atualizarCarrinho();
}

function mostrarProdutos() {
    cardsDiv.innerHTML = '';
    produtos.forEach((produto, index) => {
        if (produto.qntEstoque == 0) {
            gerarCardIndisponivel(produto);
        } else {
            gerarCardDisponivel(produto, index);
        }        
    })   
};

function gerarCardDisponivel(produto, index) {
    return cardsDiv.innerHTML += `
        <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-180 w-100">
            <div class="relative bg-gray-50 p-4">
                <img class="w-full h-125 object-contain" src="${produto.imagem}">                        
            </div>
            <div class="p-6">
                <h3 class="text-sm font-medium text-gray-900 text-center mb-4 tracking-wide">
                    ${produto.nome}
                </h3>
                <div class="text-center mb-6">
                    <span class="text-2xl font-bold text-gray-900">R$${produto.valor.toFixed(2).replace('.',',')}</span>
                </div>
                <button class="w-full bg-black text-white py-3 px-4 font-medium text-sm tracking-wide hover:bg-gray-800 transition-colors duration-200 cursor-pointer" onclick="adicionarAoCarrinho(${index})">
                COMPRAR
                </button> 
            </div>                                    
        </div>              
        `     
}

function gerarCardIndisponivel(produto) {
    return cardsDiv.innerHTML += `
        <div class="bg-white rounded-lg shadow-md overflow-hidden h-180 w-100 p-6 flex flex-col items-center justify-center text-center text-gray-400 cursor-not-allowed">
            <div class="relative bg-gray-50 p-4">
                <img class="w-full h-125 object-contain opacity-50" src="${produto.imagem}">                        
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
    produtos.forEach((produto, index) => {
        if(produto.categoria == itemCategoria){
            encontrou = true;
            if (produto.qntEstoque == 0) {
                gerarCardIndisponivel(produto);
            } else {
                gerarCardDisponivel(produto, index);
            }
        }
    })   
    
    if (!encontrou) {
        cardsDiv.innerHTML = `<p class="col-span-3 text-center text-gray-500 text-lg">Nenhum produto encontrado para esta categoria.</p>`;
    }        
};

function atualizarCarrinho() {
    itensCarrinho.innerHTML = '';
    let total = 0;

    carrinho.forEach((produto, index) => {
        total += parseFloat(produto.valor);
        itensCarrinho.innerHTML += `
        <div class="flex justify-between items-center border-b pb-2">
            <div>
                <h4 class="font-semibold text-sm">${produto.nome}</h4>
                <p class="text-gray-500 text-sm">R$ ${(produto.valor).toFixed(2).replace('.',',')}</p>
            </div>
            <button onclick="removerDoCarrinho(${index})" class="w-8 h-8 rounded-md flex items-center justify-center text-red-500 hover:text-red-700 hover:bg-red-50 transition"><i class="fas fa-times"></i></button>
        </div>
        `
    });

    totalCarrinho.innerHTML = `R$ ${total.toFixed(2)}`;
    nroCarrinho.innerHTML = carrinho.length;

    localStorage.setItem('carrinhoRKStore', JSON.stringify(carrinho));
};

function adicionarAoCarrinho(index) {
    let produto = produtos[index];
    carrinho.push(produto);
    produtos[index].qntEstoque --;

    salvarProdutos();
    atualizarCarrinho();
    abrirCarrinho();
};

function removerDoCarrinho(index) {
    const produto = carrinho[index];
    const produtosIndex = produtos.findIndex(p => p.id === produto.id)

    if (produtosIndex !== -1) {
        produtos[produtosIndex].qntEstoque ++;    
    }
    
    carrinho.splice(index, 1);
    salvarProdutos();
    atualizarCarrinho();
}

function esvaziarCarrinho() {
    carrinho.forEach(item => {
        const index = produtos.findIndex(p => p.id === item.id);
        if (index !== -1) {
            produtos[index].qntEstoque++;
        }
    })
    
    carrinho = [];

    localStorage.removeItem('carrinhoRKStore')
    salvarProdutos();    
    atualizarCarrinho();
    fecharCarrinho();
}

function abrirCarrinho() {
    carrinhoPopup.classList.remove('translate-x-full');
};

function fecharCarrinho() {
    carrinhoPopup.classList.add('translate-x-full');
};

function salvarProdutos() {
    localStorage.setItem('produtosRKStore', JSON.stringify(produtos));
}

function finalizarCompra() {
    carrinho = [];
    localStorage.removeItem('carrinhoRKStore')
    atualizarCarrinho();
    fecharCarrinho();
    alert("Compra finalizada com sucesso!");
}

window.fecharCarrinho = fecharCarrinho;
window.abrirCarrinho = abrirCarrinho;
window.mostrarCategoria = mostrarCategoria;
window.mostrarProdutos = mostrarProdutos;
window.adicionarAoCarrinho = adicionarAoCarrinho;
window.removerDoCarrinho = removerDoCarrinho;
window.esvaziarCarrinho = esvaziarCarrinho;
window.finalizarCompra = finalizarCompra;

