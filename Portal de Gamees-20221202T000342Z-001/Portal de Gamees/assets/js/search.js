// chave api = https://api.rawg.io/api/games?key=1ab0c2418c6f436fb12e30f50bea9231&dates=2019-09-01,2019-09-30&platforms=18,1,7

fetch(`https://api.rawg.io/api/games?key=1ab0c2418c6f436fb12e30f50bea9231&dates=2019-09-01,2019-09-30&platforms=18,1,7`).then(resposta => {
    return resposta.json()
}).then(response => {
    let data = response.results;
    
    data.map(element => { 
        
        const root = document.getElementById('root');
        const urlParams = new URLSearchParams(window.location.search);
        const nome      = urlParams.get('nome')
        const div       = document.createElement("div");
        const img       = document.createElement("img");
        const secondDiv = document.createElement("div");
        const primeira_lista     = document.createElement("ul");
        const paragrafo          = document.createElement("p");
        const primeira_ul        = document.createElement("ul");
        const segunda_ul         = document.createElement("ul");
        const primeiro_paragrafo = document.createElement("p");
        const segundo_paragrafo  = document.createElement("p");
        const terceiro_paragrafo = document.createElement("p");
        const plataformas = [];
        const generos     = [];
        const lojas       = [];

        if(element.name.toUpperCase().includes(nome.toUpperCase())) {
            div.setAttribute('class', 'card');
            div.setAttribute('style', '18rem');
            img.setAttribute('src', element.background_image);
            img.setAttribute('class', 'card-img-top');
            secondDiv.setAttribute('class', 'card-body');

            element.platforms.map(elem => {
                plataformas.push(elem.platform.name);

                paragrafo.innerHTML = 'Plataformas: ';
                primeira_lista.appendChild(paragrafo);
            });

            for (let i = 0; i < plataformas.length; i++) {
                let primeiro_item_lista = document.createElement("li");
                
                primeiro_item_lista.textContent = plataformas[i];

                primeira_lista.appendChild(primeiro_item_lista);
            }

            element.genres.map(elem => {
                generos.push(elem.name);

                primeiro_paragrafo.innerHTML = 'Gêneros: ';
                primeira_ul.appendChild(primeiro_paragrafo);
            });

            for (let i = 0; i < generos.length; i++) {
                let primeira_li = document.createElement("li");
                
                primeira_li.textContent = `${generos[i]}`;

                primeira_ul.appendChild(primeira_li);
            }

            element.stores.map(stored => {
                lojas.push(stored.store.name);

                terceiro_paragrafo.innerHTML = 'Lojas: ';
                segunda_ul.appendChild(terceiro_paragrafo);
            });

            for (let i = 0; i < lojas.length; i++) {
                let segunda_li = document.createElement("li");
                
                segunda_li.textContent = `${lojas[i]}`;

                segunda_ul.appendChild(segunda_li);
            }

            segundo_paragrafo.style.textAlign = 'center';
            segundo_paragrafo.innerHTML = `Data da Atualização: ${element.updated}`;

            root.setAttribute('class', 'row');

            div.appendChild(img);
            div.appendChild(secondDiv);
            secondDiv.appendChild(primeira_lista);
            secondDiv.appendChild(primeira_ul);
            secondDiv.appendChild(segunda_ul);
            secondDiv.appendChild(segundo_paragrafo);
            root.appendChild(div);
        }
    });
});
