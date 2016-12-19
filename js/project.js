define(['jquery', 'slick'], function(){

	$.fn.ravno = function () {
		var maxH = -1;
		var $cols = $(this).height("auto").each(function () {
			var h = $(this).height();
			maxH = (h > maxH) ? h : maxH;
		});
		$cols.height(maxH);
	};

	$('.slider').slick({
		arrows: false,
		dots: true,
		autoplay: true
	});

	var $navLinks = $('.include');
	$('.menu').on('click', '.include', function(e){
		e.preventDefault();
		$navLinks.removeClass('act');
		$(this).addClass('act');
		$(this).parent().siblings().find('ul').hide('slow');
		$(this).next().toggle('slow');
	});

});


