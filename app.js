let humburger = document.querySelector(".humburger");
let mobileNav = document.querySelector(".mobileNav");

humburger.addEventListener('click',function(){
    mobileNav.classList.toggle('open')
})
humburger.addEventListener('blur',function(){
    mobileNav.classList.remove('open')
})
$(document).ready(function(){
    $('.food-slider').slick({
        autoplay:true,
        slidesToShow:3,
        slidesToScroll:1,
        prevArrow:".prev-btn",
        nextArrow:".next-btn",
        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                }
            },
            {
                breakpoint:768,
                settings:{
                slidesToShow:1,
                }
            }
        ]
    })})
