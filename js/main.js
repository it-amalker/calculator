let display = document.querySelector('.calc__display');
let displayUpper = document.querySelector('.calc__display-upper');

let buffer = '0';
let liveResult = 0;
let previousOperator;


document.querySelector('.calc__buttons').addEventListener('click', function (event) {
  detect(event.target.textContent);
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
  switch (value) {

    case 'C':
      buffer = '0';
      liveResult = 0;
      previousOperator = null;
      break;

    case '=':
      if (previousOperator === null) {
        return;
      }
      doMath(parseInt(buffer));
      previousOperator = null;
      buffer = '' + liveResult;
      liveResult = 0;
      break;

    case '←':
      if (buffer.length === 1) {
        buffer = '0';
      } else {
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
  if (previousOperator !== null && previousOperator !== undefined) {
    displayUpper.innerText = liveResult + ' ' + previousOperator;
  } else {
    displayUpper.innerText = liveResult;
  }
}

function getMathSign(value) {
  const bufferInt = parseInt(buffer);
  if (liveResult === 0) {
    liveResult = bufferInt;
  } else {
    doMath(bufferInt);
  }

  previousOperator = value;

  buffer = '0';
}

function doMath(bufferInt) {
  if (previousOperator === '+') {
    liveResult += bufferInt;
  } else if (previousOperator === '-') {
    liveResult -= bufferInt;
  } else if (previousOperator === '×') {
    liveResult *= bufferInt;
  } else {
    liveResult /= bufferInt;
  }
}