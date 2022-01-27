//   <input id="font-size-control" type="range" min="16" max="96" />
//     <br />
//     <span id="text">Abracadabra!</span>

const input = document.querySelector('#font-size-control')
const text = document.querySelector('#text')

input.oninput = function ()  {
    text.style.fontSize = input.value + 'px'
}