
const menuWindow = document.querySelector('.mobile-menu-window');
const openBtn = document.querySelector('.header-menu-btn'); 
const closeBtn = document.querySelector('.mobile-close-btn');


openBtn.addEventListener('click', () => {
  menuWindow.classList.add('is-open');
});


closeBtn.addEventListener('click', () => {
  menuWindow.classList.remove('is-open');
});

const menuLinks = document.querySelectorAll('.mobile-menu-list a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    menuWindow.classList.remove('is-open');
  });
});