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

});