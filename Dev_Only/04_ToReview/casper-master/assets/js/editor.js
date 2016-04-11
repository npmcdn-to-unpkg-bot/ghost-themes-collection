$(document).ready(function () {
    var openComment, styles, time, writeStyleChar, writeStyles;

//            styles = "/* \n * \"Myself\" v1.0.4\n * Robot rights protected under BOT License\n * Authored by pen#PwLXXP\n */\n\n.editor-view.left {\n  background-color: #1a1c24; color: #fff;\n  font-size: 13px; line-height: 1.4;\n  -webkit-font-smoothing: subpixel-antialiased;\n}\n\n/* ...                  \n *\n * ...hello?            \n *\n * Oh hai guys! It's me, pen#PwLXXP.         \n *\n * I'm just sitting here coding away.            \n *\n * Sure, you can watch.                       \n *\n *\n * This CSS is being injected into a DOM <style> element \n * and written in this <pre> element simultaneously.        \n *\n * Confused? Watch!\n *\n */\n\npre { \n  position: fixed; width: 48%;\n  top: 30px; bottom: 30px; left: 26%;\n  transition: left 500ms;\n  background-color: #313744; color: #a6c3d4;\n  border: 1px solid rgba(0,0,0,0.2);\n  padding: 24px 12px;\n  box-sizing: border-box;\n  border-radius: 3px;\n  box-shadow: 0px 4px 0px 2px rgba(0,0,0,0.1);\n}\n\n\n/* \n * Syntax highlighting \n * Colors based on Base16 Ocean Dark\n */\n\npre em:not(.comment) { font-style: normal; }\n\n.comment       { color: #707e84; }\n.selector      { color: #c66c75; }\n.selector .key { color: #c66c75; }\n.key           { color: #c7ccd4; }\n.value         { color: #d5927b; }\n\n\n/* \n * Let's build my little pen heart.\n */ \n\n\n/* First, we'll move this s*** over */\n\npre { left: 50%; }\n\n\n/* Now we can build my heart */\n\n#heart, #echo { \n  position: fixed;\n  width: 300px; height: 300px;\n  top: calc(50% - 150px); left: calc(25% - 150px);\n  text-align: center;\n  -webkit-transform: scale(0.95);\n          transform: scale(0.95);\n}\n\n#heart { z-index: 8; }\n#echo  { z-index: 7; }\n\n#heart::before, #heart::after, #echo::before, #echo::after {\n    content: '';\n    position: absolute;\n    top: 40px;\n    width: 150px; height: 240px;\n    background: #c66c75;\n    border-radius: 150px 150px 0 0;\n    -webkit-transform: rotate(-45deg);\n            transform: rotate(-45deg);\n    -webkit-transform-origin: 0 100%;\n            transform-origin: 0 100%;\n}\n\n#heart::before, #echo::before {\n  left: 150px;\n}\n\n#heart::after, #echo::after {\n  left: 0;\n  -webkit-transform: rotate(45deg);\n          transform: rotate(45deg);\n  -webkit-transform-origin: 100% 100%;\n          transform-origin: 100% 100%;\n}\n\n\n/* It needs some depth  */\n\n#heart::after { \n  box-shadow:\n    inset -6px -6px 0px 6px rgba(255,255,255,0.1);\n}\n\n#heart::before { \n  box-shadow:\n    inset 6px 6px 0px 6px rgba(255,255,255,0.1);\n}\n\n\n/* Makin it mine. */\n\n#heart i::before {\n  content: 'pen#PwLXXP';\n  position: absolute;\n  z-index: 9;\n  width: 100%;\n  top: 35%; left: 0;\n  font-style: normal;\n  color: rgba(255,255,255,0.8);\n  font-weight: 100;\n  font-size: 30px;\n  text-shadow: -1px -1px 0px rgba(0,0,0,0.2);\n}\n\n\n/* \n * Hearts gotta beat. \n */\n\n@-webkit-keyframes heartbeat {\n  0%, 100% { \n    -webkit-transform: scale(0.95); \n            transform: scale(0.95); \n  }\n  50% { \n    -webkit-transform: scale(1.00); \n            transform: scale(1.00); \n  }\n}\n\n@keyframes heartbeat {\n  0%, 100% { transform: scale(0.95); }\n  50%      { transform: scale(1.00); }\n}\n\n@-webkit-keyframes echo {\n  0%   { \n    opacity: 0.1;\n    -webkit-transform: scale(1);\n            transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    -webkit-transform: scale(1.4);\n            transform: scale(1.4);\n  }\n}\n\n@keyframes echo {\n  0%   { \n    opacity: 0.1;\n    transform: scale(1);\n  }\n  100% { \n    opacity: 0;\n    transform: scale(1.4);\n  }\n}\n\n\n/* \n * Beautiful! Now for the beating...\n */\n\n#heart, #echo {\n  -webkit-animation-duration: 2000ms;\n          animation-duration: 2000ms;\n  -webkit-animation-timing-function: \n    cubic-bezier(0, 0, 0, 1.74);\n          animation-timing-function: \n            cubic-bezier(0, 0, 0, 1.74);\n  -webkit-animation-delay: 500ms;\n          animation-delay: 500ms;\n  -webkit-animation-iteration-count: infinite;\n          animation-iteration-count: infinite;\n  -webkit-animation-play-state: paused;\n          animation-play-state: paused;\n}\n\n#heart { \n  -webkit-animation-name: heartbeat; \n          animation-name: heartbeat; \n}\n#echo { \n  -webkit-animation-name: echo; \n          animation-name: echo; \n}\n\n\n/* \n * Ready...           \n */\n\n#heart, #echo {\n\n/* \n * ...set...          \n */\n  \n  -webkit-animation-play-state: running;\n          animation-play-state: running;\n  \n/* \n * ...beat!        \n */\n  \n}\n\n/* \n *\n * Wahoo!         \n *\n * We did it!       \n *\n * I mean *I* did it, but you know, whatever...\n * jake albaugh definitely did not have anything \n * to do with this.\n *\n * This pen loves CodePen!       \n * \n * See you later!\n *  \n */";

    styles = "/*\nHey I\'m Garrett */" +
        "\n.editor-view.right{\nbackground-color: whitesmoke; " +
        "\n  color: black;" +
        "\n}" +
        "\n.value{color:white;}" +
        "\n.selector{color:red;}" +
        "\n.key{color:orange;}" +
        "\n /* let me tell you a bit about myself*/" +
        "\n /* lets move this to a different file*/" +
        "\n^"
    var html = "<div> Hey I\'m back! Garrett, if you forgot.</div>";
    openComment = false;

    writeStyleChar = function (which) {

        if (which === '/' && openComment === false) {
            openComment = true;
            styles = $('#style-text').html() + which;
        } else if (which === '/' && openComment === true) {
            openComment = false;
            styles = $('#style-text').html().replace(/(\/[^\/]*\*)$/, '<em class="comment">$1/</em></br>');
        } else if (which === ':') {
            styles = $('#style-text').html().replace(/([a-zA-Z- ^\n]*)$/, '<em class="key">$1</em>:');
        } else if (which === ';') {
            styles = $('#style-text').html().replace(/([^:]*)$/, '<em class="value">$1</em>;</br>');
        } else if (which === '{') {
            styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector"></br>$1</em></br>{');
        } else if (which === '^') {
//                  $('.editor-view .left').html().replace(/(.*)$/, '<em class="selector"></br>$1</em></br>{');
            $('.editor-view.right').append(html);
//                styles = $('#style-text').html().replace(/(.*)$/, '<em class="selector"></br>$1</em></br>{');
        } else {
            styles = $('#style-text').html() + which;
        }
        $('#style-text').html(styles);
        return $('#style-tag').append(which);
    };

    writeStyles = function (message, index, interval) {
        var pre;
        if (index < message.length) {
            pre = document.getElementById('style-text');
            pre.scrollTop = pre.scrollHeight;
            writeStyleChar(message[index++]);
            return setTimeout((function () {
                return writeStyles(message, index, interval);
            }), interval);
        }
    };

    $('.editor-view.left').append("<style id=\"style-tag\"></style>");

    time = window.innerWidth <= 578 ? 4 : 16;

    writeStyles(styles, 0, time);


    /*
     Changelog:
     1.0.0: i exist!
     1.0.1: heart instead of circle
     1.0.2: including standard CSS3 transforms and animations
     was only using `-webkit` to be less verbose (standard transforms dont work in safari)
     now works in FF
     1.0.3: crossbrowser echo
     nested `scale()` styles (scaled in scaled) only worked in chrome
     moved echo out of heart to fix
     1.0.4: more efficient animations
     `0%, 100% {}` instead of duplicated keyframes
     */

// ---
// generated by coffee-script 1.9.2
    function drag_start(event) {
        var style = window.getComputedStyle(event.target, null);
        event.dataTransfer.setData("text/plain",
            (parseInt(style.getPropertyValue("left"),10) - event.clientX) + ',' + (parseInt(style.getPropertyValue("top"),10) - event.clientY));
    }
    function drag_over(event) {
        event.preventDefault();
        return false;
    }
    function drop(event) {
        var offset = event.dataTransfer.getData("text/plain").split(',');
        var dm = document.getElementById('dragme');
        dm.style.left = (event.clientX + parseInt(offset[0],10)) + 'px';
        dm.style.top = (event.clientY + parseInt(offset[1],10)) + 'px';
        event.preventDefault();
        return false;
    }
    var dm = document.getElementById('dragme');
    dm.addEventListener('dragstart',drag_start,false);
    document.body.addEventListener('dragover',drag_over,false);
    document.body.addEventListener('drop',drop,false);


    $('.folder-items').hide()
    $('.folder').click(function(){
        $(this).addClass('bottom-arrow');
        $(this).removeClass('right-arrow');
        $(this).find('.folder-items').show()
    })


})