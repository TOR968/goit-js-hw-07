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

for (let element of images) {
  document
    .querySelector('#gallery')
    .insertAdjacentHTML(
      'beforeend',
      `<li><img src="${element.url}" alt="${element.alt}" width = 500></li>`,
    );
}

// const element = images.map(option => {
//   const imgEl = document.createElement('img');
//   imgEl.src = option.url;
//   imgEl.alt = option.alt;
//   imgEl.width = 520;
//   console.log(imgEl);
//   return imgEl;
// });

// const ulEl = document
//   .querySelector('#gallery')
//   .insertAdjacentHTML('beforeend', `<li> ${element} </li>`);
