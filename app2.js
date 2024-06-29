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

  document.addEventListener('DOMContentLoaded', () => {
    const contactUsHeading = document.querySelector('.about-projects-heading');
    const contactUsButton = document.querySelector('.about-button');
    
    const observerOptions = {
    threshold: 0.1 
    };
    
    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);
        }
    });
    }, observerOptions);
    
    observer.observe(contactUsHeading);
    observer.observe(contactUsButton);
    });