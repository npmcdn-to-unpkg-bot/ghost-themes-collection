$(function() {
	$('pre').addClass('prettyprint');
	var mainImage = $('img[alt="main-image"]');
	if (mainImage.length > 0) {
		$('header').css('background-image','url('+mainImage.attr('src')+')');
		mainImage.remove();
	}
  $('a[data-dropdown="projects"]').on('mouseenter', function() {
    $(this).trigger('open');
  });
});
