$(function name() {

    let header = $("#header");
    let intro = $("#intro");
    let introH;
    let scrollPos = $(window).scrollTop();

    $(window).on("scroll load resize", function() {
        scrollPos = $(this).scrollTop();
        introH = intro.innerHeight();

        if (scrollPos > introH) {
            header.addClass("fixed");
        } else {
            header.removeClass("fixed");
        }
    });


});