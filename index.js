// ------------scripting for top nav-----------

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle("sticky", window.scrollY > 0);
    // const scrollUpBtn= document.querySelector ('.scroll-up-btn');
    // scrollUpBtn.classList.toggle("show", window.scrollY > 500);

});
$(document).ready(function () {
    $(window).scroll(function () {
        if (scrollY > 500) {
            $('.scroll-up-btn').addClass("show")
        } else {
            $('.scroll-up-btn').removeClass("show")
        }
    });
});

// -----slide up script-------

$('.scroll-up-btn').click(function () {
    $('body').animate({ scrollTop: 0 });
});
// ----------scripting for toggle menu btn---------

$(document).ready(function () {
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });


    // ------Typing animation------
    var typed = new Typed(".typing", {
        strings: ["", "App Developer", "Javasript Developer", "UI Developer", "Java Developer"],
        // strings: ["", "Mind For World"],
        typespeed: 1000,
        backspeed: 100,
        loop: true
    });
    
    //  ----------------owl-carousel script ---------------
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });
});

