//banner
$(function(){
	//导航条
	$('.nav-r ul li').hover(function(){
		$(this).find('.ab-list').stop().slideDown();
	},function(){
		$(this).find('.ab-list').stop().slideUp();
	});
	//banner 图
	var m=0;
	var timer;
	$('.banner-btn li').on('click',function(){
		m = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.banner-img div').eq(m).fadeIn().siblings().fadeOut();
	});
	$('.prev').on('click',function(){
		m--;
		if(m<0){
			m=$('.banner-img div').length-1;
		}
		$('.banner-btn li').eq(m).addClass('active').siblings().removeClass('active');
		$('.banner-img div').eq(m).fadeIn().siblings().fadeOut();
	});
	$('.next').on('click',function(){
		m++;
		if(m==$('.banner-img div').length){
			m=0;
		}
		$('.banner-btn li').eq(m).addClass('active').siblings().removeClass('active');
		$('.banner-img div').eq(m).fadeIn().siblings().fadeOut();
	})
	function time(){
		timer = setInterval(function(){
			m++;
			if(m==$('.banner-img div').length){
				m=0;
			}
			$('.banner-btn li').eq(m).addClass('active').siblings().removeClass('active');
			$('.banner-img div').eq(m).fadeIn().siblings().fadeOut();
		},4000);
	}
	time();
	$('.banner').hover(
		function(){
			clearInterval(timer);
		},
		function(){
			time();
		}
	)
});

//关于我们
$(function(){
	$('.check ol li').on('mouseover',function(){
		$(this).addClass('active').siblings().removeClass('active');
		$(this).parents('.check').find('ul li').eq($(this).index()).fadeIn('slow').siblings().fadeOut('slow');
	})
});

//作品展示
$(function(){
	var n=0;
	$('.type ul li').on('click',function(){
		n = $(this).index();
		$(this).addClass('active').siblings().removeClass('active');
		$('.work .flower').eq(n).show().siblings().hide();
	});
	$('.front').on('click',function(){
		n--;
		if(n<0){
			n=$('.work .flower').length-1;
		}
		$('.type ul li').eq(n).addClass('active').siblings().removeClass('active');
		$('.work .flower').eq(n).show().siblings().hide();
	});
	$('.new-bg').on('click',function(){
		n++;
		if(n==$('.work .flower').length){
			n=0;
		}
		$('.type ul li').eq(n).addClass('active').siblings().removeClass('active');
		$('.work .flower').eq(n).show().siblings().hide();
	})
	
});