// grab DOM elements

// initialize state

// set event listeners on each button, do math, and update DOM
const additionNumber1 = document.getElementById('addition-number-1');
const additionNumber2 = document.getElementById('addition-number-2');
const button = document.getElementById('add-button');
const resultsBox = document.getElementById('results-box');

button.addEventListener('click', () => {
    resultsBox.value = Number(additionNumber1.value) + Number(additionNumber2.value);
});

const subtractionNumber1 = document.getElementById('subtraction-number-1');
const subtractionNumber2 = document.getElementById('subtraction-number-2');
const button2 = document.getElementById('subtraction-button');
const resultsBox2 = document.getElementById('results-box2');

button2.addEventListener('click', () => {
    resultsBox2.value = Number(subtractionNumber1.value) - Number(subtractionNumber2.value);
});

const multiplyNumber1 = document.getElementById('multiply-number-1');
const multiplyNumber2 = document.getElementById('multiply-number-2');
const button3 = document.getElementById('multiply-button');
const resultsBox3 = document.getElementById('results-box3');

button3.addEventListener('click', () => {
    resultsBox3.value = Number(multiplyNumber1.value) * Number(multiplyNumber2.value);
});

const divideNumber1 = document.getElementById('divide-number-1');
const divideNumber2 = document.getElementById('divide-number-2');
const button4 = document.getElementById('divide-button');
const resultsBox4 = document.getElementById('results-box4');

button4.addEventListener('click', () => {
    resultsBox4.value = Number(divideNumber1.value) / Number(divideNumber2.value);
});
