// testing
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navContainer = document.querySelector('nav.nav-container');

hamburgerMenu.addEventListener('click', () => {
  navContainer.classList.toggle('active');
})



const carouselImages = document.querySelector('.img-container');
const slideButtons = document.querySelectorAll('.slide-button');
const numberOfImages = document.querySelectorAll('.img-container img').length;

let imageIndex = 1;
let translateX = 0;

slideButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 400;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 400;
      }
    }

    carouselImages.style.transform = `translateX(${translateX}px)`;
  })
})

