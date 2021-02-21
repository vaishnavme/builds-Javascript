const searchBar = document.querySelector("#inputText");
const characterList = document.querySelector("#character-list");

const API = "https://hp-api.herokuapp.com/api/characters";

let character = [];

function searchCharacter(e) {
	const personName = e.target.value.toLowerCase();

	const foundPerson = character.filter((person) => {
		return person.name.toLowerCase().includes(personName);
	});
	displayCharacter(foundPerson);
}

async function getCharacter() {
	const response = await fetch(API);
	character = await response.json();
	displayCharacter(character);
}

function displayCharacter(character) {
	console.log(character);
	let listItems = character
		.map((person) => {
			return `<li>
            <img src=${person.image} alt=${person.name}>
            <h3>${person.name}</h3>
            <h4>${person.actor}</h4>
        </li>
        `;
		})
		.join("");
	characterList.innerHTML = listItems;
}

searchBar.addEventListener("keyup", searchCharacter);
getCharacter();
