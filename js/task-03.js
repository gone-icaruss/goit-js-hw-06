const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];


// const listRef = document.querySelector('.gallery');

// const createGalery = element => {
//     const makeImg = element =>
//       element.map(({ url, alt }) => {
//           return `<li></img src=${url} alt=${alt}></li>`
//         }).join('');
    
//   listRef.insertAdjacentHTML('afterbegin', makeImg(element));
//     }
//     createGalery(images)
    
    
    

// const makeImg = images.map(({ url, alt }) => {
//   return `<li></img src="${url}" alt="${alt}"></li>`
// }).join('');

// console.log(makeImg);


// listRef.insertAdjacentHTML("afterbegin", makeImg);
// listRef.classList.add('js-gallery__list', 'list')
// listRef.querySelectorAll('li')
//   .forEach(item => item.classList.add('.js-gallery__item'))

const listRef = document.querySelector('.gallery');
const makeImg = images
    .map(({ url, alt }) => {
      return `<li>
        <img
          src="${url}"
       alt=${alt}/>
           </li>`;
    })
    .join('');
console.log(makeImg);
listRef.insertAdjacentHTML('afterbegin', makeImg);
listRef.classList.add('js-gallery__list', 'list')
listRef.querySelectorAll('li')
  .forEach(item => item.classList.add('.js-gallery__item'))
makeImg(images);