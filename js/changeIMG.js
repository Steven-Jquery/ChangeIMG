var $ = jQuery.noConflict();
$(document).ready(function(){
	$('.item-img:first').addClass('active');
	$('.item-img .pic').click(function(e){
		e.preventDefault();
		$(this).parent().addClass('active');
		$(this).parent().siblings('li').removeClass('active');
		$(this).parent().siblings('li:first').removeClass('active');
		var srcThumb =$(this).find('img').attr('src');
		var srcMain = $(this).closest('.wrap-changeIMG').find('.main-img');
		srcMain.find('img').attr('src', srcThumb);
	});
});