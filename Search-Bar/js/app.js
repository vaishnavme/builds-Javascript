
const characterList = document.querySelector("#character-list");

const API = 'http://hp-api.herokuapp.com/api/characters'

let character = [];

async function getCharacter() {
    const response = await fetch(API)
    character = await response.json()
    displayCharacter(character)
}

function displayCharacter(character) {
    let listItems = character.map((person) => {
        return `<li>
            <h3>${person.name}</h3>
        </li>
        `
    }).join('')
    characterList.innerHTML = listItems
}

getCharacter()
