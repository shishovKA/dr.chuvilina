console.log('hello world');

const btnDiploma = document.querySelector('.button_diplom');
const popup = document.querySelector('.popup');


btnDiploma.addEventListener('click', function(e) {
    popup.classList.remove('hide');
})