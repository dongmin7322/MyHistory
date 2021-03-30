/*!
    * Start Bootstrap - Resume v6.0.2 (https://startbootstrap.com/theme/resume)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
    */
    (function ($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length
                ? target
                : $("[name=" + this.hash.slice(1) + "]");
            if (target.length) {
                $("html, body").animate(
                    {
                        scrollTop: target.offset().top,
                    },
                    1000,
                    "easeInOutExpo"
                );
                return false;
            }
        }
    });

    // scrollspy 이용하여 스크롤 내릴시 sideNav에 맞도록 이동
    $("body").scrollspy({
        target: "#sideNav",
    });

    $(".chkDiv").on("click", function(){
        $(this).find(".moveDiv").show();
        
    })
})(jQuery); // End of use strict

// var moveDiv = document.getElementsByClassName(moveDiv);

// document.getElementsByClassName("chkDiv").onclick = lodeOn();

// function lodeOn() {
//     alert("??")

// }
