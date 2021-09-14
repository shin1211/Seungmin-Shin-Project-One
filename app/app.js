// testing
const hamburgerMenu = document.querySelector('.hamburger-menu');
const navContainer = document.querySelector('nav.nav-container');

hamburgerMenu.addEventListener('click', () => {
    navContainer.classList.toggle('active');
})

console.log(navContainer);
console.log(hamburgerMenu);