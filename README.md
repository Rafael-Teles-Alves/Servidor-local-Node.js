# Criando Servidor Local Usando Node.js

## Sistema Simples de Servidor Local para Sites ou Sistemas com Node.js

### 1 - Configurando o Ambiente de Desenvolvimento

Abra o terminal e execute os seguintes comandos:

```bash
mkdir rafa-server  # Criar diretório do projeto
cd rafa-server     # Entrar no diretório
npm init -y        # Inicializar o projeto com configurações padrão
npm install express # Instalar o framework Express
```

---

### 2 - Criando o Servidor com Node.js

No mesmo diretório, crie um arquivo chamado `server.js` e insira o seguinte código:

```javascript
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
```

**Nota:** Você pode substituir o conteúdo em `res.send()` por uma página HTML, como `res.sendFile(__dirname + '/index.html')`.

---

### 3 - Iniciando o Servidor

Para rodar o servidor, execute o seguinte comando no terminal:

```bash
node server.js
```

Agora, o servidor estará rodando localmente. Para acessar o servidor, abra um navegador e digite o endereço IP da máquina seguido pela porta (se não for a porta 80). Por exemplo:

```
http://192.168.0.100
```

---

### 4 - Criando um Nome de Domínio Local

Para facilitar o acesso ao servidor sem digitar o endereço IP, é possível configurar um domínio local. Isso deve ser feito em cada máquina que acessará o servidor.

#### Passos:

1. No Windows, abra o arquivo `hosts` localizado em:
   
   ```
   C:\Windows\System32\drivers\etc\hosts
   ```

2. Abra o arquivo com um editor de texto, como o Bloco de Notas.

3. Adicione uma entrada no final do arquivo com o formato:

   ```
   [ENDEREÇO_IP] [DOMÍNIO]
   ```
   
   Exemplo:
   ```
   192.168.0.100 site.local
   ```

4. Salve o arquivo e feche o editor.

5. Abra o navegador e digite o domínio configurado, como:

   ```
   http://site.local
   ```

Agora, o site estará acessível pelo domínio configurado.

---

### 5 - Melhorando o Projeto

#### Sugestões:

- **Adicionar HTML e CSS:** Inclua arquivos estáticos para melhorar a interface do site. Use o middleware `express.static` para servir arquivos estáticos:

  ```javascript
  app.use(express.static('public')); // Servir arquivos estáticos da pasta 'public'
  ```

- **Configurar HTTPS:** Para maior segurança, considere configurar HTTPS com certificados SSL.

- **Hospedagem Permanente:** Para rodar o servidor continuamente, use ferramentas como [PM2](https://pm2.keymetrics.io/):

  ```bash
  npm install -g pm2
  pm2 start server.js
  ```

---

Com isso, você terá um servidor local funcional e configurado para ser acessado com facilidade! 🚀

