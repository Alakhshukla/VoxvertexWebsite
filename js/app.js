// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 10,
    },
  },
});

// Animations
ScrollReveal().reveal(".top_nav", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
});
ScrollReveal().reveal(".nav", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 100,
});

ScrollReveal().reveal(".header", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  delay: 200,
});
ScrollReveal().reveal(".section", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});
ScrollReveal().reveal(".footer", {
  origin: "bottom",
  distance: "20px",
  opacity: 0,
  duration: 1000,
  delay: 100,
});

// mobile nav
const hamburger = document.querySelector(".hamburger");
const Nav = document.querySelector(".mobile_nav");

hamburger.addEventListener("click", () => {
  Nav.classList.toggle("mobile_nav_hide");
});


// featured slider 


// let slides = document.querySelector('.slides');
// let slide = document.querySelectorAll('.slide');
// let dots = document.querySelectorAll('.dot');
// let currentIndex = 0;

// document.querySelector('.next').addEventListener('click', () => {
//     currentIndex = (currentIndex + 1) % slide.length;
//     updateSlider();
// });

// document.querySelector('.prev').addEventListener('click', () => {
//     currentIndex = (currentIndex - 1 + slide.length) % slide.length;
//     updateSlider();
// });

// dots.forEach((dot, index) => {
//     dot.addEventListener('click', () => {
//         currentIndex = index;
//         updateSlider();
//     });
// });

// function updateSlider() {
//     slides.style.transform = `translateX(-${currentIndex * 100}%)`;
//     dots.forEach(dot => dot.classList.remove('active'));
//     dots[currentIndex].classList.add('active');
// }

// updateSlider();

const wrapper = document.querySelector('.testimonial-wrapper');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const boxes = Array.from(document.querySelectorAll('.testimonial-box'));
const boxWidth = document.querySelector('.testimonial-box').offsetWidth + 20; // Include margin

let currentIndex = 0;

function updateSlider() {
    const offset = currentIndex * boxWidth;
    wrapper.style.transform = `translateX(-${offset}px)`;
}

function showNext() {
    currentIndex = (currentIndex + 1) % (boxes.length / 3);
    updateSlider();
}

function showPrev() {
    currentIndex = (currentIndex - 1 + (boxes.length / 3)) % (boxes.length / 3);
    updateSlider();
}

prevBtn.addEventListener('click', showPrev);
nextBtn.addEventListener('click', showNext);

// Initialize the slider
updateSlider();

// Optional: Auto-slide every 5 seconds
