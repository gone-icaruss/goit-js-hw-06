{/* <input
      type="text"
      id="validation-input"
      data-length="6"
      placeholder="Please enter 6 symbols"
    /> */}


const input = document.querySelector('#validation-input');
const getDataSetLength = parseInt(input.dataset.length);
// const inputValueLength = input.value.length;
    
input.addEventListener('blur', function (evt) {
    // console.log(evt.target.value.length)
    // console.log(evt.target.value.length === getDataSetLength)
    
    if (evt.target.value.length === getDataSetLength) {
        input.classList.add('valid');
        input.classList.remove('invalid');
    } else {
        input.classList.add('invalid');
        input.classList.remove('valid');
    }
})


// console.log(getDataSetLength)
// console.log(inputValueLength)
// console.log(typeof getDataSetLength)
// console.log(typeof inputValueLength)

