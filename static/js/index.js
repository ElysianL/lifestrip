$(function() {
	$(document).mousemove(function(e) {
		var xx = e.pageX - 200,
			yy = e.pageY - 200;
		$('.strip').css({
			'top':yy + 'px',
			'left':xx + 'px',
			'position':'absolute',
	 		'transition':'All 1s',
	 		' -webkit-transition':'All 1s',
	 		'-moz-transition':'All 1s',
	 		' -o-transition':'All 1s'
	 	});

	});
    $('.J-change').on('click', function() {
        $(this).find('.pic').addClass('active');
        $(this).on('click', function() {
            location.href="main.html";
        });
    });
});