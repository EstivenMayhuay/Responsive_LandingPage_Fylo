
let navHeaderMobile = document.body.querySelector('.header'),
    inputStarted = Array.from(document.querySelectorAll('input[type="email"]')),
    inputSubmit = Array.from(document.querySelectorAll('input[type="submit"]')),
    btnUp = document.querySelector('.btnUP');

const validateEmail = (email = "hairton@gmail.com", elemInput) => {
  // email => nombre_usuario + @ + dominio + servidor
  let regularExp = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

  (regularExp.test(email)) ? elemInput.classList.remove('warn') : elemInput.classList.add('warn');
}

btnUp.addEventListener('click', () => {
  window.scrollTo(0,0);
});

inputStarted.forEach( (inpt) => {
  inpt.addEventListener('input', (e) =>  validateEmail(e.target.value, inpt));
});

inputSubmit.forEach( (inpSend) => {
  inpSend.addEventListener('input', (e) => {
    e.preventDefault();
  });
});

window.onscroll = (e) => {
  let hScroll = window.scrollY;

  if(hScroll > 1400) {
    navHeaderMobile.classList.add('whiteNav');
    btnUp.classList.add('btnShowUp');
  }else {
    navHeaderMobile.classList.remove('whiteNav');
    btnUp.classList.remove('btnShowUp');
  }
}