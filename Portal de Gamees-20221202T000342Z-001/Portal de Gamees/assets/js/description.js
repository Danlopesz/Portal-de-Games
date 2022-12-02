// chave api = https://api.rawg.io/api/games?key=1ab0c2418c6f436fb12e30f50bea9231&dates=2019-09-01,2019-09-30&platforms=18,1,7

fetch(`https://api.rawg.io/api/games?key=1ab0c2418c6f436fb12e30f50bea9231&dates=2019-09-01,2019-09-30&platforms=18,1,7`).then(resposta => {
    return resposta.json()
}).then(response => {
    let data = response.results;
    
    data.map(element => { 
        
        const root = document.getElementById('root');
        const urlParams = new URLSearchParams(window.location.search);
        const id        = urlParams.get('id')
        const div       = document.createElement("div");
        const img       = document.createElement("img");
        const secondDiv = document.createElement("div");
        const ul        = document.createElement("ul");
        const paragrafo = document.createElement("p");
        const ul1       = document.createElement("ul");
        const ul2       = document.createElement("ul");
        const p1        = document.createElement("p");
        const p2        = document.createElement("p");
        const p3        = document.createElement("p");
        const plataformas = [];
        const generos     = [];
        const lojas       = [];

        if(element.id == id) {
            div.setAttribute('class', 'card');
            div.setAttribute('style', '18rem');
            img.setAttribute('src', element.background_image);
            img.setAttribute('class', 'card-img-top');
            secondDiv.setAttribute('class', 'card-body');

            element.platforms.map(elem => {
                plataformas.push(elem.platform.name);

                paragrafo.innerHTML = 'Plataformas: ';
                ul.appendChild(paragrafo);
            });

            for (let i = 0; i < plataformas.length; i++) {
                var li         = document.createElement("li");
                
                li.textContent = plataformas[i];

                ul.appendChild(li);
            }

            element.genres.map(elem => {
                generos.push(elem.name);

                p1.innerHTML = 'Gêneros: ';
                ul1.appendChild(p1);
            });

            for (let i = 0; i < generos.length; i++) {
                var li1         = document.createElement("li");
                
                li1.textContent = `${generos[i]}`;

                ul1.appendChild(li1);
            }

            element.stores.map(stored => {
                lojas.push(stored.store.name);

                p3.innerHTML = 'Lojas: ';
                ul2.appendChild(p3);
            });

            for (let i = 0; i < lojas.length; i++) {
                var li2         = document.createElement("li");
                
                li2.textContent = `${lojas[i]}`;

                ul2.appendChild(li2);
            }

            p2.style.textAlign = 'center';
            p2.innerHTML = `Data da Atualização: ${element.updated}`;

            root.setAttribute('class', 'row');

            div.appendChild(img);
            div.appendChild(secondDiv);
            secondDiv.appendChild(ul);
            secondDiv.appendChild(ul1);
            secondDiv.appendChild(ul2);
            secondDiv.appendChild(p2);
            root.appendChild(div);
        }
    });
});
