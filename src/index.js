import { average } from './average.js';

const grade1 = document.querySelector('#grade1');
const grade2 = document.querySelector('#grade2');
const grade3 = document.querySelector('#grade3');
const gradeForm = document.querySelector('#grade-form');
const result = document.querySelector('#result');

const calculateAverage = (event) => {
    event.preventDefault();
    const grade1Value = parseFloat(grade1.value);
    const grade2Value = parseFloat(grade2.value);
    const grade3Value = parseFloat(grade3.value);
    const averageValue = average(grade1Value, grade2Value, grade3Value);
    result.textContent = averageValue;
    return averageValue
}

gradeForm.addEventListener('submit', calculateAverage);