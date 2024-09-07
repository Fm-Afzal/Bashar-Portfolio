var $ = jQuery.noConflict();

$(function () {

    $(".toggleNav").on("click", function () {
        $("body").toggleClass('nav-expanded');
    })

    $("header .checkbox").on("click", function () {
        $("html").toggleClass('dark');
    })
})

$(function () {
    new Swiper(".testimonialSwiper", {
        slidesPerView: "1",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
});
