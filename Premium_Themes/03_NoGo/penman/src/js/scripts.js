$(document).ready(function() {
	// Featured image
	$('.post-excerpt').each(function() {     
		var featuredImage = $(this).find('.post-content-temp').find('img[alt="featured-image"]');

		if (featuredImage.length > 0) {
	        $(this).find('.post-content-temp').remove();
	        $(this).find('.post-content').find('.post-featured-image-container').find('.post-featured-image').css('opacity', 0).attr('src', featuredImage.attr('src')).animate({ opacity: 1 }, { duration: 500 });
	    } else {
	    	$(this).find('.post-content-temp').remove();
	    	$(this).find('.post-content').find('.post-featured-image-container').remove();
	    }
    });

	// FitVids
	$(".post-content").fitVids();	

	// Navigation
	$('.nav-toggler').click(function() {
		$('body, .nav-menu').addClass('nav-transition');
		$('body').toggleClass('body-nav-open');
		$('.nav-menu').toggleClass('nav-open');
	});

	// Darkbox
	$('.post-full .post-content img').each(function() {
		var imageSrc = $(this).attr('src');
		$(this).wrap('<a href="' + imageSrc + '" rel="darkbox"></a>');
	});

	$('a[rel=darkbox]').darkbox();

	// Highlight.js
	hljs.initHighlightingOnLoad();

	// NProgress
	NProgress.start();
});

$(window).load(function() {
	// NProgress
	NProgress.done();
});