$(document).ready(function() {
    //Loader
    setTimeout(function() {
        $('.pre').fadeOut();
        $('.pre_loader').addClass('loaded');
    }, 1600);
    //Slider
    var owl = $('.owl-carousel.services-list');
    owl.owlCarousel({
        center: true,
        loop: true,
        dots: true,
        navContainer: ".services-list",
        smartSpeed: 800,
        responsive: {
            1500: {
                items: 4,
            },
            1060: {
                items: 3
            },
            700: {
                items: 2,
            },
            0: {
                items: 1
            }
        }
    });
    $('body').keydown(function(e) {
        if(e.keyCode == 37) {
            owl.trigger('prev.owl.carousel');
        } else if(e.keyCode == 39) {
            owl.trigger('next.owl.carousel');
        }
    });
    $('.mono-menu_item').mouseover(function(e) {
        $(this).addClass('opened');
    });
    $('.mono-menu_item').mouseout(function(e) {
        $(this).removeClass('opened');
    });
    var owl = $('.owl-carousel.work-header-slider_area');
    owl.owlCarousel({
        items: 1,
        nav: true,
        dots: true,
        loop: true,
        autoplay: true,
        responsive : {
            767 : {
                autoHeight: false,
                mouseDrag: false,
                touchDrag: false
            },
            0: {
                mouseDrag: true,
                touchDrag: true,
                autoHeight: true,
            }
        }
    });
    //Work
    var moreButton = $('.work-header_more'),
        list       = $('.work-header-list_wrapper');
    moreButton.click(function() {
        list.toggleClass('opened');

    });
    //Mono slow scroll onclick
    var monoLink = $('.mono-menu_item');
    $('.mono-menu_item').click(function(e) {
        e.preventDefault();
        monoScroll($(this).find('a').attr('href'));
    });
    $('.anchor').click(function(e) {
        e.preventDefault();
        monoScroll($(this).attr('href'));
    });
    function monoScroll(link) {
        if(link == "#toTop") {
            var offset = 0;
        } else {
            var offset = $(link).offset().top;
        }
        $('html, body').animate({scrollTop: offset}, 1200);
    }
    $(function() {
        $.scrollSpeed(120, 1200);
    });
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
    if(isMobile.any()) {
        $('.li.has-children > a').click(function(e) {e.preventDefault();})
    }
    $('li.menu-item-has-children > a').click(function(e) {e.preventDefault()});
    $('li').on('mousemove', function(e) {e.preventDefault()});
});