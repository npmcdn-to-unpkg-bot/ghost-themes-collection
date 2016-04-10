/*globals jQuery, document */
(function ($) {
	"use strict";


	// 0. Settings

	// Create a Dribbble App and get a Token ID at https://dribbble.com/account/applications

	var dribbbleWidget = false, // Set to true to activate widget
		dribbbleToken = '',
		dribbbleUser = '', // Set to your own Dribbble username
		dribbbleMaxShots = 6; // Adjust the number of shots display. Even numbers.

	var disqusComments = true, // Set to false to hide comments
		disqusUser = 'yourdisqus_shortname'; // Set to your own Disqus Shortname

	var twitterWidget = false, // Set to true to activate widget
		twitterUser = '', // Set your user name for the "Follow" button
		twitterWidgetID = ''; // ID of your Twitter widget


	// ---!!! DO NOT EDIT BELOW THIS POINT !!!--- //


	// 1. Size setup

	function sizeSetup() {
		var fullHeight = $(window).height() - $('body').offset().top;
		var headerHeight = $('#header').height();
		var heroHeight = fullHeight - headerHeight;
		var heroContentHeight = $('#hero .container').height();

		$('#hero .hero-content').css({
			'height': heroContentHeight
		});

		var tallHeroes = $('.home-template #hero, #hero.image-bg, #hero.error-hero');

		if (Modernizr.mq('only screen and ( min-width: 1024px )')) {
			$(tallHeroes).addClass('tall-hero').css({
				'height': heroHeight
			});
		} else if (Modernizr.mq('only screen and ( max-width: 1023px )')) {
			$(tallHeroes).removeClass('tall-hero').css({
				'height': 'auto'
			});
		}
	}

	var resizeTimeOut = false;
	$(window).resize(function () {
		if (resizeTimeOut !== false) {
			clearTimeout(resizeTimeOut);
		}
		resizeTimeOut = setTimeout(sizeSetup, 200); //200 is time in miliseconds
	});

	sizeSetup();

	// 2. Post Image Hero FX on Scroll

	if (Modernizr.mq('only screen and ( min-width: 1024px )')) {
		$(window).scroll(function () {
			var scrolled = $(this).scrollTop();
			var maxScroll = $('#hero').height() * 60 / 100;
			$('#hero.tall-hero .hero-content').css({
				'top': scrolled,
				'opacity': (1 - scrolled / maxScroll)
			});
		});
	}

	// 3. Posts Setup

	$('.duo-grid > .post').addClass('col-md-6'); // Add half width class to posts
	$('.trio-grid > .post').addClass('col-md-4'); // Add third width class to posts

	// 4. Mobile Nav Setup

	$('#nav-mobile-drop').html($('#nav').html());

	$('#nav-mobile-toggle').click(function (el) {
		el.preventDefault();

		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$('#nav-mobile-drop').slideUp('fast').removeClass('active');
		} else {
			$(this).addClass('active');
			$('#nav-mobile-drop').slideDown('fast').addClass('active');
		}
	});

	// 4. Link FX

	$('.post-info a').addClass('link');

	// 5. Dribbble Widget

	if (dribbbleWidget === true && dribbbleToken && $('#dribbble-widget').length) {
		$.jribbble.setToken(dribbbleToken);
		$.jribbble.users(dribbbleUser).shots({
			per_page: dribbbleMaxShots
		}).then(function (shots) {
			var html = [];

			shots.forEach(function (shot) {
				html.push('<li class="col-xs-6 col-sm-12 col-md-6">');
				html.push('<a href="' + shot.html_url + '" title="' + shot.title + '" target="_blank"><img src="' + shot.images.teaser + '" alt="' + shot.title + '" class="dribbble_shot mono"></a>');
				html.push('<div class="dribbble-title"><a href="' + shot.html_url + '" title="' + shot.title + '">' + shot.title + '</a></div>');
				html.push('</li>');
			});

			$('#dribbble-widget ul').html(html.join(''));
		});
	} else {
		$('#dribbble-widget').remove();
	}

	// 6. Disqus Comments

	if (disqusComments === true && $('#disqus_thread').length) {
		(function () {
			var dsq = document.createElement('script');
			dsq.type = 'text/javascript';
			dsq.async = true;
			dsq.src = '//' + disqusUser + '.disqus.com/embed.js';
			(document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
		}());
	} else {
		$('.post-template .post-comments').remove();
	}

	// 7. Related posts

	$('#related-posts').ghostRelated({
		titleClass: '.hero-title',
		tagsClass: '.hero-tags',
	});

	// 8. Latest posts

	function latestPosts() {
		$.get('/rss/', function (data) {
			var $xml = $(data);
			var recent = '';
			$xml.find('item').slice(0, 5).each(function () {
				var $this = $(this),
					item = {
						title: $this.find('title').text(),
						link: $this.find('link').text(),
						description: $this.find('description').text(),
						pubDate: $this.find('pubDate').text(),
						category: $this.find('category').text()
					};
				recent += '<li>';
				recent += '<a title="' + item.title + '" href="' + item.link + '">' + item.title + '</a>';
				recent += '</li>';
			});
			$('.widget ul#latest-posts').html(recent);
		});
	}

	latestPosts();

	// 9. Latest tweets

	// Twitter widget

	if (twitterWidget === true && twitterWidgetID && $('#twitter-widget').length) {
		var twitterConfig = {
			"id": twitterWidgetID,
			"domId": 'widget-tweets',
			"maxTweets": 2,
			"enableLinks": true,
			"showUser": false,
			"showInteraction": false
		};
		twitterFetcher.fetch(twitterConfig);
		$('#twitter-widget').append('<a href="http://twitter.com/' + twitterUser + '" class="button" target="_blank">Follow on Twitter</a>');
	} else {
		$('#twitter-widget').remove();
	}

	// 10. FitVids

	$(".post-content").fitVids();

}(jQuery));