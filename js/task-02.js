const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listRef = document.querySelector('#ingredients')

const createElement = element => {
  const createItem = element =>
    element.map(item => {
  const itemRef = document.createElement('li')
  itemRef.textContent = item
  itemRef.classList.add('item')
  return itemRef
    })
  
  listRef.append(...createItem(element))
};


createElement(ingredients)