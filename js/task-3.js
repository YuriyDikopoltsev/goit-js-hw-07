const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const images = [
  {
    url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const galleryContainerRef = document.querySelector('#gallery');
galleryContainerRef.insertAdjacentHTML(
  'afterbegin',
  images.reduce((acc, { url, alt }) => {
    acc += ` <li class= 'gallery__item'><img class='gallery__image' src="${url}" alt="${alt}}"/><li>`;
    return acc;
  }, ''),
);

// const galleryContainerRef = document.querySelector('#gallery');
// const makeImageList = images => {
//   return images.map(image => {
//     const imageRef = document.createElement('img');
//     imageRef.setAttribute('src', `${image.url}`);
//     imageRef.setAttribute('alt', `${image.alt}`);
//     return imageRef;
//   });
// };
// const references = makeImageList(images);

// galleryContainerRef.append(...references);
