let display = document.querySelector('.calc__display');
const btnCancel = document.querySelector('.button-cancel');
const btnBackspace = document.querySelector('.button-backspace');
const btnPlus = document.querySelector('.button-plus');
const numZero = document.querySelector('.button-zero');
const numOne = document.querySelector('.button-one');
const numTwo = document.querySelector('.button-two');
const numThree = document.querySelector('.button-three');
const numFour = document.querySelector('.button-four');
const numFive = document.querySelector('.button-five');
const numSix = document.querySelector('.button-six');
const numSeven = document.querySelector('.button-seven');
const numEight = document.querySelector('.button-eight');
const numNine = document.querySelector('.button-nine');

let buffer = '0';
let runningTotal = 0;
let previousOperator;

document.querySelector('.calc__buttons').addEventListener('click', function (event) {
  detect(event.target.textContent);

  console.log(event.target.textContent);
});

function detect(value) {
  if (isNaN(parseInt(value))) {
    getSymbol(value);

  } else {
    getNumber(value);
  }

  showOnDisplay();
}

function getSymbol(value) {
  console.log('Function get a symbol ' + value);
  switch (value) {

    case 'C':
      buffer = '0';
      runningTotal = 0;
      previousOperator = null;
      break;

    case '=':
      if (previousOperator === null) {
        return;
      }
      doMath(parseInt(buffer));
      previousOperator = null;
      buffer = '' + runningTotal;
      runningTotal = 0;
      break;

    case '←':
      if (buffer.length === 1) {
        console.log(buffer);
        buffer = '0';
      } else {
        console.log('slice ' + buffer);
        buffer = buffer.slice(0, -1);
      }
      break;

    default:
      getMathSign(value);
      break;
  }
}

function getNumber(value) {
  if (buffer === '0') {
    buffer = value;
  } else {
    buffer += value;
  }
}

function showOnDisplay() {
  display.innerText = buffer;
}

function getMathSign(value) {
  const bufferInt = parseInt(buffer);
  if (runningTotal === 0) {
    runningTotal = bufferInt;
  } else {
    doMath(bufferInt);
  }

  previousOperator = value;

  buffer = '0';
}

function doMath(bufferInt) {
  if (previousOperator === '+') {
    runningTotal += bufferInt;
  } else if (previousOperator === '-') {
    runningTotal -= bufferInt;
  } else if (previousOperator === '×') {
    runningTotal *= bufferInt;
  } else {
    runningTotal /= bufferInt;
  }
}





// const numbers = [numZero, numOne, numTwo, numThree, numFour, numFive, numSix, numSeven, numEight, numNine];

// let buffer = 0;

// btnCancel.addEventListener('click', function () {
//   display.innerText = 0;
// })

// btnBackspace.addEventListener('click', function () {
//   if (display.textContent.length === 1) {
//     display.innerText = 0;
//   } else {
//     display.textContent = display.textContent.slice(0, -1);
//   }

// })



// numbers.forEach(number => {

//   number.addEventListener('click', event => {
//     if (display.textContent[0] === '0') {
//       display.innerText = '';
//     }
//     display.innerText += number.textContent;
//   });

// });



// btnPlus.addEventListener('click', function () {
//   num = parseInt(display.textContent);
//   num += buffer;
//   console.log(buffer);
//   display.innerText = 0;
// })





