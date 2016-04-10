function adjustElements() {
    var ww = $(window).width();
    var isSmall = (ww <= 640);
    var isMedium = (ww > 640 && ww <= 900);
    $('.adjust').each(function() {
        if (isSmall) {
            $(this).addClass('sm-aj');
            $(this).removeClass('md-aj');
        } else if (isMedium) {
            $(this).addClass('md-aj');
            $(this).removeClass('sm-aj');
        } else {
            $(this).removeClass('md-aj');
            $(this).removeClass('sm-aj');
        }
    });
    $('body').css('opacity', '1');
}       

function updateElementsOnResize() {
    
    var pathName = window.location.pathname;
    var isSmall = ($(window).width() <= 640);
    
    $('.pw-post-image').unbind('click').click(function() {
        window.location.href = $(this).attr('data-href');
    });
}

function setHeaderImage(url) {
    $('.pw-post-header-img').css('background', 'url(' + url + ')');
    $('.pw-post-header-img').css('background-size', 'cover');
    $('.pw-post-header-img').css('background-position', 'center center');
    $('.pw-post-header-img').css('background-repeat', 'no-repeat');
}

function adjustElementsForBlog() {
    var featuredImageSet = false;
    $('.pw-post-image').each(function() {
        if ($(this).find('img').length > 0) {
            var featuredImage = $(this).find('img')[0];
            var alt = $(featuredImage).attr('alt');
            $(this).css('background', 'url(' + $(featuredImage).attr('src') + ') no-repeat');
            if ($.trim(alt).length > 0) {
                $(this).css('background-position', $.trim(alt));
            } else {
                $(this).css('background-position-x', '0px');
                $(this).css('background-position-y', '0px');
            }   
            $(this).css('background-size', 'cover');
            setHeaderImage($(featuredImage).attr('src'));
            featuredImageSet = true;
        } else {
            $(this).parent().addClass('ni');
        }
    });
    
    if (!featuredImageSet) {
        var bc = $('.pw-main-header').attr('data-blog-cover');
        if (bc && bc.length > 0) {
            setHeaderImage(bc);
        }
    }
    
    $('.post-content').each(function() {
        var imgCount = $(this).find('img').length;
        var comp = 1;
        if (!featuredImageSet) {
            comp = 0;
        }
        if (imgCount > comp) {
            for (i = comp; i <= imgCount - comp; i++) {
                var img = $(this).find('img')[i];
                $(img).css('visibility','visible');
                $(img).css('display','block');
            }
        }
    });
    
    $('.pw-post-excerpt').each(function() {
        var plen = $(this).find('p').length;
        if (plen > 2) {
             for (i = 2; i <= plen; i++) {
                var pel = $(this).find('p')[i];
                $(pel).remove();
            }
        }
        var lastPar = $(this).children(':last-child');
        if (lastPar) {
            lastPar.html(lastPar.html() + '...');
        }
    });
    
    if ($('#pw-is-static') && $('#pw-is-static').val() != 'true') {
        $('.pw-post-meta').removeClass('hidden');
    }
}


/*globals jQuery, document */
(function ($) {
    "use strict";

    $(document).ready(function(){

        $(window).load(function() {
            updateElementsOnResize();
            adjustElements();
        }).resize(function(){
            updateElementsOnResize();
            adjustElements();
        });

        adjustElementsForBlog();
        $(".post-content").fitVids();
        
        $('.pw-button-back').click(function(event) {
            event.preventDefault();
            if(document.referrer.indexOf(window.location.host) !== -1) {
                window.history.back();
            } else {
                window.location.href = '/';
            }
        });
        
    });

}(jQuery));