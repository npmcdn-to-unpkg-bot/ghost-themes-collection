(function(){var e,t,n=function(e,t){return function(){return e.apply(t,arguments)}};window.Waveform=t=function(){function t(e){this.redraw=n(this.redraw,this);this.container=e.container;this.canvas=e.canvas;this.data=e.data||[];this.outerColor=e.outerColor||"transparent";this.innerColor=e.innerColor||"#000000";this.interpolate=true;if(e.interpolate===false){this.interpolate=false}if(this.canvas==null){if(this.container){this.canvas=this.createCanvas(this.container,e.width||this.container.clientWidth,e.height||this.container.clientHeight)}else{throw"Either canvas or container option must be passed"}}this.patchCanvasForIE(this.canvas);this.context=this.canvas.getContext("2d");this.width=parseInt(this.context.canvas.width,10);this.height=parseInt(this.context.canvas.height,10);if(e.data){this.update(e)}}t.name="Waveform";t.prototype.setData=function(e){return this.data=e};t.prototype.setDataInterpolated=function(e){return this.setData(this.interpolateArray(e,this.width))};t.prototype.setDataCropped=function(e){return this.setData(this.expandArray(e,this.width))};t.prototype.update=function(e){if(e.interpolate!=null){this.interpolate=e.interpolate}if(this.interpolate===false){this.setDataCropped(e.data)}else{this.setDataInterpolated(e.data)}return this.redraw()};t.prototype.redraw=function(){var e,t,n,r,i,s,o,u;this.clear();if(typeof this.innerColor==="function"){this.context.fillStyle=this.innerColor()}else{this.context.fillStyle=this.innerColor}n=this.height/2;t=0;o=this.data;u=[];for(i=0,s=o.length;i<s;i++){e=o[i];r=this.width/this.data.length;if(typeof this.innerColor==="function"){this.context.fillStyle=this.innerColor(t/this.width,e)}this.context.clearRect(r*t,n-n*e,r,n*e*2);this.context.fillRect(r*t,n-n*e,r,n*e*2);u.push(t++)}return u};t.prototype.clear=function(){this.context.fillStyle=this.outerColor;this.context.clearRect(0,0,this.width,this.height);return this.context.fillRect(0,0,this.width,this.height)};t.prototype.patchCanvasForIE=function(e){var t;if(typeof window.G_vmlCanvasManager!=="undefined"){e=window.G_vmlCanvasManager.initElement(e);t=e.getContext;return e.getContext=function(n){var r;r=t.apply(e,arguments);e.getContext=t;return r}}};t.prototype.createCanvas=function(e,t,n){var r;r=document.createElement("canvas");e.appendChild(r);r.width=t;r.height=n;return r};t.prototype.expandArray=function(e,t,n){var r,i,s,o;if(n==null){n=0}i=[];if(e.length>t){i=e.slice(e.length-t,e.length)}else{for(r=s=0,o=t-1;0<=o?s<=o:s>=o;r=0<=o?++s:--s){i[r]=e[r]||n}}return i};t.prototype.linearInterpolate=function(e,t,n){return e+(t-e)*n};t.prototype.interpolateArray=function(e,t){var n,r,i,s,o,u,a;o=new Array;u=new Number((e.length-1)/(t-1));o[0]=e[0];s=1;while(s<t-1){a=s*u;i=(new Number(Math.floor(a))).toFixed();n=(new Number(Math.ceil(a))).toFixed();r=a-i;o[s]=this.linearInterpolate(e[i],e[n],r);s++}o[t-1]=e[e.length-1];return o};t.prototype.optionsForSyncedStream=function(e){var t,n;if(e==null){e={}}t=false;n=this;return{whileplaying:this.redraw,whileloading:function(){var r;if(!t){r=this;n.innerColor=function(t,n){if(t<r.position/r.durationEstimate){return e.playedColor||"rgba(255,  102, 0, 0.8)"}else if(t<r.bytesLoaded/r.bytesTotal){return e.loadedColor||"rgba(0, 0, 0, 0.8)"}else{return e.defaultColor||"rgba(0, 0, 0, 0.4)"}};t=true}return this.redraw}}};t.prototype.dataFromSoundCloudTrack=function(t){var n=this;return e.get("http://www.waveformjs.org/w",{url:t.waveform_url},function(e){return n.update({data:e})})};return t}();e=function(){var e,t,n,r,i,s,o,u,a,f;o=function(e){var t,n,r;r=document.createElement("script");t=false;r.src=e;r.async=true;r.onload=r.onreadystatechange=function(){if(!t&&(!this.readyState||this.readyState==="loaded"||this.readyState==="complete")){t=true;r.onload=r.onreadystatechange=null;if(r&&r.parentNode){return r.parentNode.removeChild(r)}}};if(!n){n=document.getElementsByTagName("head")[0]}return n.appendChild(r)};n=function(e){return encodeURIComponent(e)};i=function(r,i,s,u){var a,l,c;l=(r||"").indexOf("?")===-1?"?":"&";u=u||e["callbackName"]||"callback";c=u+"_json"+ ++t;i=i||{};for(a in i){if(i.hasOwnProperty(a)){l+=n(a)+"="+n(i[a])+"&"}}f[c]=function(e){s(e);try{delete f[c]}catch(t){}return f[c]=null};o(r+l+u+"="+c);return c};a=function(e){var t;return t=e};t=0;r=void 0;u=void 0;s=void 0;f=this;e={};return{get:i,init:a}}()}).call(this)