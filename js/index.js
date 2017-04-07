$(function(){
	//第二个轮播图
	$('.num li').hover(function(){
		var Index = $(this).index();
		$(this).addClass('link').siblings().removeClass('link');
		$(this).parent().prev().find('a img').attr('src',`images/banner${Index+1}.jpg`)
	});
	$('#num1 li').hover(function(){
		var Index = $(this).index();
		$(this).addClass('link').siblings().removeClass('link');
		$(this).parent().prev().find('a img').attr('src',`images/a${Index+1}.jpg`)
	});

	//客户大片
	$('.con-kinds ul li').hover(function(){
		$(this).find('.test').stop().slideDown();
	},function(){
		$(this).find('.test').stop().slideUp();
	});

	//微电影
	$('.movie ul li').hover(function(){
		$(this).find('.son').stop().slideDown();
	},function(){
		$(this).find('.son').stop().slideUp();
	});
});

