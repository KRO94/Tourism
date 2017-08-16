jQuery(document).ready(function(){

/*------------MOBILE MENU------------*/
	var n = 0;
	$('.mobile-menu').click(function(){
			if (n==0) {
			$('.menu').slideDown(600);
				n=1;
			}
			else {
			$('.menu').slideUp(300);
				n=0;
			}
	});
/*------------MOBILE MENU------------*/

/*------------TRAVELS SLIDER------------*/
	$('.travels-slider').owlCarousel({
			items: 1,
			loop:true,
			nav:true,
			dots: false,
			autoplay: true,
			autoplaySpeed: 5000
	})
/*------------TRAVELS SLIDER------------*/

/*------------GRAPHICS SLIDER------------*/
	$('.graphics-slider').owlCarousel({
			items: 1,
			loop:true,
			nav:true,
			dots: false,
			autoplay: true,
			autoplaySpeed: 5000
	})
/*------------GRAPHICS SLIDER------------*/

/*------------GALLERY IMG------------*/
	$('fancybox').fancybox();
/*------------GALLERY IMG------------*/

/*------------GRAPHICS SLIDER------------*/
	$('.reviews-slider').owlCarousel({
			items: 1,
			loop:true,
			nav:true,
			dots: false,
			autoplay: true,
			autoplaySpeed: 5000
	})
/*------------GRAPHICS SLIDER------------*/

/*------------SINGLE POIZDKU PAGE (SLIDEDOWN<-->SLIDEUP)------------*/
$('.single-poizdku-page .wrap-block-day .block .top').click(function(){
	if(!$(this).is('.active')){
		clearTab();
		$(this).addClass('active');
		$(this).siblings('div').slideDown(600);
	}
	else {
		clearTab();
		}
});

function clearTab(){
	$('.single-poizdku-page .wrap-block-day .block .top').removeClass('active');
	$('.single-poizdku-page .wrap-block-day .block .top').siblings('div').slideUp(300);
}
/*------------SINGLE POIZDKU PAGE (SLIDEDOWN<-->SLIDEUP)------------*/

/*----------------SMALL PHOTO --> BIG PHOTO--------------------------------*/
	$('.single-poizdku-page .blockPhoto .photo-small a').hover(function(e){
		if($('.single-poizdku-page .blockPhoto .photo-big img').attr('src') != $(this).attr('href')){
			$('.single-poizdku-page .blockPhoto .photo-big img').hide().attr('src',$(this).attr('href'));
			$('.single-poizdku-page .blockPhoto .photo-big img').fadeIn(200);
		}
		e.preventDefault();
			$('.single-poizdku-page .blockPhoto .photo-small a').removeClass('active');
			$(this).addClass('active');
	});
/*----------------SMALL PHOTO --> BIG PHOTO--------------------------------*/

});