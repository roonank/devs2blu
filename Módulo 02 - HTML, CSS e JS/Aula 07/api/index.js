
// Importar dependência/pacote do Express
const express = require('express')

// Objeto Express (Manipular rotas e o servidor)
const app = express()

// Habilitar receber objeto JSON nas requisições
app.use(express.json())

// Vetor para armazenar dados pessoais
let vetor = [
    {id: 1, nome:'Alice', idade:23},
    {id: 2, nome:'Jorge', idade:25},
    {id: 3, nome:'Larissa', idade:26}
];

// Rota para efetuar uma requisição GET
app.get('/', (req, res) => {
  res.status(200).json(vetor)
  
    //res.json({'nome':'Ronan', 'idade':30})
})

// Rota para efetuar uma requisição POST
app.post('/', (req, res) => {
    res.send(req.body)
})

// Servidor
app.listen(3000)

