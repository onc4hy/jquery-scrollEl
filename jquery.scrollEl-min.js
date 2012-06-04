/*!
 * jquery.scrollEl.js v1.0
 * author: onc4hy
 * email:onc4hy@gmail.com
 * date:2012-6-5
 * http://github.com/hiwiki/jquery-scrollEl.git
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
 
(function($){$.fn.scrollEl=function(options){var defaults={event:"click",mode:"toThis",offsetTop:0,offsetLeft:0,positionTop:0,positionLeft:0,speed:200,easing:'linear',callback:null};var settings=$.extend({},defaults,options||{});return this.each(function(){$(this).bind(settings.event,function(e){if(settings.mode=="toThis"){positionTop=parseInt($(this).offset().top)-settings.offsetTop;positionLeft=parseInt($(this).offset().left)-settings.offsetLeft}else if(settings.mode=="toTop"){positionTop=0-settings.offsetTop;positionLeft=0-settings.offsetLeft}else if(settings.mode=="toPostion"){postionTop=parseInt(settings.positionTop)-settings.offsetTop;positionLeft=parseInt(settings.positionLeft)-settings.offsetLeft}$("html,body").animate({scrollTop:positionTop,scrollLeft:positionLeft},settings.speed,settings.easing,settings.callback)})})};function debug(message){if(window.console&&window.console.log){window.console.log(message)}}})(jQuery);