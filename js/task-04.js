//   <button type="button" data-action="decrement">-1</button>
//       <span id="value">0</span>
//       <button type="button" data-action="increment">+1</button>
//     </div>


const btn = {
    add: document.querySelector('[data-action="decrement"]'),
    sub: document.querySelector('[data-action="increment"]'),
    span: document.querySelector('#value'),
}

let counterValue = 0

const increment = () => {
    counterValue -= 1;

    btn.span.textContent = counterValue
};

const decrement = () => {
    counterValue += 1;

    btn.span.textContent = counterValue
};

btn.add.addEventListener('click', increment)
btn.sub.addEventListener('click', decrement)