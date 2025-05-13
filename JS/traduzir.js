// MEU SCRIPT PARA TRADUZIR A PAGINA PARA ES/PT
    const translations = {
        en: {
            title: "WoW Private Server List",
            headerTitle: "World of Warcraft private server list",
            headerSubtitle: "Click on the server name to go to the server website",
            classicHeader: "CLASSIC",
            footerText: "Updated on 05/13/2025<br>by Deathheavy",
            avgPop: "Avg Pop",
            style: "Style",
            rates: "Rates",
            searchPlaceholder: "Search server...",
        },
        es: {
            title: "Lista de Servidores Privados de WoW",
            headerTitle: "Lista de servidores privados de World of Warcraft",
            headerSubtitle: "Haz clic en el nombre del servidor para acceder a su sitio web",
            classicHeader: "CLÁSICO",
            footerText: "Actualizado el 13/05/2025<br>por Deathheavy",
            avgPop: "Pob prom",
            style: "Estilo",
            rates: "Tasas",
            searchPlaceholder: "Buscar servidor...",
        },
        pt: {
            title: "Lista de Servidores Privados de WoW",
            headerTitle: "Lista de servidores privados de World of Warcraft",
            headerSubtitle: "Clique no nome do servidor para ir ao site do servidor",
            classicHeader: "CLÁSSICO",
            footerText: "Atualizado em 13/05/2025<br>por Deathheavy",
            avgPop: "Pop Média",
            style: "Estilo",
            rates: "Taxas",
            searchPlaceholder: "Buscar servidor...",
        },
    };

    const supportedLanguages = Object.keys(translations);
    const userLang = navigator.language || navigator.userLanguage; // Obtem o idioma do navegador
    const lang = userLang.split('-')[0]; // Obtem o idioma base

    let defaultLanguage;
    if (supportedLanguages.includes(lang)) {
        defaultLanguage = lang;
    } else {
        defaultLanguage = 'en'; // Retorna para inglês
    }

    // Função para atualizar o conteúdo com base no idioma selecionado
    function updateContent(language) {
        document.title = translations[language].title;
        document.getElementById('headerTitle').textContent = translations[language].headerTitle;
        document.getElementById('headerSubtitle').textContent = translations[language].headerSubtitle;
        
        const classicHeaders = document.getElementsByClassName('classicHeader');
        if (classicHeaders.length > 0) {
            classicHeaders[0].textContent = translations[language].classicHeader;
        }

        document.getElementById('footerText').innerHTML = translations[language].footerText;

        document.getElementById('search').placeholder = translations[language].searchPlaceholder;

        // Atualiza os detalhes do servidor baseado na linguagem selecionada
        const serverDetails = document.querySelectorAll('.server-details');
        serverDetails.forEach(detail => {
            let text = detail.innerHTML;
            text = text
                .replace(/Avg Pop:/g, `${translations[language].avgPop}:`)
                .replace(/Style:/g, `${translations[language].style}:`)
                .replace(/Rates:/g, `${translations[language].rates}:`);
            detail.innerHTML = text;
        });
    }

    // Inicia a função de atualização com o idioma padrão
    updateContent(defaultLanguage);