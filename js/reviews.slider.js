$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 300,
        dots: true,
        infinite: false,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                }

            },{
                breakpoint: 375,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                }

            }],

    });
});