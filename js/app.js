'use strict';

document.addEventListener("DOMContentLoaded", function() {

    const accordions = document.querySelectorAll(".courses__accordion");

    accordions.forEach(function(accordion) {
        const accordionToggle = accordion.querySelector(".courses__accordion-toggle");
        const accordionContent = accordion.querySelector(".courses__accordion-content");
        const accordionClose = accordion.querySelector(".courses__accordion-close");
        const accordionHeader = accordion.querySelector(".courses__accordion-header, .courses__accordion-header-second, .courses__accordion-header-last");

        accordionToggle.addEventListener("click", function() {
            if (accordionContent.style.display === "block") {
                accordionContent.style.display = "none";
                accordionClose.style.display = "none";
                accordionToggle.style.display = "block";
                accordionHeader.classList.remove("active");
            } else {
                accordionContent.style.display = "block";
                accordionClose.style.display = "block";
                accordionToggle.style.display = "none";
                accordionHeader.classList.add("active");
            }
        });

        accordionClose.addEventListener("click", function() {
            accordionContent.style.display = "none";
            accordionClose.style.display = "none";
            accordionToggle.style.display = "block";
            accordionHeader.classList.remove("active");
        });
        
    });

    const swiper = new Swiper(".mySwiper", {
      navigation: {
        nextEl: ".reviews__next",
        prevEl: ".reviews__prev",
        },
      breakpoints: {
            992: {
            slidesPerView: 2.1,
            spaceBetween: 90
            },
            576: {
            slidesPerView: 2.5,
            spaceBetween: 50
            },
            320: {
            slidesPerView: 1,
            spaceBetween: 0
            },
        }
    });
   
    const swiperOnline = new Swiper(".reviwes-online__swiper", {
      navigation: {
        nextEl: ".reviwes-online__next",
        prevEl: ".reviwes-online__prev",
        },
      breakpoints: {
            992: {
            slidesPerView: 3,
            spaceBetween: 90
            },
            576: {
            slidesPerView: 2.5,
            spaceBetween: 50
            },
            320: {
            slidesPerView: 1,
            spaceBetween: 0
            },
        }
    });
    
    const swiperCash = new Swiper(".cash__swiper", {

    });

    function startPulseAnimation() {
    const pulseElement = document.querySelector('.pulse-element');
    pulseElement.style.animation = 'pulse 5s infinite';
}

// Запускаем анимацию при загрузке страницы
    document.addEventListener('DOMContentLoaded', startPulseAnimation);

    const onlineBtn = document.getElementById("onlineBtn");
    const offlineBtn = document.getElementById("offlineBtn");
    const onlineModal = document.getElementById("onlineModal");
    const offlineModal = document.getElementById("offlineModal");
    const onlineModalClose = document.getElementById("onlineModalClose");
    const offlineModalClose = document.getElementById("offlineModalClose");

    onlineBtn.addEventListener("click", () => {
    onlineModal.style.display = "flex";
    });

    offlineBtn.addEventListener("click", () => {
    offlineModal.style.display = "flex";
    });

    onlineModalClose.addEventListener("click", () => {
    onlineModal.style.display = "none";
    });

    offlineModalClose.addEventListener("click", () => {
    offlineModal.style.display = "none";
    });
   
});


	