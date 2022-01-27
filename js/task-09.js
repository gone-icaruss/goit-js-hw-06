function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const btnColor = document.querySelector('.change-color');
const span = document.querySelector('.color');

btnColor.addEventListener('click',changeBackGroundColor);

function changeBackGroundColor(evt) {
  const selectedColor = getRandomHexColor()
  span.textContent = `${selectedColor}`;
  span.style.color = selectedColor;
  document.body.style.background = selectedColor
}
