import $ from "jquery"
import is from "is_js"
import "selectize/dist/js/selectize.min.js"
import "slick-carousel"
import Swiper from "swiper/dist/js/swiper.js";

import "./tabs.js"
import "./forms.js"


window.$ = $;
window.jQuery = $;

require("./countTo.js");
require("./jquery.fancybox.js")
require("./jquery.menu-aim.js")

require("swiper/dist/css/swiper.min.css")
require("slick-carousel/slick/slick.css")
if (!is.touchDevice())
	require("selectize/dist/css/selectize.css")
require("../css/jquery.fancybox.css")


let scrollTimeout;

document.addEventListener("DOMContentLoaded", e => {


	$("body").on("change", ".forms__input-calendar input", function(e){

		var inputHasFile = $(this).val();

		if(inputHasFile.length){
			$(this).closest('.forms__input-calendar').addClass('js__have-content');
		}

	});



	
	







	if ($(".security-stat__num").length){
		$(".security-stat__num").countTo();
	}

	// setTimeout(function(){
		$('.banner-logo').addClass('js__animated')

	// }, 2300)



	$(window).on('scroll', function(){
		if ($(".security-stat__num").length)
			if ($(".security-stat__num").offset().top + 50 <=
				$(window).scrollTop() + $(window).height()){
					$(".security-stat__num:not(.countered)").each((i, el) => {
						let $this = $(el),
							speed = 0;

						switch (i){
							case 0:
								speed = 4000;
							break;
							case 1:
								speed = 2000;
							break;

							default:
								speed = 3000;
						}

						$this.countTo({
							speed: speed,
						});

						$this.addClass("countered");
					});
			}
		
	})
	
	$(".fancybox").fancybox({
		animationEffect: false,
		trapFocus: false,
		touch: false,
		buttons: ["fullscreen", "slideShow", "close"],
		keyboard: false,
		modal: false,
		beforeClose(instance, slide){

		}
	})

	


	



	
	$('.burger').click(function(){
		$('body').toggleClass('js__menu--open');
	})



	


	

	if (!is.touchDevice()){
		window.selectizeOpen = false;

		$("select:not(.not-selectize)").selectize({
			onDropdownOpen(){
				window.selectizeOpen = true;

				if (window.fullpage)
					window.fullpage.setAllowScrolling(false)
			},
			onDropdownClose(){
				window.selectizeOpen = false;

				if (window.fullpage)
					window.fullpage.setAllowScrolling(true)
			}
		})
	}

	
	$("body").on("click", e => {
		let $target = $(e.target),
			$burger = $(".head__burger"),
			$menu = $(".head__menu");

		if (window.matchMedia("screen and (max-width: 1300px)").matches)
			if (!$burger.has($target).length
				&& !$burger.is($target)
				&& !$menu.has($target).length
				&& !$menu.is($target))
			{
				document.querySelector(".burger").classList.remove("active")

				document.querySelector(".head__menu").classList.remove("js__opened")

				window.mainMenuOpened = false;
			}
	})
})

$(window).on("load scroll resize", e => {




	if ($(window).scrollTop() >= 800){
		$(".head").addClass("js__scrolled");
		$("body").addClass("js__scroll");
		setTimeout(e => {
			$(".head").addClass("js__show")
		}, 500);
	}else{
		$(".head").removeClass("js__scrolled").removeClass("js__show");
		$("body").removeClass("js__scroll");
	}

});



