$(document).ready(function() {
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
        items: 1
    });
});