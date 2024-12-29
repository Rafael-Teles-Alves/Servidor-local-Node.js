# Criando Servidor Local Usando Node js 

## Criando Sistema Simples De Servidor local para Sites ou Sistemas Usando Node js

 1 - Criando nossa Instalação

 ### Comado No Terminal 
 
    mkdir rafa-server
    cd rafa-server
    npm init -y
    npm install express

 1 - Criando Nosso Servidor

 ### Com Seguintes Codigo

    const express = require('express');
    const app = express();
    const port = 80; // Porta padrão para HTTP
    
    app.get('/', (req, res) => {
        res.send('Bem-vindo ao servidor!'); // Mostrar na Tela podendo ser direcionado a uma pasta como explo 'index.html'
    });
    
    app.listen(port, '0.0.0.0', () => { // IP Da Maquina Server
        console.log('Bem Vindo');
    });
