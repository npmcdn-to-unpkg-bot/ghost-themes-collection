/**
 * Main JS file for Casper behaviours
 */

 /*globals jQuery, document */
 (function ($) {
    "use strict";

    // scroll up plugin
    $.scrollUp({
        scrollText: "Top"
    });

    /** reponsive videos **/
    $(".post-cover, .post-content").fitVids();

    $(".posts .post-cover").each(function() {
        // image cover
        var $cover = $("img", $(this));
        if($cover && $cover.length == 1) {
            $(this).html("<img src='" + $cover.attr("src") + "' />").css("display", "none");
        }

        var $videoCover = $(".fluid-width-video-wrapper", $(this));
        if($videoCover && $videoCover.length == 1) {
            $(this).removeClass("hide");
        }

        var $iframeCover = $("iframe[src*='soundcloud.com']", $(this));
        if($iframeCover && $iframeCover.length == 1) {
            $(this).removeClass("hide");
        }
    });

    $(".post-content img:first").each(function() {
        var src = $(this).attr("src");
        $(".blog-post-header").css("background-image", "url(" + src + ")");
    });

    $(".post-meta .tags").each(function() {
        var tagString = $(this).html();
        if(tagString) {
            var tags = tagString.split(",");
            for(var index in tags) {
                var tag = tags[index].trim();
            }
        }
    });

}(jQuery));
