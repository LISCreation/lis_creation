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
    /*if(isMobile.any()) {
        $(document).ready(function() {
            $('.header-menu-list_item.has-children').on('touchend', function(e) {
                e.preventDefault();
                $(this).find('.submenu_wrapper').slideDown();
            });
        });
    }*/
    $('.services-list_item-morebtn').on('click', function(e) {
        e.preventDefault();
        var sliderItem = $(this).parent().parent().parent();
        $('.services-list_item_wrapper').removeClass('opened');
        sliderItem.addClass('opened');
    });
    $('.panel_back').on('click', function(e) {
        e.preventDefault();
        var sliderItem = $(this).parent().parent();
        sliderItem.removeClass('opened');
    });
    $('#open_mobile_menu').on('click', function() {
        $(this).parent().toggleClass('opened');
        $(this).next('.list').slideToggle();
    });
    $('.header-menu-list_item.has-children').on('click', function(e) {
        e.preventDefault();
        if($(this).find('.submenu_wrapper').is(':visible')) {
            $(this).find('.submenu_wrapper').hide();
        } else {
            $('.submenu_wrapper').hide();
            $(this).find('.submenu_wrapper').show();

        }
    });

    // Sidebar
    var show = true;
    $(window).scroll(function() {
        var up_arrow = $('.global-sidebar_up_icon-wrapper');
        if($(document).scrollTop() > 300) {
            up_arrow.addClass('protrude');
        } else {
            up_arrow.removeClass('protrude');
        }
        var number_place = $('.achievements-list_item-num');
        if(!show) return false;
        if($(document).scrollTop() > number_place.offset().top - 500) {
            number_place.spincrement({
                thousandSeparator: "",
                duration: 1200
            });
            console.log('Hello!');
            show = false;
        }
    });
    $('')
});