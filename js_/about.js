$(function() {
	$('.title dl dd').click(function(event) {
		$(this).addClass('current').siblings('').removeClass('current')
	});
	$('.title dl dd').eq(0).click(function(event) {
		$('.content').css('display', 'block');
		$('.contact,.come').css('display', 'none');
	});
	$('.title dl dd').eq(1).click(function(event) {
		$('.come').css('display', 'block');
		$('.contact,.content').css('display', 'none');
	});
	$('.title dl dd').eq(2).click(function(event) {
		$('.contact').css('display', 'block');
		$('.content,.come').css('display', 'none');
	});
	
});