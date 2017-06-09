console.log('Hello music lover 🎵');
var btnNav = document.querySelector('.header__btn');
var nav = document.querySelector('.nav');
btnNav.addEventListener('click', function (){
  nav.classList.toggle('nav--active');
});