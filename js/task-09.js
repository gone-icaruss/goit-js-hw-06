
const btnColor = document.querySelector('.change-color');
const span = document.querySelector('.color');

btnColor.addEventListener('click',changeBackGroundColor);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


function changeBackGroundColor() {
  const selectedColor = getRandomHexColor()
  span.textContent = `${selectedColor}`;
  document.body.style.background = selectedColor
}


