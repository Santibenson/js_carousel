//target the html element

const slider = document.querySelector(".slider");
//targeted all the btns here
const btns = document.querySelectorAll(".btn");
const slides = document.querySelectorAll(".slides");
const prevButton = document.querySelector(".prev-btn");
const nextButton = document.querySelector(".next-btn");

//set counter

let counter = 0;

// adding the previous and next functionality

prevButton.addEventListener("click", () => {
  counter--;
  carouselSlide();
});

nextButton.addEventListener("click", () => {
  counter++;
  carouselSlide();
});


//using a loop tp add spaces to the left according to the pictures index

slides.forEach((slide, index) => {
  slide.style.left = `${index * 100}%`;
});

// toggling the direction icon
slider.addEventListener("mouseover", () => {
  btns.forEach((btn) => {
    btn.style.display = "block";
  });
});

slider.addEventListener("mouseout", () => {
  btns.forEach((btn) => {
    btn.style.display = "none";
  });
});

// define a function that will make the carousel slide

const carouselSlide = () => {
  if (counter === slides.length) {
    counter = 0;
  }

  if (counter < 0) {
    counter = slides.length - 1;
  }

  slides.forEach(function (slide) {
    slide.style.transform = `translateX(-${counter * 100}%)`;
  });
};

