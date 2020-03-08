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

const linkRef = images.map(image => {
  const itemRef = document.createElement('li');
  itemRef.classList.add('gallery__link');
  const imgRef = document.createElement('img');
  imgRef.src = image.url;
  imgRef.alt = image.alt;
  itemRef.appendChild(imgRef);
  return itemRef;
});

const galleryRef = document.querySelector('#gallery');
galleryRef.classList.add('foto__gallery');

const listRef = document.querySelector('#gallery');
listRef.append(...linkRef);
