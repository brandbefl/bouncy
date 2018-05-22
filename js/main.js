$(document).ready(function(){
    $(".owl-one").owlCarousel({
        items: 1,
        nav: false,
        dots: true
    });
    $(".owl-two").owlCarousel({
        items: 1,
        nav: false,
        dots: true
    });
    $(".owl-tree").owlCarousel({
        items: 1,
        nav: false,
        dots: true
    });
    $(".navbar-default").removeClass("default");
    $(window).scroll(function(){
        if ($(this).scrollTop() > 20) {
            $(".navbar-default").addClass("nav-default").fadeIn('fast');
            var img = document.getElementById("logo");
            img.src = 'img/logo-black.png';
        } else {
            $(".navbar-default").removeClass("nav-default").fadeIn('fast');
            var img = document.getElementById("logo");
            img.src = 'img/logo-white.png';
        };

    });
    $(".icon-bar").removeClass("default");
    $(window).scroll(function(){
        if ($(this).scrollTop() > 20) {
            $(".icon-bar").addClass("icon-bar-fix").fadeIn('fast');
        } else {
            $(".icon-bar").removeClass("icon-bar-fix").fadeIn('fast');
        };

    });
    $(window).scroll(function(){
        if ($(this).scrollTop() > 20) {
            $(".navbar-default").addClass("navbar-fix").fadeIn('fast');
        } else {
            $(".navbar-default").removeClass("navbar-fix").fadeIn('fast');
        };
    });
    $("#menu").on("click","a", function (event) {
        event.preventDefault();

        var id  = $(this).attr('href'),
            top = $(id).offset().top;

        $('body,html').animate({scrollTop: top}, 750);
    });
    $(window).scroll(function (){
        $(' .progress-bar').each(function (){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+600) {
                $(this).addClass('add-animate-right');
            }
        });
        $(' .blue-1').each(function (){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+600) {
                $(this).addClass('add-animate-1st');
            }
        });
        $(' .yellow-1').each(function (){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+600) {
                $(this).addClass('add-animate-2');
            }
        });
        $(' .pink-1').each(function (){
            var imagePos = $(this).offset().top;
            var topOfWindow = $(window).scrollTop();
            if (imagePos < topOfWindow+600) {
                $(this).addClass('add-animate-3');
            }
        });
    });
});
