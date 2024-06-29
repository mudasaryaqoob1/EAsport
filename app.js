const mainHead = document.querySelector(".navigation-container");
const logo = document.querySelector(".navigation-logo-img");

window.addEventListener("scroll", function () {
  if (this.scrollY > 400) {
    mainHead.classList.add("slidedown");
    logo.style.color = "#000";
  } else {
    mainHead.classList.remove("slidedown");
    logo.style.color = "";
  }
});

document
  .getElementById("contact-us-button")
  .addEventListener("click", function () {
    document.querySelector(".form-container").style.display = "flex";
    document.querySelector(".form-container").style.overflow = "scroll";
    document.querySelector("body").style.overflow = "hidden";
  });
document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".form-container").style.display = "none";
  document.querySelector("body").style.overflow = "scroll";
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

let valueDisplays = document.querySelectorAll(".num");
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
  let startValue = 0;
  let endValue = parseInt(
    valueDisplay.getAttribute("data-val").replace(/[^\d]/g, "")
  ); // Remove non-numeric characters
  let duration = Math.floor(interval / endValue);

  let counter = setInterval(function () {
    startValue += 1;
    valueDisplay.textContent = startValue;

    if (startValue >= endValue) {
      clearInterval(counter);
      valueDisplay.textContent = endValue; // Ensure the end value is exact
    }
  }, duration);
});
var swiper = new Swiper(".testimonial_swiper_slider", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
var swiper = new Swiper(".our-profile-mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".our-blog-mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
});

document.addEventListener("DOMContentLoaded", () => {
  const contactUsHeading = document.querySelector(".about-projects-heading");
  const contactUsButton = document.querySelector(".about-button");

  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  observer.observe(contactUsHeading);
  observer.observe(contactUsButton);
});

document
  .getElementById("testimonial-slider-left-button")
  .addEventListener("click", function () {
    const swiper = document.querySelector(".testimonial_swiper_slider").swiper;
    swiper.slidePrev();
  });
document
  .getElementById("testimonial-slider-right-button")
  .addEventListener("click", function () {
    const swiper = document.querySelector(".testimonial_swiper_slider").swiper;
    swiper.slideNext();
  });
document
  .getElementById("slider-left-button")
  .addEventListener("click", function () {
    const swiper = document.querySelector(".our-profile-mySwiper").swiper;
    swiper.slidePrev();
  });
document
  .getElementById("slider-right-button")
  .addEventListener("click", function () {
    const swiper = document.querySelector(".our-profile-mySwiper").swiper;
    swiper.slideNext();
  });
document
  .getElementById("blog-slider-left-button")
  .addEventListener("click", function () {
    const swiper = document.querySelector(".our-blog-mySwiper").swiper;
    swiper.slidePrev();
  });

document
  .getElementById("blog-slider-right-button")
  .addEventListener("click", function () {
    const swiper = document.querySelector(".our-blog-mySwiper").swiper;
    swiper.slideNext();
  });
