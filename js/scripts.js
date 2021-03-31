const buttons = document.querySelectorAll(".chkDiv")
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        const target = this.querySelector('.content-inner');
        if (target.classList.contains('active')) {
            target.classList.remove('active');
            target.style.display = 'none';
        } else {
            target.classList.add('active');
            target.style.display = 'block';
        }
    })
}

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

    $(".chkDiv").on("click", function () {
        $(this).find(".moveDiv").show();

    })
})(jQuery);