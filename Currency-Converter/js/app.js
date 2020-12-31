const currencyOne = document.getElementById('currency-one');
const currencyTwo = document.getElementById('currency-two');
const amtOne = document.getElementById('amount-one');
const amtTwo = document.getElementById('amount-two');

const convert = document.getElementById('swap');
const rate = document.getElementById('rate');


function calculate() {
    const currOne = currencyOne.value;
    const currTwo = currencyTwo.value;

    fetch(`https://api.exchangeratesapi.io/latest?base=${currOne}`)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const rate = data.rates[currTwo];
        console.log(rate);
        rate.innerText = `1 ${currOne} = ${rate} ${currTwo}`;
        amtTwo.value = (amtOne.value * rate).toFixed(2);
    });
}

// Event Listener

currencyOne.addEventListener('change', calculate);
amtOne.addEventListener('input', calculate);
currencyTwo.addEventListener('change', calculate);
amtTwo.addEventListener('input', calculate);

swap.addEventListener('click', () => {
    const temp = currencyOne.value;
    currencyOne.value = currencyTwo.value;
    currencyTwo.value = temp;
    calculate();
  });
  
calculate();
