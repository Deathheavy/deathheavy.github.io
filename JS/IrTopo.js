         window.onscroll = function() {
            const button = document.getElementById("bTop");
            // Verifique se o usuário está no final da página
            if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
                button.style.display = "block"; // Mostra o botão
            } else {
                button.style.display = "none"; // Esconde o botão
            }
        };