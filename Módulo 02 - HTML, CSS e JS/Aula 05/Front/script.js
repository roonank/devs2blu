// Vetor
let produtos = [];

// Requisição para obter todos os produtos
fetch('http://localhost:3000/produtos')
.then(retorno => retorno.json())
.then(p => {
    produtos = p;
    renderizarTabela();
})

//Função para gerar a tabela
let renderizarTabela = () => {
    //Selecionar elemento <tbody>
    let tabela = document.getElementById('tabela')
    
    //Laço de repetição
    for (let index = 0; index < produtos.length; index++) {
        //Criar linha de tabela <tr>
        let linha = tabela.insertRow(-1);

        //Criar colunas <td>
        let colunaId            = linha.insertCell(0);
        let colunaNome          = linha.insertCell(1);
        let colunaMarca         = linha.insertCell(2);
        let colunaValor         = linha.insertCell(3);
        let colunaSelecionar    = linha.insertCell(4);
        
        //Informar o valor de cada coluna
        colunaId.innerText = produtos[index].id;
        colunaNome.innerText = produtos[index].nome;
        colunaMarca.innerText = produtos[index].marca;
        colunaValor.innerText = produtos[index].valor;
        colunaSelecionar.innerHTML = `<button class="btn btn-primary">Selecionar</button>`
    }
}