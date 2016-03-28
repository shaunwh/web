$(function() {
	var w=$('.bigBox').height()+$('#focus').height()
    $('.boxWrap').css({
    	height: w,
    });
	var iNow=0;
	var iNow1=0;
	var iNow2=0;
	var iNow3=0;   //累加器    初始为0；
	var znum=10; //变量保存zindex的信息，每点击一次zindex层次加1
	$('.item').eq(0).addClass('current');
	$('.Box').addClass('current')
	$('.box').hover(function() {
		$('.box span').stop().fadeIn(100);
	}, function() {
		$('.box span').stop().fadeOut(100);
	});
	//点击前后
	$('.Box .prev').click(function(event) {
		iNow--;
		znum++;
		if (iNow<0) {iNow=1};
		$('.Box ul li').eq(iNow).css({
			zIndex: znum
		}).hide().fadeIn();
	});
	$('.Box .next,.Box ul li').click(function(event) {
		iNow++;
		znum++;
		if (iNow>1) {iNow=0};
		$('.Box ul li').eq(iNow).css({
			zIndex: znum
		}).hide().fadeIn();
	});
	$('.Box1 .prev').click(function(event) {
		iNow1--;
		znum++;
		if (iNow1<0) {iNow1=3};
		$('.Box1 ul li').eq(iNow1).css({
			zIndex: znum
		}).hide().fadeIn();
	});
	$('.Box1 .next,.Box1 ul li').click(function(event) {
		iNow1++;
		znum++;
		if (iNow1>3) {iNow1=0};
		$('.Box1 ul li').eq(iNow1).css({
			zIndex: znum
		}).hide().fadeIn();
	});
	$('.Box2 .prev').click(function(event) {
		iNow2--;
		znum++;
		if (iNow2<0) {iNow2=6};
		$('.Box2 ul li').eq(iNow2).css({
			zIndex: znum
		}).hide().fadeIn();
	});
	$('.Box2 .next,.Box2 ul li').click(function(event) {
		iNow2++;
		znum++;
		if (iNow2>6) {iNow2=0};
		$('.Box2 ul li').eq(iNow2).css({
			zIndex: znum
		}).hide().fadeIn();
	});
	$('.Box3 .prev').click(function(event) {
		iNow3--;
		znum++;
		if (iNow3<0) {iNow3=4};
		$('.Box3 ul li').eq(iNow3).css({
			zIndex: znum
		}).hide().fadeIn();
	});
	$('.Box3 .next,.Box3 ul li').click(function(event) {
		iNow3++;
		znum++;
		if (iNow3>4) {iNow3=0};
		$('.Box3 ul li').eq(iNow3).css({
			zIndex: znum
		}).hide().fadeIn();
	});
	$('.left .item').click(function(event) {
		$('.boxWrap').removeClass('hidden-xs')
		$(this).addClass('current').siblings('').removeClass('current');
		var index=$(this).index();
		$('.box').eq(index).addClass('current').siblings('').removeClass('current');
	});
	$('.close').click(function(event) {
		$('.boxWrap').addClass('hidden-xs');
	});		
});