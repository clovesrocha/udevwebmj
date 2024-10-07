// Função assíncrona para buscar dados de uma API
async function fetchData(url) {
    try {
        const response = await fetch(url); // Faz a requisição
        if (!response.ok) {
            throw new Error('Erro na requisição');
        }
        const data = await response.json(); // Converte a resposta para JSON
        console.log(data); // Exibe os dados no console
    } catch (error) {
        console.error('Erro:', error);
    }
}

// Exemplo de uso
fetchData('https://api.example.com/data');
