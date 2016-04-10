/**
 * Wharton 1.0.2
 */

//(function ($) {


	//
	// Add a class so we know JavaScript is supported
	//
	$('html').addClass("js").removeClass("no-js");

	//
	// Fit Vids
	//
    $('article').fitVids();

    //
    // Run menu
    //
    $('.site-navigation').addClass('animated-both').addClass('slideOutUp');

    // Get header height
    var topAdjust = $( 'header.header' ).outerHeight();
    $( '#menu-control' ).on( 'click' , function (e) {

    	e.preventDefault();

    	$("html, body").animate({ scrollTop: 0 }, 100);


        $('.site-navigation').toggleClass('slideInDown').toggleClass('slideOutUp');
        $('body').toggleClass('nav-active');
        $('.ie9 .site-navigation').show();



        if ( $(this).attr( 'class' ) === 'active' ) {

        	$('header.header').removeClass('fixed');
        	$('.ie9 .site-navigation').hide();

        }

        else {

    	    setTimeout(function() {
    	          $('header.header').addClass('fixed');
    	    }, 350);

        }

         $('body.nav-active .site-navigation').css( 'top' , topAdjust+'px' );


    	$(this).toggleClass('active');

    });


    if ( $('body').is('.post-template') || $('body').is('.page-template') ) {

        //
        // Grab featured image if alt tag is featured :)
        //
    	if ($("img[alt='Featured']").length) {

    		var featuredImg = $("img[alt='Featured']").remove();

    		var featuredImgUrl = featuredImg.attr('src');

    		$('.lead-image').attr( 'style' , 'background-image:url("' + featuredImgUrl + '")' );

    	}

        //
        // Wrap iframes
        //
        $("article iframe").each(function () {

        	$(this).wrap('<div class="iframe-wrapper" />');

        });

    }

    //
    // Hide pagination if empty
    //

    if( $('.prev-post a').length === 0 && $('.next-post a').length === 0 ) {

    	$('.pagination').hide();

    }


    $(window).load(function() {
    	"use strict";
    	//
    	// Adjust divide on pagination
    	//
    	var paginationHeight = $( '.pagination' ).outerHeight();

    	$( '.pagination .older-posts' ).css( 'min-height' , paginationHeight );

    		//
        // Full Width Insert
        //
        function makeInsert() {
            $("article img").each(function () {

            	var insertAlt = $(this).attr('alt');

            	if ( insertAlt === 'Insert' ) {

            		var parentClass = $(this).parent().attr('class');

            		if ( parentClass !== "mt-insert" ) {

            			$(this).wrap('<figure class="mt-insert" />');

            		}

            		var insertImage = $(this).height();

            		$(this).parent().css( "min-height" , insertImage );


            	}


            });
        }
        makeInsert();

        //
        // Resize events
        //
        $(window).resize(function () {
        	makeInsert();
        });

    });

    $(document).ready(function(){
    	"use strict";



        //
        // Use Ajax to grab recent posts
        //
        $('.site-navigation').append('<nav class="sitenav-posts" />');

        $( '.site-navigation nav.sitenav-posts' , this ).load(siteUrl + ' .sitenav-posts *', function(response, status, xhr) {
          if (status === "error") {
            var msg = "Sorry but there was an error: ";
            jQuery(this).html(msg + xhr.status + " " + xhr.statusText);
          }
        });

        //
        // Remove Site Navigation title if UL menu is empty
        //
        var mainMenu = $('ul#menu-main li a');

        if ( mainMenu.length === 0) {

        	$('.navigation-title-text, .sitenav-main').remove();

        }


   });

//}(jQuery));
