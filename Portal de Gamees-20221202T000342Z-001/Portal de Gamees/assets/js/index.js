// chave api = https://api.rawg.io/api/games?key=1ab0c2418c6f436fb12e30f50bea9231&dates=2019-09-01,2019-09-30&platforms=18,1,7

fetch(`https://api.rawg.io/api/games?key=1ab0c2418c6f436fb12e30f50bea9231&dates=2019-09-01,2019-09-30&platforms=18,1,7`).then(resposta => {
    return resposta.json()
}).then(response => {
    let data = response.results;
    
    data.map(element => { 
        
        const root      = document.getElementById('root');
        const div       = document.createElement("div");
        const img       = document.createElement("img");
        const secondDiv = document.createElement("div");
        const h5        = document.createElement("h5");
        const p         = document.createElement("p");
        const a         = document.createElement("a");

        div.setAttribute('class', 'card');

        img.setAttribute('src', element.background_image);
        img.setAttribute('class', 'card-img-top');

        secondDiv.setAttribute('class', 'card-body');

        h5.setAttribute('class', 'card-title');
        h5.innerHTML = element.name;

        p.setAttribute('class', 'card-text');
        p.innerHTML = element.released;
        
        a.setAttribute('href', `./pages/description.html?id=${element.id}`);
        a.innerHTML = 'Description';
        a.setAttribute('class', 'btn btn-primary');
        
        root.setAttribute('class', 'row');

        div.appendChild(img); div.appendChild(secondDiv);
        secondDiv.appendChild(h5); secondDiv.appendChild(p);
        secondDiv.appendChild(a); root.appendChild(div);

    });
})

function redirecionarPagina() {
    const input_search  = document.getElementById('input-search');
    const input_value   = input_search.value;

    location.href = `../../pages/search.html?nome=${input_value}`;
}
