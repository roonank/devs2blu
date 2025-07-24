const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

app.use(cors());
app.use(express.json());

//Palavra / frase secreta
const segredo = "Ready";

app.post('/', (req, res) => {
    const {nome} = req.body;

    //Gerar token
    const token = jwt.sign({nome}, segredo, {expiresIn:'1h'});

    // Retornar
    res.status(200).json(token);
});

app.get('/', (req, res) => {
    // Extrair Bearer do cabeçalho
    const headers = req.headers.authorization;

    // Extrair o token
    const token = headers.split(' ')[1];

    try {
        const validarToken = jwt.verify(token, segredo)
        res.status(200).json({mensagem: 'Autenticado '+ validarToken.nome})
    } catch (error) {
        res.status(400).json({mensagem: 'Falha '+ erro})
    }
});

app.listen(8080);