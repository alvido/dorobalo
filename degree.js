$(document).ready(function(){

    $('.header_burger').click(function(event) {
           $('.header_burger,.header_nav').toggleClass('active');
           $('body').toggleClass('lock');
       });

    $('.header_link').click(function(event) {
           $('.header_burger,.header_nav').removeClass('active');
           $('body').removeClass('lock');
       });


    $('.slider').slick({
        arrows:true,
        dots:true,
        adaptiveHeight:false,
        slidesToShow: 1,
        speed:800,
        easing:'ease',
        infinite: true,
        initialSlide:0,
        autoplay:true,
        autoplaySpeed:1500,
        centerMode:true,
        variableWidth:true,
        touchTreshhold:10,
        waitForAnimate: false
    });

    $('.order_button').click(function(event) {
           $('.popup_container').css('display','flex');
           $('#order_call').css('display','flex');
           $('.confirm').css('display','block');
           $('.learn_more').css('display','none');
           $('body').addClass('lock');

           $('.econom_desc').css('display','none');
           $('.standart_desc').css('display','none');
           $('.premium_desc').css('display','none');
           $('.order_tarif').css('display','none');
       });

    $('.button_close').click(function(event) {
           $('.popup_container').hide();
           $('#order_call').css('display','none');
           $('.learn_more').css('display','none');
           $('.price_container').css('display','none');
           $('body').removeClass('lock');

           $('.econom').css('height','110px');
           $('.standart').css('height','110px');
           $('.premium').css('height','110px');

           $('.econom').css('display','block');
           $('.standart').css('display','block');
           $('.premium').css('display','block');

           	$('.econom_desc').css('display','none');
           	$('.standart_desc').css('display','none');
           	$('.premium_desc').css('display','none');
           	$('.order_tarif').css('display','none');
           
       });

    $('.popup_container').click(function(event) {
           if (event.target == this) {
           	$(this).hide();
           	$('body').removeClass('lock');
           	$('#order_call').css('display','none');
           	$('.learn_more').css('display','none');
           	$('.price_container').css('display','none');

           	$('.econom').css('height','110px');
           	$('.standart').css('height','110px');
           	$('.premium').css('height','110px');

           	$('.econom').css('display','block');
           	$('.standart').css('display','block');
           	$('.premium').css('display','block');

           	$('.econom_desc').css('display','none');
           	$('.standart_desc').css('display','none');
           	$('.premium_desc').css('display','none');
           	$('.order_tarif').css('display','none');
           }
       });

    $('.more').click(function(event) {
			$('.popup_container').css('display','flex');
           	$('.learn_more').css('display','flex');
           	$('body').addClass('lock');
       });

    $('.price_botton').click(function(event) {
			$('.popup_container').css('display','flex');
           	$('.price_container').css('display','flex');
           	$('body').addClass('lock');
       });

    $('.econom').click(function(event) {
			$('.econom').css('display','none');
           	$('.standart').css('display','none');
           	$('.premium').css('display','none');
           	$('.econom_desc').css('display','flex');
           	$('.order_tarif').css('display','block');

        });

    $('.standart').click(function(event) {
			$('.standart').css('display','none');
           	$('.econom').css('display','none');
           	$('.premium').css('display','none');
           	$('.standart_desc').css('display','flex');
           	$('.order_tarif').css('display','block');
        });

    $('.premium').click(function(event) {
			$('.premium').css('display','none');
           	$('.standart').css('display','none');
           	$('.econom').css('display','none');
           	$('.premium_desc').css('display','flex');
           	$('.order_tarif').css('display','block');
        });


});
