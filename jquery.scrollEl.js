/*!
 * jquery.scrollEl.js v1.0
 * jQuery 滚动元素插件
 * ver:1.0
 * author: onc4hy
 * email:onc4hy@gmail.com
 * date:2012-6-5
 * http://github.com/hiwiki/jquery-scrollEl.git
 *
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Usage:
    $(".scrollToThis").scrollEl();
 
    $(".scrollToThis").scrollEl({
 			offsetTop:40
    });

    $(".scrollToTop").scrollEl({
 			offsetTop:40,
 			mode:'toTop'
    });
 */
 
(function($) {

	$.fn.scrollEl = function(options) {

			var defaults  = {
				event: "click", //事件类型，其他可选参数如：mouseover
				mode: "scrollToThis",//滚动类型，其他可选参数有：scrollToTop,scrollToPosition
				offsetTop:0,//纵座标偏移位置
				offsetLeft:0,//横座标偏移位置
				positionTop:0,//要滚动到的位置纵座标位置
				positionLeft:0,//要滚动到的位置纵座标位置
				speed:200,//速度,以毫秒为单位
				easing:'linear',//擦除效果,可选参数有:'linear','swing'
				callback:null//滚动时的回调函数
			};

			var settings = $.extend({}, defaults, options || {});

			return this.each(function() {
				$(this).bind(settings.event,function(e) {
					if (settings.mode == "scrollToThis") {
						positionTop = parseInt($(this).offset().top) - settings.offsetTop;
						positionLeft = parseInt($(this).offset().left) - settings.offsetLeft;
					}else if (settings.mode == "scrollToTop") {
						positionTop = 0 - settings.offsetTop;
						positionLeft = 0 - settings.offsetLeft;
					}else if (settings.mode == "scrollToPostion") {
						postionTop = parseInt(settings.positionTop) - settings.offsetTop;
						positionLeft = parseInt(settings.positionLeft) - settings.offsetLeft;
					}
					$("html,body").animate({scrollTop:positionTop,scrollLeft:positionLeft},settings.speed,settings.easing,settings.callback);
				});
			});

	};
	
	function debug(message){
		if (window.console && window.console.log) {
			window.console.log(message);
		}
	};

})(jQuery);
