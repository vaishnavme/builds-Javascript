// Selecting html elements
const select = document.querySelectorAll("select");
const input = document.querySelectorAll("input");

const showConverted = document.querySelector("#show");

const API = "https://api.exchangeratesapi.io/latest?base";
let options = "";
// Assign elements
const currencyOne = select[0];
const currencyTwo = select[1];

const amountInputOne = input[0];
const amountInputTwo = input[1];
//

function convertHandler(dataRate) {
	// On input change
	amountInputOne.addEventListener("input", () => {
		amountInputTwo.value = (
			(amountInputOne.value * dataRate[currencyTwo.value]) /
			dataRate[currencyOne.value]
		).toFixed(2);
	});
	amountInputTwo.addEventListener("input", () => {
		amountInputOne.value = (
			(amountInputTwo.value * dataRate[currencyOne.value]) /
			dataRate[currencyTwo.value]
		).toFixed(2);
	});
	// On Selcet change
	currencyOne.addEventListener("change", () => {
		amountInputTwo.value = (
			(amountInputOne.value * dataRate[currencyTwo.value]) /
			dataRate[currencyOne.value]
		).toFixed(2);
	});
	currencyTwo.addEventListener("change", () => {
		amountInputOne.value = (
			(amountInputTwo.value * dataRate[currencyOne.value]) /
			dataRate[currencyTwo.value]
		).toFixed(2);
	});
}

async function calculate() {
	const response = await fetch(API);
	const data = await response.json();
	const rates = data.rates;
	const dataKeys = Object.keys(rates);
	//console.log(rates)

	dataKeys.map((items) => {
		return (options += `<option value=${items}>${items}</option>`);
	});

	for (let i = 0; i < select.length; i++) {
		select[i].innerHTML = options;
	}
	convertHandler(rates);
}

calculate();
