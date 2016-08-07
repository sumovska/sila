// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function() {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});
    while (length--) {
        method = methods[length];
        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());


!function(){"use strict";function a(b,d){function e(a,b){return function(){return a.apply(b,arguments)}}var f;if(d=d||{},this.trackingClick=!1,this.trackingClickStart=0,this.targetElement=null,this.touchStartX=0,this.touchStartY=0,this.lastTouchIdentifier=0,this.touchBoundary=d.touchBoundary||10,this.layer=b,this.tapDelay=d.tapDelay||200,this.tapTimeout=d.tapTimeout||700,!a.notNeeded(b)){for(var g=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"],h=this,i=0,j=g.length;i<j;i++)h[g[i]]=e(h[g[i]],h);c&&(b.addEventListener("mouseover",this.onMouse,!0),b.addEventListener("mousedown",this.onMouse,!0),b.addEventListener("mouseup",this.onMouse,!0)),b.addEventListener("click",this.onClick,!0),b.addEventListener("touchstart",this.onTouchStart,!1),b.addEventListener("touchmove",this.onTouchMove,!1),b.addEventListener("touchend",this.onTouchEnd,!1),b.addEventListener("touchcancel",this.onTouchCancel,!1),Event.prototype.stopImmediatePropagation||(b.removeEventListener=function(a,c,d){var e=Node.prototype.removeEventListener;"click"===a?e.call(b,a,c.hijacked||c,d):e.call(b,a,c,d)},b.addEventListener=function(a,c,d){var e=Node.prototype.addEventListener;"click"===a?e.call(b,a,c.hijacked||(c.hijacked=function(a){a.propagationStopped||c(a)}),d):e.call(b,a,c,d)}),"function"==typeof b.onclick&&(f=b.onclick,b.addEventListener("click",function(a){f(a)},!1),b.onclick=null)}}var b=navigator.userAgent.indexOf("Windows Phone")>=0,c=navigator.userAgent.indexOf("Android")>0&&!b,d=/iP(ad|hone|od)/.test(navigator.userAgent)&&!b,e=d&&/OS 4_\d(_\d)?/.test(navigator.userAgent),f=d&&/OS [6-7]_\d/.test(navigator.userAgent),g=navigator.userAgent.indexOf("BB10")>0;a.prototype.needsClick=function(a){switch(a.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(a.disabled)return!0;break;case"input":if(d&&"file"===a.type||a.disabled)return!0;break;case"label":case"iframe":case"video":return!0}return/\bneedsclick\b/.test(a.className)},a.prototype.needsFocus=function(a){switch(a.nodeName.toLowerCase()){case"textarea":return!0;case"select":return!c;case"input":switch(a.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return!1}return!a.disabled&&!a.readOnly;default:return/\bneedsfocus\b/.test(a.className)}},a.prototype.sendClick=function(a,b){var c,d;document.activeElement&&document.activeElement!==a&&document.activeElement.blur(),d=b.changedTouches[0],c=document.createEvent("MouseEvents"),c.initMouseEvent(this.determineEventType(a),!0,!0,window,1,d.screenX,d.screenY,d.clientX,d.clientY,!1,!1,!1,!1,0,null),c.forwardedTouchEvent=!0,a.dispatchEvent(c)},a.prototype.determineEventType=function(a){return c&&"select"===a.tagName.toLowerCase()?"mousedown":"click"},a.prototype.focus=function(a){var b;d&&a.setSelectionRange&&0!==a.type.indexOf("date")&&"time"!==a.type&&"month"!==a.type?(b=a.value.length,a.setSelectionRange(b,b)):a.focus()},a.prototype.updateScrollParent=function(a){var b,c;if(b=a.fastClickScrollParent,!b||!b.contains(a)){c=a;do{if(c.scrollHeight>c.offsetHeight){b=c,a.fastClickScrollParent=c;break}c=c.parentElement}while(c)}b&&(b.fastClickLastScrollTop=b.scrollTop)},a.prototype.getTargetElementFromEventTarget=function(a){return a.nodeType===Node.TEXT_NODE?a.parentNode:a},a.prototype.onTouchStart=function(a){var b,c,f;if(a.targetTouches.length>1)return!0;if(b=this.getTargetElementFromEventTarget(a.target),c=a.targetTouches[0],d){if(f=window.getSelection(),f.rangeCount&&!f.isCollapsed)return!0;if(!e){if(c.identifier&&c.identifier===this.lastTouchIdentifier)return a.preventDefault(),!1;this.lastTouchIdentifier=c.identifier,this.updateScrollParent(b)}}return this.trackingClick=!0,this.trackingClickStart=a.timeStamp,this.targetElement=b,this.touchStartX=c.pageX,this.touchStartY=c.pageY,a.timeStamp-this.lastClickTime<this.tapDelay&&a.preventDefault(),!0},a.prototype.touchHasMoved=function(a){var b=a.changedTouches[0],c=this.touchBoundary;return Math.abs(b.pageX-this.touchStartX)>c||Math.abs(b.pageY-this.touchStartY)>c},a.prototype.onTouchMove=function(a){return!this.trackingClick||((this.targetElement!==this.getTargetElementFromEventTarget(a.target)||this.touchHasMoved(a))&&(this.trackingClick=!1,this.targetElement=null),!0)},a.prototype.findControl=function(a){return void 0!==a.control?a.control:a.htmlFor?document.getElementById(a.htmlFor):a.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")},a.prototype.onTouchEnd=function(a){var b,g,h,i,j,k=this.targetElement;if(!this.trackingClick)return!0;if(a.timeStamp-this.lastClickTime<this.tapDelay)return this.cancelNextClick=!0,!0;if(a.timeStamp-this.trackingClickStart>this.tapTimeout)return!0;if(this.cancelNextClick=!1,this.lastClickTime=a.timeStamp,g=this.trackingClickStart,this.trackingClick=!1,this.trackingClickStart=0,f&&(j=a.changedTouches[0],k=document.elementFromPoint(j.pageX-window.pageXOffset,j.pageY-window.pageYOffset)||k,k.fastClickScrollParent=this.targetElement.fastClickScrollParent),h=k.tagName.toLowerCase(),"label"===h){if(b=this.findControl(k)){if(this.focus(k),c)return!1;k=b}}else if(this.needsFocus(k))return a.timeStamp-g>100||d&&window.top!==window&&"input"===h?(this.targetElement=null,!1):(this.focus(k),this.sendClick(k,a),d&&"select"===h||(this.targetElement=null,a.preventDefault()),!1);return!(!d||e||(i=k.fastClickScrollParent,!i||i.fastClickLastScrollTop===i.scrollTop))||(this.needsClick(k)||(a.preventDefault(),this.sendClick(k,a)),!1)},a.prototype.onTouchCancel=function(){this.trackingClick=!1,this.targetElement=null},a.prototype.onMouse=function(a){return!this.targetElement||(!!a.forwardedTouchEvent||(!a.cancelable||(!(!this.needsClick(this.targetElement)||this.cancelNextClick)||(a.stopImmediatePropagation?a.stopImmediatePropagation():a.propagationStopped=!0,a.stopPropagation(),a.preventDefault(),!1))))},a.prototype.onClick=function(a){var b;return this.trackingClick?(this.targetElement=null,this.trackingClick=!1,!0):"submit"===a.target.type&&0===a.detail||(b=this.onMouse(a),b||(this.targetElement=null),b)},a.prototype.destroy=function(){var a=this.layer;c&&(a.removeEventListener("mouseover",this.onMouse,!0),a.removeEventListener("mousedown",this.onMouse,!0),a.removeEventListener("mouseup",this.onMouse,!0)),a.removeEventListener("click",this.onClick,!0),a.removeEventListener("touchstart",this.onTouchStart,!1),a.removeEventListener("touchmove",this.onTouchMove,!1),a.removeEventListener("touchend",this.onTouchEnd,!1),a.removeEventListener("touchcancel",this.onTouchCancel,!1)},a.notNeeded=function(a){var b,d,e,f;if("undefined"==typeof window.ontouchstart)return!0;if(d=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1]){if(!c)return!0;if(b=document.querySelector("meta[name=viewport]")){if(b.content.indexOf("user-scalable=no")!==-1)return!0;if(d>31&&document.documentElement.scrollWidth<=window.outerWidth)return!0}}if(g&&(e=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/),e[1]>=10&&e[2]>=3&&(b=document.querySelector("meta[name=viewport]")))){if(b.content.indexOf("user-scalable=no")!==-1)return!0;if(document.documentElement.scrollWidth<=window.outerWidth)return!0}return"none"===a.style.msTouchAction||"manipulation"===a.style.touchAction||(f=+(/Firefox\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1],!!(f>=27&&(b=document.querySelector("meta[name=viewport]"),b&&(b.content.indexOf("user-scalable=no")!==-1||document.documentElement.scrollWidth<=window.outerWidth)))||("none"===a.style.touchAction||"manipulation"===a.style.touchAction))},a.attach=function(b,c){return new a(b,c)},"function"==typeof define&&"object"==typeof define.amd&&define.amd?define(function(){return a}):"undefined"!=typeof module&&module.exports?(module.exports=a.attach,module.exports.FastClick=a):window.FastClick=a}();

/*! Selectric ϟ v1.10.0 (2016-06-30) - git.io/tjl9sQ - Copyright (c) 2016 Leonardo Santos - MIT License */
!function(e){"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof module&&module.exports?module.exports=function(t,s){return void 0===s&&(s="undefined"!=typeof window?require("jquery"):require("jquery")(t)),e(s),s}:e(jQuery)}(function(e){"use strict";var t=e(document),s=e(window),i="selectric",n="Input Items Open Disabled TempShow HideSelect Wrapper Focus Hover Responsive Above Scroll Group GroupLabel",l=".sl",o=["a","e","i","o","u","n","c","y"],r=[/[\xE0-\xE5]/g,/[\xE8-\xEB]/g,/[\xEC-\xEF]/g,/[\xF2-\xF6]/g,/[\xF9-\xFC]/g,/[\xF1]/g,/[\xE7]/g,/[\xFD-\xFF]/g],a=function(t,s){var i=this;i.element=t,i.$element=e(t),i.state={enabled:!1,opened:!1,currValue:-1,selectedIdx:-1},i.eventTriggers={open:i.open,close:i.close,destroy:i.destroy,refresh:i.refresh,init:i.init},i.init(s)};a.prototype={utils:{isMobile:function(){return/android|ip(hone|od|ad)/i.test(navigator.userAgent)},escapeRegExp:function(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")},replaceDiacritics:function(e){for(var t=r.length;t--;)e=e.toLowerCase().replace(r[t],o[t]);return e},format:function(e){var t=arguments;return(""+e).replace(/\{(?:(\d+)|(\w+))\}/g,function(e,s,i){return i&&t[1]?t[1][i]:t[s]})},nextEnabledItem:function(e,t){for(;e[t=(t+1)%e.length].disabled;);return t},previousEnabledItem:function(e,t){for(;e[t=(t>0?t:e.length)-1].disabled;);return t},toDash:function(e){return e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()},triggerCallback:function(t,s){var n=s.element,l=s.options["on"+t];e.isFunction(l)&&l.call(n,n,s),e.fn[i].hooks[t]&&e.each(e.fn[i].hooks[t],function(){this.call(n,n,s)}),e(n).trigger(i+"-"+this.toDash(t),s)}},init:function(t){var s=this;if(s.options=e.extend(!0,{},e.fn[i].defaults,s.options,t),s.utils.triggerCallback("BeforeInit",s),s.destroy(!0),s.options.disableOnMobile&&s.utils.isMobile())return void(s.disableOnMobile=!0);s.classes=s.getClassNames();var n=e("<input/>",{"class":s.classes.input,readonly:s.utils.isMobile()}),l=e("<div/>",{"class":s.classes.items,tabindex:-1}),o=e("<div/>",{"class":s.classes.scroll}),r=e("<div/>",{"class":s.classes.prefix,html:s.options.arrowButtonMarkup}),a=e("<p/>",{"class":"label"}),p=s.$element.wrap("<div/>").parent().append(r.prepend(a),l,n);s.elements={input:n,items:l,itemsScroll:o,wrapper:r,label:a,outerWrapper:p},s.$element.on(s.eventTriggers).wrap('<div class="'+s.classes.hideselect+'"/>'),s.originalTabindex=s.$element.prop("tabindex"),s.$element.prop("tabindex",!1),s.populate(),s.activate(),s.utils.triggerCallback("Init",s)},activate:function(){var e=this,t=e.$element.width();e.utils.triggerCallback("BeforeActivate",e),e.elements.outerWrapper.prop("class",[e.classes.wrapper,e.$element.prop("class").replace(/\S+/g,e.classes.prefix+"-$&"),e.options.responsive?e.classes.responsive:""].join(" ")),e.options.inheritOriginalWidth&&t>0&&e.elements.outerWrapper.width(t),e.$element.prop("disabled")?(e.elements.outerWrapper.addClass(e.classes.disabled),e.elements.input.prop("disabled",!0)):(e.state.enabled=!0,e.elements.outerWrapper.removeClass(e.classes.disabled),e.$li=e.elements.items.removeAttr("style").find("li"),e.bindEvents()),e.utils.triggerCallback("Activate",e)},getClassNames:function(){var t=this,s=t.options.customClass,i={};return e.each(n.split(" "),function(e,n){var l=s.prefix+n;i[n.toLowerCase()]=s.camelCase?l:t.utils.toDash(l)}),i.prefix=s.prefix,i},setLabel:function(){var t=this,s=t.options.labelBuilder,i=t.lookupItems[t.state.currValue];t.elements.label.html(e.isFunction(s)?s(i):t.utils.format(s,i))},populate:function(){var t=this,s=t.$element.children(),i=t.$element.find("option"),n=i.index(i.filter(":selected")),l=0;t.state.currValue=t.state.selected=~n?n:0,t.state.selectedIdx=t.state.currValue,t.items=[],t.lookupItems=[],s.length&&(s.each(function(s){var i=e(this);if(i.is("optgroup")){var n={element:i,label:i.prop("label"),groupDisabled:i.prop("disabled"),items:[]};i.children().each(function(s){var i=e(this),o=i.html();n.items[s]={index:l,element:i,value:i.val(),text:o,slug:t.utils.replaceDiacritics(o),disabled:n.groupDisabled},t.lookupItems[l]=n.items[s],l++}),t.items[s]=n}else{var o=i.html();t.items[s]={index:l,element:i,value:i.val(),text:o,slug:t.utils.replaceDiacritics(o),disabled:i.prop("disabled")},t.lookupItems[l]=t.items[s],l++}}),t.setLabel(),t.elements.items.append(t.elements.itemsScroll.html(t.getItemsMarkup(t.items))))},getItemsMarkup:function(t){var s=this,i="<ul>";return e.each(t,function(t,n){void 0!==n.label?(i+=s.utils.format('<ul class="{1}"><li class="{2}">{3}</li>',e.trim([s.classes.group,n.groupDisabled?"disabled":"",n.element.prop("class")].join(" ")),s.classes.grouplabel,n.element.prop("label")),e.each(n.items,function(e,t){i+=s.getItemMarkup(t.index,t)}),i+="</ul>"):i+=s.getItemMarkup(n.index,n)}),i+"</ul>"},getItemMarkup:function(t,s){var i=this,n=i.options.optionsItemBuilder;return i.utils.format('<li data-index="{1}" class="{2}">{3}</li>',t,e.trim([t===i.state.currValue?"selected":"",t===i.items.length-1?"last":"",s.disabled?"disabled":""].join(" ")),e.isFunction(n)?n(s,s.element,t):i.utils.format(n,s))},bindEvents:function(){var t=this;t.elements.wrapper.add(t.$element).add(t.elements.outerWrapper).add(t.elements.input).off(l),t.elements.outerWrapper.on("mouseenter"+l+" mouseleave"+l,function(s){e(this).toggleClass(t.classes.hover,"mouseenter"===s.type),t.options.openOnHover&&(clearTimeout(t.closeTimer),"mouseleave"===s.type?t.closeTimer=setTimeout(e.proxy(t.close,t),t.options.hoverIntentTimeout):t.open())}),t.elements.wrapper.on("click"+l,function(e){t.state.opened?t.close():t.open(e)}),t.elements.input.prop({tabindex:t.originalTabindex,disabled:!1}).on("keydown"+l,e.proxy(t.handleKeys,t)).on("focusin"+l,function(e){t.elements.outerWrapper.addClass(t.classes.focus),t.elements.input.one("blur",function(){t.elements.input.blur()}),t.options.openOnFocus&&!t.state.opened&&t.open(e)}).on("focusout"+l,function(){t.elements.outerWrapper.removeClass(t.classes.focus)}).on("input propertychange",function(){var s=t.elements.input.val();clearTimeout(t.resetStr),t.resetStr=setTimeout(function(){t.elements.input.val("")},t.options.keySearchTimeout),s.length&&e.each(t.items,function(e,i){if(RegExp("^"+t.utils.escapeRegExp(s),"i").test(i.slug)&&!i.disabled)return t.select(e),!1})}),t.$li.on({mousedown:function(e){e.preventDefault(),e.stopPropagation()},click:function(){return t.select(e(this).data("index"),!0),!1}})},handleKeys:function(t){var s=this,i=t.keyCode||t.which,n=s.options.keys,l=e.inArray(i,n.previous)>-1,o=e.inArray(i,n.next)>-1,r=e.inArray(i,n.select)>-1,a=e.inArray(i,n.open)>-1,p=s.state.selectedIdx,u=l&&0===p||o&&p+1===s.items.length,c=0;if(13!==i&&32!==i||t.preventDefault(),l||o){if(!s.options.allowWrap&&u)return;l&&(c=s.utils.previousEnabledItem(s.items,p)),o&&(c=s.utils.nextEnabledItem(s.items,p)),s.select(c)}return r&&s.state.opened?void s.select(p,!0):void(a&&!s.state.opened&&s.open())},refresh:function(){var e=this;e.populate(),e.activate(),e.utils.triggerCallback("Refresh",e)},setOptionsDimensions:function(){var e=this,t=e.elements.items.closest(":visible").children(":hidden").addClass(e.classes.tempshow),s=e.options.maxHeight,i=e.elements.items.outerWidth(),n=e.elements.wrapper.outerWidth()-(i-e.elements.items.width());!e.options.expandToItemText||n>i?e.finalWidth=n:(e.elements.items.css("overflow","scroll"),e.elements.outerWrapper.width(9e4),e.finalWidth=e.elements.items.width(),e.elements.items.css("overflow",""),e.elements.outerWrapper.width("")),e.elements.items.width(e.finalWidth).height()>s&&e.elements.items.height(s),t.removeClass(e.classes.tempshow)},isInViewport:function(){var e=this,t=s.scrollTop(),i=s.height(),n=e.elements.outerWrapper.offset().top,l=e.elements.outerWrapper.outerHeight(),o=n+l+e.itemsHeight<=t+i,r=n-e.itemsHeight>t,a=!o&&r;e.elements.outerWrapper.toggleClass(e.classes.above,a)},detectItemVisibility:function(e){var t=this,s=t.$li.eq(e).outerHeight(),i=t.$li[e].offsetTop,n=t.elements.itemsScroll.scrollTop(),l=i+2*s;t.elements.itemsScroll.scrollTop(l>n+t.itemsHeight?l-t.itemsHeight:i-s<n?i-s:n)},open:function(s){var n=this;n.utils.triggerCallback("BeforeOpen",n),s&&(s.preventDefault(),s.stopPropagation()),n.state.enabled&&(n.setOptionsDimensions(),e("."+n.classes.hideselect,"."+n.classes.open).children()[i]("close"),n.state.opened=!0,n.itemsHeight=n.elements.items.outerHeight(),n.itemsInnerHeight=n.elements.items.height(),n.elements.outerWrapper.addClass(n.classes.open),n.elements.input.val(""),s&&"focusin"!==s.type&&n.elements.input.focus(),t.on("click"+l,e.proxy(n.close,n)).on("scroll"+l,e.proxy(n.isInViewport,n)),n.isInViewport(),n.options.preventWindowScroll&&t.on("mousewheel"+l+" DOMMouseScroll"+l,"."+n.classes.scroll,function(t){var s=t.originalEvent,i=e(this).scrollTop(),l=0;"detail"in s&&(l=s.detail*-1),"wheelDelta"in s&&(l=s.wheelDelta),"wheelDeltaY"in s&&(l=s.wheelDeltaY),"deltaY"in s&&(l=s.deltaY*-1),(i===this.scrollHeight-n.itemsInnerHeight&&l<0||0===i&&l>0)&&t.preventDefault()}),n.detectItemVisibility(n.state.selectedIdx),n.utils.triggerCallback("Open",n))},close:function(){var e=this;e.utils.triggerCallback("BeforeClose",e),e.change(),t.off(l),e.elements.outerWrapper.removeClass(e.classes.open),e.state.opened=!1,e.utils.triggerCallback("Close",e)},change:function(){var e=this;e.utils.triggerCallback("BeforeChange",e),e.state.currValue!==e.state.selectedIdx&&(e.$element.prop("selectedIndex",e.state.currValue=e.state.selectedIdx).data("value",e.lookupItems[e.state.selectedIdx].text),e.setLabel()),e.utils.triggerCallback("Change",e)},select:function(e,t){var s=this;void 0!==e&&(s.lookupItems[e].disabled||(s.$li.filter("[data-index]").removeClass("selected").eq(s.state.selectedIdx=e).addClass("selected"),s.detectItemVisibility(e),t&&s.close()))},destroy:function(e){var t=this;t.state&&t.state.enabled&&(t.elements.items.add(t.elements.wrapper).add(t.elements.input).remove(),e||t.$element.removeData(i).removeData("value"),t.$element.prop("tabindex",t.originalTabindex).off(l).off(t.eventTriggers).unwrap().unwrap(),t.state.enabled=!1)}},e.fn[i]=function(t){return this.each(function(){var s=e.data(this,i);s&&!s.disableOnMobile?"string"==typeof t&&s[t]?s[t]():s.init(t):e.data(this,i,new a(this,t))})},e.fn[i].hooks={add:function(e,t,s){this[e]||(this[e]={}),this[e][t]=s},remove:function(e,t){delete this[e][t]}},e.fn[i].defaults={onChange:function(t){e(t).change()},maxHeight:300,keySearchTimeout:500,arrowButtonMarkup:'<b class="button">&#x25be;</b>',disableOnMobile:!0,openOnFocus:!0,openOnHover:!1,hoverIntentTimeout:500,expandToItemText:!1,responsive:!1,preventWindowScroll:!0,inheritOriginalWidth:!1,allowWrap:!0,optionsItemBuilder:"{text}",labelBuilder:"{text}",keys:{previous:[37,38],next:[39,40],select:[9,13,27],open:[13,32,37,38,39,40],close:[9,27]},customClass:{prefix:i,camelCase:!1}}});