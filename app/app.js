// testing
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navContainer = document.querySelector('nav.nav-container');

hamburgerMenu.addEventListener('click', () => {
  navContainer.classList.toggle('active');
})



const slideApp = {};


slideApp.carouselImages = document.querySelector('.img-container');
slideApp.slideButtons = document.querySelectorAll('.slide-button');
slideApp.numberOfImages = document.querySelectorAll('.img-container img').length;

slideApp.imageIndex = 0;
slideApp.translateX = 0;

slideApp.moveSlide = function () {
  slideApp.slideButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
      if (event.target.id === 'previous') {
        if (slideApp.imageIndex !== 0) {
          slideApp.imageIndex--;
          slideApp.translateX += 400;

        }
      } else {
        if (slideApp.imageIndex !== slideApp.numberOfImages - 1) {
          slideApp.imageIndex++;
          slideApp.translateX -= 400;

        }
      }
      slideApp.carouselImages.style.transform = `translateX(${slideApp.translateX}px)`;
    })
  });
}

slideApp.init = function () {
  slideApp.moveSlide();
}

slideApp.init();




