document.getElementById('search').addEventListener('input', function () {
    const term = this.value.toLowerCase();
    
    let serversFound = [];  // Armazena todos os servidores que correspondem ao termo de busca

    // Se o campo de busca estiver vazio, removemos o destaque de todos os servidores
    if (term === "") {
        document.querySelectorAll('.server').forEach(server => {
            server.classList.remove('highlight');  // Remove o destaque de todos os servidores
        });
        return;  // Interrompe a execução se o campo de busca estiver vazio
    }

    document.querySelectorAll('.server').forEach(server => {
        if (server.innerText.toLowerCase().includes(term)) {
            server.classList.add('highlight');  // Destaca o servidor
            serversFound.push(server);  // Adiciona o servidor à lista de encontrados
        } else {
            server.classList.remove('highlight');  // Remove o destaque
        }
    });

    // Variável para controlar o servidor atual
    let currentIndex = 0;

    // Função para rolar até o próximo servidor correspondente
    function scrollToNextServer() {
        if (serversFound.length > 0) {
            serversFound[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
            currentIndex = (currentIndex + 1) % serversFound.length;  // Circular para o próximo servidor
        }
    }

    // Adicionando a ação para quando o usuário pressionar Enter
    document.getElementById('search').addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            scrollToNextServer();
        }
    });
});