

const inputRef = document.querySelector('#name-input');
const spanRef = document.querySelector('#name-output');


const updateValue = event => {
    if (event.target.value === '') {
        spanRef.textContent = "Anonymous";
        return;
    }
    spanRef.textContent = event.target.value;
};
inputRef.addEventListener('input', updateValue);