$('.middle').owlCarousel({
    loop:true,
    margin:1,
    nav:false,
    // autoplay:1000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
})
// bottom carousel
$('.bottom').owlCarousel({
    loop:true,
    margin:1,
    nav:false,
    autoplay:500,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})