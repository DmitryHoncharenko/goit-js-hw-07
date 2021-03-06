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



const itemsLi = images.reduce((image, { url, alt }) => {
  
  image.push(`<li><img src = ${url} , alt =${alt} width=200px>`);
  return image;
 
},[]);

const image = document.querySelector('#gallery');
image.insertAdjacentHTML('afterbegin', itemsLi);
image.style.display = 'flex';
image.style.listStyle = 'none';




// images.map(({url, alt}) => {
//   const image = document.querySelector('#gallery');
//   image.insertAdjacentHTML('afterbegin', `<li><img src = ${url}, alt = ${alt} width=200px>`);
//   image.style.display = 'flex';
//   image.style.listStyle = 'none';
// });


