const mainHead = document.querySelector('.navigation-container');
const logo = document.querySelector('.navigation-logo-img');

window.addEventListener('scroll', function() {
    if (this.scrollY > 400) {
        mainHead.classList.add('slidedown');
        logo.style.color = '#000';
    }
     else {
        mainHead.classList.remove('slidedown');
        logo.style.color = '';
    }
});

document.getElementById("contact-us-button").addEventListener("click", function(){
    document.querySelector(".form-container").style.display="flex"
})
document.querySelector(".close").addEventListener("click", function(){
    document.querySelector(".form-container").style.display="none"
})

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
    let endValue = parseInt(valueDisplay.getAttribute("data-val").replace(/[^\d]/g, '')); // Remove non-numeric characters
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
var swiper = new Swiper(".mySwipers", {
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