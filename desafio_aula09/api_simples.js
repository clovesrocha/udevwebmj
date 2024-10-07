const express = require('express');
const app = express();
const port = 3000;

// Rota para a API
app.get('/api', (req, res) => {
    res.json({ message: 'Hello, API!' });
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
