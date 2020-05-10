const api = "https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72";

// Chamando o ID da DIV
const cardTodos = document.querySelector("#cardGama");
let data = [];

// Chamando o Fetch na API
async function buscaRegistros() {
    let resposta = await fetch(api);

    const dataResposta = await resposta.json();
    return dataResposta;
}

// Varrendo para renderizar
function criarCards(cards) {
    cardGama.innerHTML = "";
    cards.map(renderCard);
}

// Criando as hospedagens
function renderCard(card) {
    var div = document.createElement("div");
    div.className = "item";

    var fotoPropriedade = document.createElement("img");
    fotoPropriedade.src = card.photo;

    var propriedadeTipo = document.createElement("p");
    propriedadeTipo.id = "tipoPropriedade";
    propriedadeTipo.innerHTML = card.property_type;

    var nomePropriedade = document.createElement("p");
    nomePropriedade.innerHTML = card.name;
    nomePropriedade.id = "nomePropriedade";

    var precoPropriedade = document.createElement("p");
    precoPropriedade.innerHTML = `R$ ${card.price},00 por noite`;
    precoPropriedade.id = "precoPropriedade";

    div.appendChild(fotoPropriedade);
    div.appendChild(nomePropriedade);
    div.appendChild(propriedadeTipo);    
    div.appendChild(precoPropriedade);

    cardGama.appendChild(div);
}

// Função principal

async function main() {
    data = await buscaRegistros();

    if (data[0]) {
        criarCards(data);
    }
}

main();


