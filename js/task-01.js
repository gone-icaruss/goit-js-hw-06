// const categoryRef = document.querySelectorAll('.item')
// console.log(categoryRef)
// console.log(`В списке ${categoryRef.length} категории`)
// console.log('==========================')

// categoryRef.forEach(function (element) {
//     const titleRef = element.querySelector('h2');
//     const numberRef = element.querySelectorAll('li');
//     console.log(`Категория: ${titleRef.textContent}\nКоличество элементов: ${numberRef.length}`)
//     console.log('==========================')
// })
 



   
const categoryRef = document.querySelector('#categories')
console.log(`В списке ${categoryRef.children.length} категории.`)
const childrenList = Array.from(categoryRef.children)
console.dir(childrenList)
childrenList.forEach(e => {
    console.log(`Категория: ${e.firstElementChild.textContent}`)
    console.log(`Количество элементов: ${e.lastElementChild.children.length}`)
});