/**
 * Main JS file for Scriptor behaviours
 */

/*globals jQuery, document */
(function ($) {
	"use strict";

	$(document).ready(function(){

		// Responsive video embeds
		$('.post-content').fitVids();

		// Scroll to content
		$('.cover .arrow-down').on('click', function(e) {
			$('html, body').animate({'scrollTop': $('.cover').height()}, 800);
			e.preventDefault();
		});

		// Animated Back To Top link
		$('.site-footer .arrow-up').on('click', function(e) {
			$('html, body').animate({'scrollTop': 0});
			e.preventDefault();
		});

		// Sidebar
		$('.sidebar-toggle').on('click', function(e){
			$('body').toggleClass('sidebar-opened');
			e.preventDefault();
		});

		// Post reading time
		$('.post-template .post').readingTime();

		// Show comments
		$('.comments-title').on('click', function() {
			var disqus_shortname = 'my_disqus_shortname'; // replace my_disqus_shortname with your shortname

			// Load the disqus javascript
			$.ajax({
				type: "GET",
				url: "//" + disqus_shortname + ".disqus.com/embed.js",
				dataType: "script",
				cache: true
			});
			$(this).off('click').addClass('comments-loaded');
		});

		// Generate tag cloud
		if ( $('.tagcloud').length ) {
			parseRss();
		}

	});

	/* Inspired by Ghost Related plugin (https://github.com/danecando/jquery.ghostrelated) */
	function parseRss(pageNum, prevId, feeds) {
		var page = pageNum || 1,
			prevId = prevId || '',
			feeds = feeds || [];
		$.ajax({
			url: '/rss/' + page + '/',
			type: 'GET',
			success: function(data){
				var curId = $(data).find('item > guid').text();
				if (curId != prevId) {
					feeds.push(data);
					parseRss(page+1, curId, feeds);
				} else {
					var posts = getPosts(feeds);
					displayTagCloud(posts);
				}
			},
			complete: function(xhr) {
				if (xhr.status == 404) {
					var posts = getPosts(feeds);
					displayTagCloud(posts);
				}
			}
		});
	}

	function getPosts(feeds) {
		var posts = [],
			items = [];
		feeds.forEach(function(feed) {
			items = $.merge(items, $(feed).find('item'));
		});
		for (var i = 0; i < items.length; i++) {
			var item = $(items[i]);
			posts.push({
				title: item.find('title').text(),
				url: item.find('link').text(),
				date: item.find('pubDate').text(),
				tags: $.map(item.find('category'), function(elem) {
					return $(elem).text();
				})
			});
		}
		return posts;
	}

	function displayTagCloud(posts) {
		var tagList = [],
			tagCloud = '';
		posts.forEach(function(post) {
			var tags = post.tags;
			tags.forEach(function(tag) {
				if ( $.inArray(tag, tagList) == -1 ) {
					tagList.push(tag);
				}
			});
		});
		for ( var i=0; i<tagList.length; i++ ) {
			var tag = tagList[i],
			tagLink = tag.replace(/\s+/g, '-').toLowerCase();
			tagCloud += ('<a href="/tag/' + tagLink + '" class="button">' + tag + '<span aria-hidden="true"><span class="line left"></span><span class="line top"></span><span class="line right"></span><span class="line bottom"></span></span></a>');
		}
		$('.tagcloud').append(tagCloud);
	}

}(jQuery));
