

// swiper funtionals

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 5,
    centeredSlides: true,
    autoplay: {
        delay: 25000,
        disableOnInteraction: false,
        // loop: true,
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