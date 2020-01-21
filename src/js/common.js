import $ from "jquery"
import is from "is_js"
import "selectize/dist/js/selectize.min.js"
import "slick-carousel"
import Swiper from "swiper/dist/js/swiper.js";

import "./standart-page.js"

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


	$(".head__bot .head-menu, .head__top .head-menu, .soc ").clone().appendTo(".mobile-menu");


	if ($(".statistic__num").length){
		$(".statistic__num").countTo();
	}

	$(window).on('scroll', function(){
		if ($(".statistic__num").length)
			if ($(".statistic__num").offset().top + 50 <=
				$(window).scrollTop() + $(window).height()){
					$(".statistic__num:not(.countered)").each((i, el) => {
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

	
	$('.accordion__item-top').click(function(){
		let $this = $(this);

		$this.toggleClass('js__open');
		$this.siblings('.accordion__item-bot').slideToggle();
	})

	



	
	$('.burger').click(function(){
		$('body').toggleClass('js__menu--open');
	})

	$('.law-practice__slider').slick({
		infinite: true,
		slidesToShow: 2,
		autoplay: true,
		autoplaySpeed: 5000,
		slidesToScroll: 2,
		appendArrows: $('.law-practice-arrow'),
		responsive: [
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.partners-slider').slick({
		infinite: true,
		slidesToShow: 4,
		autoplay: true,
		autoplaySpeed: 3000,
		slidesToScroll: 1,
		appendArrows: $('.partners-arrow'),
		responsive: [
			{
				breakpoint: 1000,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 2
				}
			}
		]
	});

	$('.advantages__list').slick({
		slidesToShow: 3,
		// appendArrows: $('.advantages-arrow'),
		autoplay: true,
		autoplaySpeed: 4000,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	$('.standart-slider__list').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		appendArrows: $('.standart-slider__arrow'),
	});

	




	if (!is.touchDevice()){
		window.selectizeOpen = false;

		$("select:not(.not-selectize)").selectize({
			 // onInitialize: function() {
		  //       this.$control_input.attr('readonly', true);
		  //    },
			create: true,
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
	});

	widthAdvantage();
})

$(window).on("load resize", e => {
	widthAdvantage();
});

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



function widthAdvantage(){
		var advantagesItemWidth =  $('.advantages__item').outerWidth();

		$('.advantages__top').css({
			"width": advantagesItemWidth,
		})

	}