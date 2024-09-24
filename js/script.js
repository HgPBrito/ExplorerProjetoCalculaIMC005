import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { calculateIMC, notANumber} from './utils.js';

const form = document.querySelector('form');
const inputWeight = document.querySelector('#info-weight');
const inputHeight = document.querySelector('#info-height');

form.onsubmit = (event) => {
    
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const weightOrHeightIsNotANumber = notANumber(weight) || notANumber(height);

    if(weightOrHeightIsNotANumber) {
        AlertError.open();
        return;
    }

    AlertError.close();

    const result = calculateIMC(weight, height);
    
    displayResultMessege(result);

    inputWeight.value = "";
    inputHeight.value = "";
}

function displayResultMessege(result) {
    const message = `O sei IMC é de: ${result} `;    
    Modal.message.innerText = message;
    Modal.open(); 
}

window.addEventListener('keydown', handleKeyDown);

inputWeight.addEventListener("input", handleKeyANumber);
inputHeight.addEventListener("input", handleKeyANumber);

function handleKeyDown(event) {

    if(event.key === 'Escape') {
        Modal.close();
    }
}

function handleKeyANumber() {
    AlertError.close();
}