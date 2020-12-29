const inputBillAmount = document.querySelector("#billAmount");
const inputCashGiven = document.querySelector("#cashGiven");
const noOfNotes = document.querySelectorAll(".noNotes");
const amount = document.querySelectorAll(".amount");
var showMessage = document.querySelector("#showInfo");

const enter = document.querySelector("#enter");


const noteArray = [2000, 500, 200, 100, 50, 10, 5, 2, 1]

function processCash(bill, cash) {
    var returnAmt = cash - bill;

    for(let i=0; i<noteArray.length; i++) {
        returnAmt = compare(returnAmt, noteArray[i], i);
    }
}

function compare(remainderAmt, noteAmt, index){
    let noNotesPosition = noOfNotes[index];
    let amountPosition =  amount[index];
    
    if(remainderAmt >= noteAmt){
        let notes = Math.floor(remainderAmt/noteAmt);
        remainderAmt = remainderAmt - notes * noteAmt;

        noNotesPosition.innerText = `${notes}`
        noNotesPosition.style.fontWeight = "bold"
        amountPosition.style.fontWeight = "bold"
    }
    return remainderAmt
}

function cashHandler() {
    let billAmount = inputBillAmount.value;
    let cashGiven = inputCashGiven.value;
    if(billAmount == "" | cashGiven == "") {
        showMessage.innerText = "Invalid Cash Amount"
    } else if(billAmount > cashGiven) {
        showMessage.innerHTML = "Insufficient Cash"
    } else if(billAmount == cashGiven) {
        showMessage.innerText = "No cash to return"
    } else {
        processCash(billAmount, cashGiven);
    }
}

enter.addEventListener("click", cashHandler);