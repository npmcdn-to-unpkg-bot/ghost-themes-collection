/**
 *
 */

//Attribution: overflow http://stackoverflow.com/questions/19659053/viewport-for-ie10-11-desktop-but-not-mobile

if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
  var msViewportStyle = document.createElement("style")
  msViewportStyle.appendChild(
    document.createTextNode(
     "@-ms-viewport{width:auto!important}"
   )
 )
  document.getElementsByTagName("head")[0].appendChild(msViewportStyle)
}