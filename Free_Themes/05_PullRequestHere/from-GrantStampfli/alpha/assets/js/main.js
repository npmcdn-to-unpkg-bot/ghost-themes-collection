/**
 * Main JS file for Alpha behaviours
 */

/*globals jQuery, document */
(function ($) {

    $(document).ready(function(){

        /* Variables */
        var win = $(window);
        var posts = $(".home-template .post, .paged .post, .author-template .post, .tag-template .post");
        var headerHeight = $(".site-header").height();
        var isMobile = $(window).width() <= 500;

        if(Modernizr.touch){
            slider_auto_slide = false;
        }

        /* Featured Posts Slider */
        $(window).load(function() {
            $('.flexslider').flexslider({
                slideshow: slider_auto_slide, //auto slideshow
                slideshowSpeed: slider_image_timeout,
                animationSpeed: slider_transition_speed, //transition speed
                pauseOnAction: slider_pause,
                controlNav: slider_pagination, //pagination
                directionNav: slider_nav, //next & prev buttons
                keyboard: slider_keyboard, //keyboard nav
                prevText: "",
                nextText: ""
            });
        });

        /* Header */

        $(window).scroll(function() {

            var scroll = $(document).scrollTop();

            if($('.no-image').length == 0) {
                if(scroll >= 10) {
                    $(".site-header").addClass("dark");
                }else{

                    if($('.slider-image').length){
                        $(".home-template .site-header").removeClass("dark");
                    }else{
                        $(".post-template .site-header, .page-template .site-header, .tag-template .site-header, .author-template .site-header").removeClass("dark");
                    }
                    
                }
            }

            if(Modernizr.touch){
                if(scroll <= 500) {
                    $(".flexslider .slides>li").removeClass("slider-no-touch");
                }else{
                    $(".flexslider .slides>li").addClass("slider-no-touch");
                }
            }

        });

        if($('.no-image').length == 1) {
            $(".site-header").addClass("dark");
            $(".post-template main").css("margin-top","60px");
        }

        //if the author page has no cover photo
        if($('.author-template .no-image').length == 1) {
            $(".author-template main").css("margin-top","65px");
        }

        //if the homepage doesn't have featured posts (slider)
        if(!$('.home-template .slider-image, .archive-template .slider-image').length) {
            $(".home-template .site-header, .archive-template .site-header ").addClass("dark");
            $(".home-template .posts, .archive-template .posts").css("margin-top","120px");
        }

        /* Responsive Videos */
        function fitVidInit(){
            $(".post").fitVids();
        }
        
        fitVidInit();

        /* Disqus Comments */
        if(disqus){
            $('.show-comments').on('click', function(){
              var disqus_shortname = disqus;
              var disqus_identifier = '{{post.id}}'; //avoid any issues caused by post URLs changing
            
              //ajax request to load the disqus javascript
              $.ajax({
                      type: "GET",
                      url: "http://" + disqus_shortname + ".disqus.com/embed.js",
                      dataType: "script",
                      cache: true
              });
              //hide the button once comments load
              $(this).fadeOut();
            });
        }else{
            $('.comments').css('display', 'none');
        }
        
        /* Image lightbox */
        if(lightbox == true && !Modernizr.touch){
            $('.post-template .post-content-output img').each(function (){
                var currentImg = $(this);
                currentImg.wrap("<div class='full-width' >"); //full width images
                currentImg.wrap("<a href='" + currentImg.attr("src") + "' />");
            });
            $('.post-template .post-content-output a').fluidbox();
        }else{
            $('.post-template .post-content-output img').each(function (){
                var currentImg = $(this);
                currentImg.wrap("<div class='full-width' >"); //full width images
            });
        }

        /* Slide in posts */
        function slideInPostsInit(){
            if(!Modernizr.touch){
                //already visible posts
                posts.each(function(i, el) {
                    var el = $(el);
                    if (el.visible(true)) {
                        el.addClass("already-visible"); 
                    } 
                });
                //on scroll add animation classes
                win.scroll(function(event) {
                    posts.each(function(i, el) {
                        var el = $(el);
                        if (el.visible(true)) {
                            el.addClass("animated fadeIn"); 
                        } 
                    });
                });
            }
        }

        slideInPostsInit();

        /* Infinite Scroll */
        if(infinite_scroll == 'scroll'){

            var ias = $.ias({
                container:  "#main",
                item:       ".post",
                pagination: "#pagination",
                next:       ".older-posts"
            });

            ias.extension(new IASSpinnerExtension()); 
            ias.extension(new IASPagingExtension());
            ias.extension(new IASHistoryExtension());

            ias.on('rendered', function(items) {
                fitVidInit();
                slideInPostsInit();
            })

        }else if(infinite_scroll == 'click'){

            var ias = $.ias({
                container:  "#main",
                item:       ".post",
                pagination: "#pagination",
                next:       ".older-posts"
            });

            ias.extension(new IASTriggerExtension({
                text: 'Load More Posts',
                html: '<div class="pagination"><a class="load-more-posts">{text} <i class="icon-angle-down"></i></a></div>',
                htmlPrev: " "
            }));

            ias.extension(new IASPagingExtension());
            ias.extension(new IASHistoryExtension());


            ias.on('rendered', function(items) {
                fitVidInit();
                slideInPostsInit();
            })

        }

        /* Social Media Icons */

        //show icons once JS has loaded
        $(".social-media").css('visibility', 'visible');

        if(facebook_link){
            $(".social-media .facebook").attr("href", facebook_link);
        }else{
            $(".social-media .facebook").css("display", "none");
        }

        if(twitter_link){
            $(".social-media .twitter").attr("href", twitter_link);
        }else{
            $(".social-media .twitter").css("display", "none");
        }

        if(google_plus_link){
            $(".social-media .google-plus").attr("href", google_plus_link);
        }else{
            $(".social-media .google-plus").css("display", "none");
        }

        if(dribbble_link){
            $(".social-media .dribbble").attr("href", dribbble_link);
        }else{
            $(".social-media .dribbble").css("display", "none");
        }

        if(instagram_link){
            $(".social-media .instagram").attr("href", instagram_link);
        }else{
            $(".social-media .instagram").css("display", "none");
        }

        if(tumblr_link){
            $(".social-media .tumblr").attr("href", tumblr_link);
        }else{
            $(".social-media .tumblr").css("display", "none");
        }

        if(youtube_link){
            $(".social-media .youtube").attr("href", youtube_link);
        }else{
            $(".social-media .youtube").css("display", "none");
        }

        if(vimeo_link){
            $(".social-media .vimeo").attr("href", vimeo_link);
        }else{
            $(".social-media .vimeo").css("display", "none");
        }

        if(pinterest_link){
            $(".social-media .pinterest").attr("href", pinterest_link);
        }else{
            $(".social-media .pinterest").css("display", "none");
        }

        if(flickr_link){
            $(".social-media .flickr").attr("href", flickr_link);
        }else{
            $(".social-media .flickr").css("display", "none");
        }

        if(linkedin_link){
            $(".social-media .linkedin").attr("href", linkedin_link);
        }else{
            $(".social-media .linkedin").css("display", "none");
        }

        if(github_link){
            $(".social-media .github").attr("href", github_link);
        }else{
            $(".social-media .github").css("display", "none");
        }

        if(rss_link == false){
            $(".social-media .rss").css("display", "none");
        }

    });

}(jQuery));