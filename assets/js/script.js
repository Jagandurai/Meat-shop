'use strict';

document.addEventListener("DOMContentLoaded", function () {
   
    const navbar = document.querySelector("[data-navbar]");
    const navbarLinks = document.querySelectorAll("[data-nav-link]");
    const menuToggleBtn = document.querySelector("[data-menu-toggle-btn]");

    if (navbar && menuToggleBtn) {
        menuToggleBtn.addEventListener("click", function () {
            navbar.classList.toggle("active");
            this.classList.toggle("active");
        });

        navbarLinks.forEach(link => {
            link.addEventListener("click", function () {
                navbar.classList.toggle("active");
                menuToggleBtn.classList.toggle("active");
            });
        });
    }

    const header = document.querySelector("[data-header]");
    const backTopBtn = document.querySelector("[data-back-top-btn]");

    window.addEventListener("scroll", function () {
        if (header && backTopBtn) {
            if (window.scrollY >= 100) {
                header.classList.add("active");
                backTopBtn.classList.add("active");
            } else {
                header.classList.remove("active");
                backTopBtn.classList.remove("active");
            }
        }
    });

   
    const deliveryBoy = document.querySelector("[data-delivery-boy]");

    let deliveryBoyMove = -80;
    let lastScrollPos = 0;

    window.addEventListener("scroll", function () {
        if (deliveryBoy) {
            let deliveryBoyTopPos = deliveryBoy.getBoundingClientRect().top;

            if (deliveryBoyTopPos < 500 && deliveryBoyTopPos > -250) {
                let activeScrollPos = window.scrollY;

                if (lastScrollPos < activeScrollPos) {
                    deliveryBoyMove += 1;
                } else {
                    deliveryBoyMove -= 1;
                }

                lastScrollPos = activeScrollPos;
                deliveryBoy.style.transform = `translateX(${deliveryBoyMove}px)`;
            }
        }
    });

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function changeSlide(direction) {
        currentSlide += direction;
        if (currentSlide >= totalSlides) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = totalSlides - 1;
        }
        showSlide(currentSlide);
    }

    function autoScroll() {
        changeSlide(1); 
    }


    showSlide(currentSlide);
    let autoScrollInterval = setInterval(autoScroll, 3000);

    function resetAutoScroll() {
        clearInterval(autoScrollInterval);
        autoScrollInterval = setInterval(autoScroll, 3000); 
    }

    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');

    if (nextButton) {
        nextButton.addEventListener('click', () => {
            changeSlide(1);
            resetAutoScroll();
        });
    }

    if (prevButton) {
        prevButton.addEventListener('click', () => {
            changeSlide(-1);
            resetAutoScroll();
        });
    }
});


