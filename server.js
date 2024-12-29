const express = require('express');
const app = express();
const port = 80; // Porta padrão para HTTP

// Rota principal
app.get('/', (req, res) => {
    res.send('Bem-vindo ao servidor!'); // Mensagem ou conteúdo exibido ao acessar a rota principal
});

// Iniciar o servidor
app.listen(port, '0.0.0.0', () => { // Vincula o servidor ao endereço IP local
    console.log('Servidor iniciado e acessível na rede!');
});