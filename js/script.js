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

});