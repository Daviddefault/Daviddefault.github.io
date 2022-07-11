const html = document.querySelector("html"); 

html.classList.add("bg-dark");

// darkmode switch
document.querySelector("input").addEventListener("change", (event) => {
	bgSwitch(event);
});

const bgSwitch = (event) => {
  if (event.target.checked) {
		html.classList.add("bg-dark");
	} else {
		html.classList.remove("bg-dark");
	}
}






(function($) { "use strict";

$(function() {
	var header = $(".start-style");
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
	
		if (scroll >= 10) {
			header.removeClass('start-style').addClass("scroll-on");
		} else {
			header.removeClass("scroll-on").addClass('start-style');
		}
	});
});		
	
//Animation

$(document).ready(function() {
	$('body.hero-anime').removeClass('hero-anime');
});

//Menu On Hover
	
$('body').on('mouseenter mouseleave','.nav-item',function(e){
		if ($(window).width() > 750) {
			var _d=$(e.target).closest('.nav-item');_d.addClass('show');
			setTimeout(function(){
			_d[_d.is(':hover')?'addClass':'removeClass']('show');
			},1);
		}
});	



})(jQuery);

