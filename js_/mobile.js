$(function() {
	/*
	function userBrowser(){  
	    var browserName=navigator.userAgent.toLowerCase();  
	    if(/msie/i.test(browserName) && !/opera/.test(browserName)){    
	        window.location.href="index_1.html" 
	    }else if(/firefox/i.test(browserName)){  
	        return ;
	    }else if(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName)){   
	        return ;  
	    }else if(/iPad/i){ 
	        window.location.href="index_1.html";
	    }else if(/webkit/i.test(browserName) &&!(/chrome/i.test(browserName) && /webkit/i.test(browserName) && /mozilla/i.test(browserName))){
	    	window.location.href="index.html";  
	    }else{  
	        return ;  
	    }  
	};
	userBrowser();*/
	function myBrowser(){
    var userAgent = navigator.userAgent; //取得浏览器的userAgent字符串
    var isOpera = userAgent.indexOf("Opera") > -1;
    if (isOpera) {
        return "Opera"
    }; //判断是否Opera浏览器
    if (userAgent.indexOf("Firefox") > -1) {
        return "FF";
    } //判断是否Firefox浏览器
    if (userAgent.indexOf("Chrome") > -1){
	  return "Chrome";
	 }
	    if (userAgent.indexOf("Safari") > -1) {
	        return "Safari";
	    } //判断是否Safari浏览器
	    if (userAgent.indexOf("compatible") > -1 && userAgent.indexOf("MSIE") > -1 && !isOpera) {
	        window.location.href="index_1.html"
	    }; //判断是否IE浏览器
	}
	myBrowser();
	var num=0;
	var timer=null;
		//手机banner图
    function autoplay(){
        num++
        if(num>4){num=0}        
        $('.all ol li').eq(num).addClass('current').siblings().removeClass('current')
        //-----------------以上角标------------------以下图片-------------------
        $('.all ul li').eq(num).hide().stop().fadeIn().siblings().hide();
    }   
    timer=setInterval(autoplay,2000); 
    $('.left .item').click(function(event) {
		$('body').css({
			background: '#000',
	
		});
	});	
});