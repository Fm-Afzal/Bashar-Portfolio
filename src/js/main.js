var $ = jQuery.noConflict();

$(function () {

    $(".toggleNav").on("click", function () {
        $("body").toggleClass('nav-expanded');
    })
    
    $("header .checkbox").on("click", function () {
        $("html").toggleClass('dark');
    })
})
