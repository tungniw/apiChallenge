const baseURL = 'https://pokeapi.co/api/v2/pokemon';

let url;
let type;
const searchTerm = document.querySelector('.search');
const submitBtn = document.querySelector('.submit');
const searchForm = document.querySelector('form');
const pokemonName = document.querySelector('.pokemonName');
const pokemonImage = document.querySelector('.pokemonImage');
const pokemonHp = document.querySelector('.pokemonHp')
const pokemonHeight = document.querySelector('.pokemonHeight');
const pokemonWeight = document.querySelector('.pokemonWeight');
// let pokemonImageBox = document.querySelector('.pokemonImageBox');
const pokemonType = document.querySelector('.pokemonType');
pokemonImage.style.display = 'none';
const pokemonImageBox = document.querySelector('.pokemonImageBox');

searchForm.addEventListener('submit', fetchResults);

const section = document.querySelector('section');

// let img = document.createElement('img');



function fetchResults(e) {
    e.preventDefault();
    url = `${baseURL}/${searchTerm.value}`;


fetch(url)
        .then(function (result) {
            console.log(result)
            return result.json();
        })
        .then(function (json) {
            console.log(json);
            displayResults(json);
        })
}

function displayResults(json) {
    console.log('Display Results', json);

    displayPokemonName(json)
    displayPokemonImage(json)
    displayPokemonHp(json)
    displayPokemonHeight(json)
    displayPokemonWeight(json)
    displayPokemonType(json)
    
    
    
    
    while (section.firstChild) {
        section.removeChild(section.firstChild);
    }    
}
    
function displayPokemonName(json) {
        pokemonName.innerText = json.name
    }

function displayPokemonHp(json) {

    let Hp = `HP: ${json.stats[0].base_stat}`
        pokemonHp.innerText = Hp
}

function displayPokemonHeight(json) {

    let height = `Height: ${json.height}`;

        pokemonHeight.innerText = height;
}

function displayPokemonWeight(json) {

    let weight = `Weight: ${json.weight}lbs`;

        pokemonWeight.innerText = weight;
}

// function displayPokemonWeight(json) {
//     pokemonWeight.innerText = json.weight
// }

function displayPokemonType(json) {
    // pokemonType.innerText = json.types[0].type.name
    type = `Type: ${json.types[0].type.name}`;
    pokemonType.innerText = type;
    console.log(type);

    if (type === "Type: fire") {
        pokemonImageBox.style.backgroundColor = "orange";
    } else if (type === "Type: water") {
        pokemonImageBox.style.backgroundColor = "blue";
    } else if (type === "Type: normal") {
            pokemonImageBox.style.backgroundColor = "gray";
    } else if (type === "Type: grass") {
        pokemonImageBox.style.backgroundColor = "green";
    } else if (type === "Type: electric") {
        pokemonImageBox.style.backgroundColor = "yellow";
    } else if (type === "Type: ice") {
        pokemonImageBox.style.backgroundColor = "lightBlue";
    } else if (type === "Type: fighting") {
        pokemonImageBox.style.backgroundColor = "red";
    } else if (type === "Type: fairy") {
        pokemonImageBox.style.backgroundColor = "lightPink";
    } else if (type === "Type: poison") {
        pokemonImageBox.style.backgroundColor = "purple";
    } else if (type === "Type: ground") {
        pokemonImageBox.style.backgroundColor = "brown";
    } else if (type === "Type: flying") {
        pokemonImageBox.style.backgroundColor = "Purple";
    } else if (type === "Type: psychic") {
        pokemonImageBox.style.backgroundColor = "pink";
    } else if (type === "Type: bug") {
        pokemonImageBox.style.backgroundColor = "lightGreen";
    } else if (type === "Type: rock") {
        pokemonImageBox.style.backgroundColor = "Grey";
    } else if (type === "Type: ghost") {
        pokemonImageBox.style.backgroundColor = "Purple";
    } else if (type === "Type: dark") {
        pokemonImageBox.style.backgroundColor = "black";
    } else if (type === "Type: dragon") {
        pokemonImageBox.style.backgroundColor = "red";
    } else if (type === "Type: steel") {
        pokemonImageBox.style.backgroundColor = "gray";
    }
}

    
function displayPokemonImage(img) {
    pokemonImage.style.display = "block"; 
    console.log(img.sprites.front_default);
    pokemonImage.src = img.sprites.front_default;
}
// pokemonImageBox.style.backgroundColor = "black";
// function changeColor() {
//     type = `Type: ${.types[0].type.name}`;
