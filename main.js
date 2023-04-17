const carousel = document.querySelector('.carousel');
const slides = carousel.querySelectorAll('.slide');
const prevButton = carousel.querySelector('.prev');
const nextButton = carousel.querySelector('.next');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
}

prevButton.addEventListener('click', () => {
  showSlide(currentSlide - 1);
});

nextButton.addEventListener('click', () => {
  showSlide(currentSlide + 1);
});

showSlide(currentSlide);