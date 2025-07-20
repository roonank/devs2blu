
// Importar dependência/pacote do Express
const express = require('express')

//Importar dependências/pacote CORS
const cors = require('cors')

// Objeto Express (Manipular rotas e o servidor)
const app = express()

// Habilitar receber objeto JSON nas requisições
app.use(express.json())

//adicionar CORS
app.use(cors())

// Referenciar arquivo de rotas
const pessoa = require('./rotas/pessoa')

// Adicionar rotas na aplicação
app.use('/', pessoa);

// Servidor
app.listen(3000)

