$('.owl-carousel').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
         1024:{
            items:4
        },
        1440:{
            items:5
        }
    }
});

$('.owl-prev').on('click', function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
});

$('.owl-next').on('click', function() {
    $('.owl-carousel').trigger('next.owl.carousel');
});