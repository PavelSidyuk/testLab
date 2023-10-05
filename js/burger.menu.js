$(document).ready(function () {
    $('.header__burger').click(function (event) {
        $('.header__burger, header .nav, .header__menu, .header__logo-b, .header__logo-w').toggleClass('active');
        $('body').toggleClass('lock')
    });



    $(document).ready(function(){
        $(".header__link").click(function(event){
            $('.header__list li').removeClass();
            $(this).parent().addClass('active');
        });
    });

    $(document).ready(function(){
        $(".practices__nav-linc").click(function(event){
            $('.practices__nav li').removeClass();
            $(this).parent().addClass('active');
        });
    });



})