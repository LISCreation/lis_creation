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
            1501: {
                items: 4,
            },
            1061: {
                items: 3
            },
            721: {
                items: 2,
            },
            0: {
                items: 1,
                autoHeight: true
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
    var slideSpeed = null;
    $('.header-menu-list_item.has-children').on('click', function(e) {
        if($(this).find('.submenu_wrapper').is(':visible')) {
            $(this).find('.submenu_wrapper').slideUp(slideSpeed);
            $(this).removeClass('opened');
        } else {
            e.preventDefault();
            if(window.innerWidth <= 575) {
                $('.submenu_wrapper').slideUp(slideSpeed);
                $(this).find('.submenu_wrapper').slideDown(slideSpeed);
            } else {
                $('.submenu_wrapper').hide();
                $(this).find('.submenu_wrapper').show();
            }
            $('.header-menu-list_item.has-children').removeClass('opened');
            $(this).addClass('opened');
            //Scroll to element
            $('.header-menu-list_mbl').animate({scrollTop: 20}, 2000);

        }
    });

    //Forms
    $('[data-open]').click(function() {
       var call_name = $(this).attr('data-open');
       $('.window').hide();
       $('.window[data-window=' + call_name + ']').show();
       $('.modal-windows').fadeIn();
    });
    $('.close_form').click(function() {
        $('.modal-windows').fadeOut();
    });
    $(document).mouseup(function (e){
        if (!$('.window').is(e.target) // если клик был не по нашему блоку
            && $('.window').has(e.target).length === 0) { // и не по его дочерним элементам
            $('.modal-windows').fadeOut(); // скрываем его
        }
    });


    //Parallax
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
    if(!isMobile.any()) {
        $('.header').paroller({
            factor: 0.7,
            //type: 'background'
        });
        $('.team').paroller({
            factor: 0.3,
            factorXs: 0
            //type:'background'
        });
        $('.header-main-title').paroller({
            factor: 0.3,
            type: 'foreground'
        });
        $('.callback').paroller({
            factor: 0.2,
            factorXs: 0,
            type: 'foreground',
        });
    }

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
            show = false;
        }
    });
    var sectionZoneList = document.querySelectorAll('[data-section-zone]'),
        monoMenuList = [],
        sectionZoneName,
        sectionZoneLink,
        toMono;
    sectionZoneList.forEach(function(sectionZoneItem) {
        sectionZoneName = sectionZoneItem.getAttribute('data-section-zone');
        sectionZoneLink = sectionZoneItem.getAttribute('id');
        monoMenuList.push([sectionZoneLink, sectionZoneName]);
    });
    var monoMenuDOM = document.querySelector('.mono-menu'),
        monoMenuItemDOM;
    console.log(monoMenuDOM);
    monoMenuList.forEach(function(monoMenuItem) {
       monoMenuItemDOM = document.createElement('li');
       monoMenuItemDOM.className = 'mono-menu_item';
       monoMenuItemDOM.innerHTML = '<a href="#' + monoMenuItem[0] + '"><div class="tab">' + monoMenuItem[1] +  '</div></a>';
       monoMenuDOM.appendChild(monoMenuItemDOM);
    });

    $('.mono-menu_item').mouseover(function(e) {
        $(this).addClass('hovered');
    });
    $('.mono-menu_item').mouseout(function(e) {
        $(this).removeClass('hovered');
    });
    //Mono slow scroll onclick
    var monoLink = $('.mono-menu_item');
    $('.mono-menu_item').click(function(e) {
        e.preventDefault();
        monoScroll($(this).find('a').attr('href'));
    });
});