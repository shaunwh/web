$(function() {
	/*
	var Timer4=null;
	var Num4=0;
	var w=$(window).width();
	function AutoPlay(){
		Num4++;
		if(Num4>1){
			Num4=1;
		}
		$('.page1 ul').stop().animate({left:-Num4*w}, 500);

	}
	Timer4=setInterval(AutoPlay,3000);
	var num=0;
	var timer=null;
	*/
	//手机banner图
    function autoplay(){
        num++
        if(num>4){num=0}        
        $('.all ol li').eq(num).addClass('current').siblings().removeClass('current')
        //-----------------以上角标------------------以下图片-------------------
        $('.all ul li').eq(num).hide().stop().fadeIn().siblings().hide();
    }   
    timer=setInterval(autoplay,2000)  
    $('.all').mouseover(function(e) {
        clearInterval(timer)
    });
    $('.all').mouseout(function(e) {
        clearInterval(timer)
        timer=setInterval(autoplay,2000)
    });
    		//页面一发布文字就能动
	var height =$(window).height()
	$('.page1').attr('height', height);
	$('.page1 h2').addClass('h2After');
	$('.page1 p').addClass('pAfter')
	function fun(delta){
		//滚动的时候，添加不同的类
		num=num-delta;
		if(num<0){num=0}else if(num>5){num=5}//为了给num限定最大最小值
		$('#fullPage').attr('class','look'+num);
		//也要控制圆点
		$('#fp-nav li').eq(num).addClass('current').siblings('').removeClass('current');

		//判断出身处第一屏的时候去添加类
		if(num==0){
			$('.page1 h2').addClass('h2After');
			$('.page1 p').addClass('pAfter')
		}else{
			$('.page1 h2').removeClass('h2After');
			$('.page1 p').removeClass('pAfter')
		}
	}

	//控制圆点的位置
	//利用获取大屏幕的高度一半-自己高度的一半
	//var dis=$(window).height()/2-$('.circle').height()/2;
	var dis=($(window).height()-$('.circle').height())/2;
	$('.circle').css('top',dis);


	//下拉按钮
	var num=0;
	$('.down').click(function(event) {
		num++;
		if (num>5) {num=0};
		$('#fullPage').attr('class','look'+num);
		$('#fp-nav ul li').eq(num).addClass('current').siblings().removeClass('current');

	});


	//窗口尺寸变化的时候，要将盒子高度重新赋值
	$(window).resize(function(event) {
		dis=($(window).height()-$('.circle').height())/2;
		$('.circle').css('top',dis);
		$('#fullPage').height($(window).height());
	});

	$('.page4 .logos dl dd').click(function(event) {
		$(this).siblings('dt').addClass('current')
	});

	//圆点的事件
	$('#fp-nav ul li').bind({
		'click':function(){
			//滚屏
			num=$(this).index();
			$('#fullPage').attr('class','look'+num);
			$(this).addClass('current').siblings().removeClass('current');
		}
	});	
	//首页banner
	
	//app下载页面效果
	var Timer=null;
	var Num=0;
	var speed=500;
	//点击往右  也是下一张
	$('.right').click(function(event) {
		autoPlay();	
		clearInterval(Timer);
	});
	//点击往左  上一张
	$('.left').click(function(event) {
	clearInterval(Timer)
		Num--;
		if(Num <0){
			Num=1;
		}
		$('.wrap ul').animate({left:-Num*500}, speed);

		//找到角标 ，给角标增加类
		$('.dot span').eq(Num).addClass('current').siblings('span').removeClass('current');
	});
	function autoPlay(){
		Num++;
		if(Num>1){
			Num=0;
		}
		$('.wrap ul').stop().animate({left:-Num*500}, speed);

		//找到角标 ，给角标增加类
		$('.dot span').eq(Num).addClass('current').siblings('span').removeClass('current');
	}
	Timer=setInterval(autoPlay, 3000);
	$('ul,.dot,.left,.right').hover(function() {
		clearInterval(Timer);
	}, function() {
		clearInterval(Timer);
		Timer=setInterval(autoPlay, 3000);

	});
	$('.dot span').click(function(event) {
		$(this).addClass('current').siblings('span').removeClass('current');
		var iNum=$(this).index();
			// 0       400     0
			// 1       400      -400
			// 2       400      -800
		$('.wrap ul').animate({left:-iNum*500}, speed);
	});	
	//点击下载按钮
	$('.ios').click(function(event) {
		$('.small').css({
			width: '67%',
			height: '90%',
			bottom: '5%',
			zIndex:'3',
			left :'0'
		});
		$('.big').css({
			height: '75%',
			marginTop:'10%',
			zIndex:'1',
			width: '55%',
			bottom: '12%',
			left: '35%'
		});
	});
	$('.android').click(function(event) {
		$('.small').css({
			height: '75%',
			marginTop:'10%',
			zIndex:'1',
			width: '55%',
			bottom: '12%',
			left: '35%'
		});
		$('.big').css({
			width: '67%',
			height: '90%',
			bottom: '5%',
			zIndex:'6',
			left :'0'
		});
	});
	//手机点击效果
	$('.iconWrap .col-xs-4').click(function(event) {
		var Index= $(this).index();
		$(this).addClass('cur').siblings('').removeClass('cur');
		$('.wordWrap .col-xs-12').eq(Index).addClass('current').siblings('').removeClass('current')
	});

});