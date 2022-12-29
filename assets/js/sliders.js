$(document).ready(function(){

    $(".slider-principal-home").owlCarousel({
        items:4,
        loop:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items: 1
            },
            520:{
                items:1
            },
            720:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });

/*     $(".owl-carousel-nosso-foco").owlCarousel({
        items:4,
        loop:false,
        dots:false,
        autoplay:false,
        autoplayTimeout:3000,
        URLhashListener:true,
        startPosition: 'URLHash',
        responsive:{
            0:{
                items: 1
            },
            720:{
                items:3
            }
        }
    });
    $(".owl-carousel-projeto-imagens").owlCarousel({
        items:1,
        loop:false,
        dots:true,
        autoplay:false,
        autoplayTimeout:3000
    }); */
})