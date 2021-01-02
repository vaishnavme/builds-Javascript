const currencyOne = document.querySelector('#currency-one');
const currencyTwo = document.querySelector('#currency-two');

const amtOne = document.querySelector('#amount-one');
const amtTwo = document.querySelector('#amount-two');

function append(pareantEl, childEl) {
    return pareantEl.appendChild(childEl);
}

fetch(`https://api.exchangeratesapi.io/latest?base=`)
  .then(res => res.json())
  .then(data => {
      const rateKey = Object.keys(data.rates)
      
      for(let i=0; i<rateKey.length; i++) {
          let option = document.createElement("option")
          option.value = rateKey[i];
          option.text = rateKey[i];

          let optionClone = option.cloneNode(true)
          
          currencyOne.add(option)
          currencyTwo.add(optionClone);
    }
}); 

function calculate() {
    let currOne = currencyOne.value;
    let currTwo = currencyTwo.value;
    fetch(`https://api.exchangeratesapi.io/latest?base=${currOne}`)
    .then(res => res.json())
    .then(data => {
        const rate = data.rates[currTwo];
        amtTwo.value = (amtOne.value * rate).toFixed(2);
    });
}


currencyOne.addEventListener('change', calculate);
amtOne.addEventListener('input', calculate);
currencyTwo.addEventListener('change', calculate);
amtTwo.addEventListener('input', calculate);


