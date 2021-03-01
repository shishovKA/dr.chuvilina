
const btnDiploma = document.getElementById('btn-diploma');
const btnClose = document.getElementById('btn-close');
const popup = document.querySelector('.popup');

document.addEventListener('keypress', (e) => {
  if (e.key == "Escape") {
    popup.classList.add('hide');
  }
});

btnDiploma.addEventListener('click', () => {
    popup.classList.remove('hide');
});

btnClose.addEventListener('click', () => {
  popup.classList.add('hide');
});


// Next/previous controls
const plusSlides = (n) => {
  showSlides(slideIndex += n);
}

const showSlides = (n) => {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "flex";
}

const prevBtn = document.getElementById('prev-btn');
prevBtn.addEventListener('click', () => { plusSlides(-1) });

const nextBtn = document.getElementById('next-btn');
nextBtn.addEventListener('click', () => { plusSlides(1) });


let slideIndex = 1;
showSlides(slideIndex);