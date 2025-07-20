    // Selecionar todos os elementos de formulário
    const tabela = document.getElementById('tabela')
    const id = document.getElementById('id');
    const nome = document.getElementById('nome');
    const idade = document.getElementById('idade'); 
    const btnCadastrar = document.getElementById('btnCadastrar'); 
    const btnAlterar = document.getElementById('btnAlterar');  
    const btnCancelar = document.getElementById('btnCancelar');
        
    window.onload = renderizarTabela();
        

    
    async function renderizarTabela() {
        const requisicao = await fetch('http://localhost:3000')
        const pessoas = await requisicao.json()
            
        //Limpar tabela
        tabela.innerHTML = '';
            
        //Laço de repetição
        pessoas.forEach(p => {
     
            //Criar linha de tabela <tr>
            let linha = tabela.insertRow(-1);

            //Criar colunas <td>
            let colunaId            = linha.insertCell(0);
            let colunaNome          = linha.insertCell(1);
            let colunaIdade         = linha.insertCell(2);
            let colunaSelecionar    = linha.insertCell(3);
            let colunaDelete        = linha.insertCell(4);
                
            //Informar o valor de cada coluna
            colunaId.innerText = p.id;
            colunaNome.innerText = p.nome;
            colunaIdade.innerText = p.idade;
            colunaSelecionar.innerHTML = `<button onclick="selecionar(${p.id}, '${p.nome}', ${p.idade} )" class="btn btn-primary">Selecionar</button>`
            colunaDelete.innerHTML = `<button onclick="remover(${p.id})" class="btn btn-primary">Exluir</button>`
        })
    }

    // Função para cadastrar produtos
    async function cadastrar() {
        if (nome.value == '' || idade.value == '') {
            alert("Preencha todos os campos!");
            return;
        }

        let obj = {
            'nome' : nome.value,
            'idade' : parseInt(idade.value)
        }

        await fetch(
            'http://localhost:3000',
            {
                method:'POST',
                body:JSON.stringify(obj),
                headers:{'Content-Type':'application/json'}
            }
        )

        renderizarTabela()

        //Limpar inputs
        nome.value = '';
        idade.value = '';

        //Focus
        nome.focus();
    }
    
    
    function selecionar(argId, argNome, argIdade){
        id.value = argId
        nome.value = argNome
        idade.value = argIdade

        btnCadastrar.style.display = 'none';
        btnAlterar.style.display = 'inline-block';
        btnCancelar.style.display = 'inline-block';
    }

    function cancelar(){
        //Limpar inputs (text)
        id.value    = ''
        nome.value  = ''
        idade.value = ''

        // Visibilidade dos botões
        btnCadastrar.style.display  = 'inline-block';
        btnAlterar.style.display    = 'none';
        btnCancelar.style.display   = 'none';
    }

    async function alterar() {
        let obj = {
            'nome' : nome.value,
            'idade' : parseInt(idade.value)
        }
        
        await fetch (`http://localhost:3000/${id.value}`,
            {
                method:'PUT',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify(obj)
            }
        )

        renderizarTabela()
        cancelar()
    }

    async function remover(id) {   
        //Requisição
        await fetch(`http://localhost:3000/${id}`,
            {
                method:'DELETE',
                headers:{'Content-Type':'application/json'}
            }
        )
        renderizarTabela()
    }
    
