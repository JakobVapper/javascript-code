const contianer = document.querySelector('container');
const arrowLeft = container.querySelector('.arrow-left');
const arrowRight = container.querySelector('.arrow-right');
const images = container.querySelector('.img');
const imageWidth = images.querySelector('img').clientWidth;

let imageIndex = 0;
const totalImages = images.querySelectorAll('img').length;

arrowLeft.addEventListener('click', () => {
  imageIndex--;
  if (imageIndex < 0) {
    imageIndex = totalImages - 1;
  }
  images.style.transform = `translateX(${-imageIndex * imageWidth}px)`;
});

arrowRight.addEventListener('click', () => {
  imageIndex++;
  if (imageIndex > totalImages - 1) {
    imageIndex = 0;
  }
  images.style.transform = `translateX(${-imageIndex * imageWidth}px)`;
});