$(function() {
		$('.iconWrap .col-xs-4').click(function(event) {
		var Index= $(this).index();
		$(this).addClass('cur').siblings('').removeClass('cur');
		$('.wordWrap .col-xs-12').eq(Index).addClass('current').siblings('').removeClass('current')
	});
});