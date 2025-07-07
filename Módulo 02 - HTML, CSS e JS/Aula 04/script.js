        // Função para selecionar item da NavBar
        const navBarSelect = (param) => {
            const forms = document.getElementsByTagName('form')
            const mainText = document.getElementById("main-text")
            for (let index = 0; index < forms.length; index++) {
                if (!forms[index].classList.contains('hidden')) {
                    forms[index].classList.add('hidden')
                }                
            }

            forms[param].classList.remove('hidden')
            mainText.classList.add('hidden')
        }
        
        // Ex1 - Função para calcular média
        const calculaMedia = () => {
            const nota1 = document.getElementById('primeiraNota')
            const nota2 = document.getElementById('segundaNota')
            const nota3 = document.getElementById('terceiraNota')            
            
            let media = ((parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value))/3).toFixed(1)
            let situacao = document.getElementById("situacao")

            document.getElementById('media').innerText = media

            if (media >= 7) document.getElementById("situacao").innerText = "Aprovado!"
            else if (media >= 5 && media < 7) document.getElementById("situacao").innerText = "Recuperação!"
            else document.getElementById("situacao").innerText = "Reprovado!"

            nota1.value = ''
            nota2.value = ''
            nota3.value = ''
        }

        // Ex2 - Função para converter moeda
        const calcularMoeda = (param) => {
            let valor = parseFloat(document.getElementById("currency-input").value)

            let text = document.getElementById("converted-currency")

            switch (parseInt(param)) {
                case 1: 
                    text.innerText = `$ ${(valor/5.41).toFixed(2)}`;
                break;
                case 2: 
                    text.innerText = `€ ${(valor/6.36).toFixed(2)}`;
                break;
                case 3:
                    text.innerText = `£ ${(valor/7.38).toFixed(2)}`;
                break;
                case 4:
                    text.innerText = `₿ ${(valor/594065).toFixed(5)}`;
                break;
                default: 
                    text.innerText = '';
            }
        }         
    
        // Ex3 - Funções gerar numero e chute
        const numero = Math.floor(Math.random() *100) +1
        let tentativa = 0
        const chutar = () => {
            let text = document.getElementById("guess")
            let resultado = document.getElementById("resultado")
            let chute = parseInt(document.getElementById("number-guess").value)

            tentativa++
            let dif = numero > chute ? numero - chute : chute - numero

            if(dif == 0) {
                if(tentativa == 1) {
                    text.innerHTML = `Parabéns!`
                    resultado.innerHTML = `Acertou na primeira tentativa!`
                } else {
                    text.innerHTML = `Parabéns!` 
                    resultado.innerHTML = `Foram realizadas ${tentativa} tentativas.`
                }
            } else if (dif <= 5){
                text.innerText = 'Quase!'
            }else if (dif <= 10){
                text.innerText = 'Perto!'
            }else if (dif <= 20){
                text.innerText = 'Longe!'
            }else{
                text.innerText = 'Muito longe!'
            }
        }

        // Ex4 - Função para calcular a tabuada
        const calcularTabuada = () => {
            let numeroTabuada = parseInt(document.getElementById("number-tabuada").value)
            let text = document.getElementById("tabuada")
            text.innerHTML = `Tabuada do número: ${numeroTabuada} <br><br>`

            for (let i = 1; i <= 10; i++) {
                text.innerHTML += `${numeroTabuada} x ${i} = ${numeroTabuada*i} <br>`
            }
        }

        //Ex5 - Função para calcular fatorial
        const calcularFatorial = () => {
            let numeroFatorial = parseInt(document.getElementById("number-fatorial").value)
            let text = document.getElementById("fatorial")
            
            function fatorialRecursivo(n){    
                if (n == 0 || n == 1) {
                    return 1
                } else {
                    return n*fatorialRecursivo(n-1)
                } 
            }            
            
            text.innerHTML = `Fatorial do número ${numeroFatorial} é: ${fatorialRecursivo(numeroFatorial)}`   
        }
    
        //E6 - Função para calcular IMC
        const calcularImc = () => {
            let peso = parseFloat(document.getElementById('number-peso').value)
            let altura = parseFloat(document.getElementById('number-altura').value)
            let text = document.getElementById('imc-result')

            let imc = peso/(altura*altura)

            if (imc < 18.5) text.innerHTML = `IMC: ${imc.toFixed(2)} <br> Abaixo do peso`
            else if(imc < 24.9) text.innerHTML = `IMC: ${imc.toFixed(2)} <br> Peso normal`
            else if(imc < 29.9) text.innerHTML = `IMC: ${imc.toFixed(2)} <br> Sobrepeso`
            else if(imc < 34.9) text.innerHTML = `IMC: ${imc.toFixed(2)} <br> Obesidade grau 1`
            else if(imc < 39.9) text.innerHTML = `IMC: ${imc.toFixed(2)} <br> Obesidade grau 2`
            else text.innerHTML = `IMC: ${imc.toFixed(2)} <br> Obesidade grau 3`
        }