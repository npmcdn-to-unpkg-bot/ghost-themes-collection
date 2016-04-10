$(document).ready(function(){

	$('pre').addClass('prettyprint');

	mainImage = $('img[alt="main-image"]');

	if ( mainImage.length > 0){
		mainImageSource = mainImage.attr('src');
		$('header').css('background-image','url('+mainImageSource+')');
		mainImage.remove();
	}

	var STR_TO_TOP='返回顶部';
	$(function(){
		var button = $('<a href="#" id="to-top" title="' + STR_TO_TOP + '">↑</a>').appendTo('body');
		$(window).scroll(function(){
		    if($(window).scrollTop()>$(window).height()) button.fadeIn(500);
		    else button.fadeOut(500);
		});

		button.click(function(e){
			e.preventDefault();
			$('html,body').animate({
			    scrollTop:$(window).height()
			},300,function(){
			    window.location.hash='#';
			});
		})
	})

});

/*模拟键盘上下滚动*/
window.onload = function(){
	document.onkeydown = function(e) {
	    e = e || window.event;
	    if (e.keyCode == '74') {
	        $('html,body').stop();
	        $('html,body').animate({
	            scrollTop: $(window).stop().scrollTop() + 200
	        },'fast')
	    }
	    else if (e.keyCode == '75') {
	        $('html,body').stop();
	        $('html,body').animate({
	            scrollTop: $(window).stop().scrollTop() - 200
	        },'fast')
	    }

	}

}

