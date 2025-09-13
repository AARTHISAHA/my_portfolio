$(document).ready(function () {
    $(window).scroll(function () {
        // sticky navbar on scroll
        if (this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }

        // scroll-up button show/hide
        if (this.scrollY > 300) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up 
    $('.scroll-up-btn').click(function () {
        $('html').animate({ scrollTop: 0 });
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function () {
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar
    $('.menu-btn').click(function () {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation
    var typed = new Typed(".typing", {
        strings: ["Bavithran", "Web Developer", "UI Developer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


// counter
// $('[data-toggle="counter-up"]').counterUp({
//     delay: 10,
//     time: 2000,
// });

$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 2000,
        offset: 70,
        beginAt: 100,
    });

});


// Skills

/* this --> this object to access all the properties and methods in the API */
/* offset --> waypoint triggers when the top of the element hits the top of the window */

$('.skill').waypoint(function () {
    $('.progress .progress-bar').each(function () {
        $(this).css("width", $(this).attr("value") + '%');
    });
}, { offset: '85%'});

// Initiate the wowjs
new WOW().init();

function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");

    if (dots.style.display === "none") {
        dots.style.display = "inline";
        btnText.innerHTML = "Read more";
        moreText.style.display = "none";
    } else {
        dots.style.display = "none";
        btnText.innerHTML = "Read less";
        moreText.style.display = "inline";
    }
}
});
