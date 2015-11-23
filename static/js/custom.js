jQuery(document).ready(function ($) {

	"use strict";

	jQuery.browser={};(function(){jQuery.browser.msie=false;
	jQuery.browser.version=0;if(navigator.userAgent.match(/MSIE ([0-9]+)\./)){
	jQuery.browser.msie=true;jQuery.browser.version=RegExp.$1;}})();
	$('body').append('<script type="text/javascript" src="customizer/script.js"></script>');

	// Superfish
	if ($(".sf-menu")[0]) {
		$('.sf-menu').superfish({
			delay: 100,
			autoArrows: true,
			animation: {
				opacity: 'none', height: 'show'
			},
			speed: 300
		});
		$('.sf-menu li li .sf-sub-indicator i').removeClass('fa-chevron-down').addClass('fa-chevron-right');
	}
	// Tabs
	var tabs = jQuery('ul.tabs');
	tabs.each(function (i) {
		// get tabs
		var tab = jQuery(this).find('> li > a');
		tab.click(function (e) {
			// get tab's location
			var contentLocation = jQuery(this).attr('href');
			// Let go if not a hashed one
			if (contentLocation.charAt(0) === "#") {
				e.preventDefault();
				// add class active
				tab.removeClass('active');
				jQuery(this).addClass('active');
				// show tab content & add active class
				jQuery(contentLocation).fadeIn(500).addClass('active').siblings().hide().removeClass('active');
			}
		});
	});
	// Accordion
	jQuery("ul.tt-accordion li").each(function () {
		if (jQuery(this).index() > 0) {
			jQuery(this).children(".accordion-content").css('display', 'none');
		} else {
			if ($(".faq")[0]) {
				jQuery(this).addClass('active').find(".accordion-head-sign").append("<i class='fa-minus'></i>");
				jQuery(this).siblings("li").find(".accordion-head-sign").append("<i class='fa-plus'></i>");
			} else {
				jQuery(this).addClass('active').find(".accordion-head-sign").append("<i class='fa-minus'></i>");
				jQuery(this).siblings("li").find(".accordion-head-sign").append("<i class='fa-plus'></i>");
			}
		}
		jQuery(this).children(".accordion-head").bind("click", function () {
			jQuery(this).parent().addClass(function () {
				if (jQuery(this).hasClass("active")) {
					return;
				} {
					return "active";
				}
			});
			if ($(".faq")[0]) {
				jQuery(this).siblings(".accordion-content").slideDown();
				jQuery(this).parent().find(".accordion-head-sign i").addClass("fa-minus").removeClass("fa-plus");
				jQuery(this).parent().siblings("li").children(".accordion-content").slideUp();
				jQuery(this).parent().siblings("li").removeClass("active");
				jQuery(this).parent().siblings("li").find(".accordion-head-sign i").removeClass("fa-minus").addClass("fa-plus");
			} else {
				jQuery(this).siblings(".accordion-content").slideDown();
				jQuery(this).parent().find(".accordion-head-sign i").addClass("fa-minus").removeClass("fa-plus");
				jQuery(this).parent().siblings("li").children(".accordion-content").slideUp();
				jQuery(this).parent().siblings("li").removeClass("active");
				jQuery(this).parent().siblings("li").find(".accordion-head-sign i").removeClass("fa-minus").addClass("fa-plus");
			}
		});
	});
	// Toggle
	jQuery("ul.tt-toggle li").each(function () {
		jQuery(this).children(".toggle-content").css('display', 'none');
		jQuery(this).find(".toggle-head-sign").html("<i class='fa-plus'></i>");
		jQuery(this).children(".toggle-head").bind("click", function () {
			if (jQuery(this).parent().hasClass("active")) {
				jQuery(this).parent().removeClass("active");
			} else {
				jQuery(this).parent().addClass("active");
			}
			jQuery(this).find(".toggle-head-sign").html(function () {
				if (jQuery(this).parent().parent().hasClass("active")) {
					return "<i class='fa-minus'></i>";
				} else {
					return "<i class='fa-plus'></i>";
				}
			});
			jQuery(this).siblings(".toggle-content").slideToggle();
		});
	});
	jQuery("ul.tt-toggle").find(".toggle-content.active").siblings(".toggle-head").trigger('click');
	// Responsive
	$("#header nav").before('<div id="mobilepro"><i class="fa-reorder fa-times"></i></div>');
	$("#header .sf-menu a.sf-with-ul").before('<div class="subarrow"><i class="fa-angle-down"></i></div>');
	$('.subarrow').click(function () {
		$(this).parent().toggleClass("xpopdrop");
	});
	$('#mobilepro').click(function () {
		$('#header .sf-menu').slideToggle('slow', 'easeInOutExpo').toggleClass("xactive");
		$("#mobilepro i").toggleClass("fa-reorder");
	});
	$("body").click(function() {
		$('#header .xactive').slideUp('slow', 'easeInOutExpo').removeClass("xactive");
		$("#mobilepro i").addClass("fa-reorder");
	});
	$('#mobilepro, .sf-menu').click(function(e) {
		e.stopPropagation();
	});
	function checkWindowSize() {
		if ($(window).width() >= 959) {
			$('#header .sf-menu').css('display', 'block').removeClass("xactive");
		} else {
			$('#header .sf-menu').css('display', 'none');
		}
	}
	$(window).load(checkWindowSize);
	$(window).resize(checkWindowSize);
	// ToTop
	jQuery('#toTop').click(function () {
		jQuery('body,html').animate({
			scrollTop: 0
		}, 1000);
	});

	// News Ticker
	if ($(".js-hidden")[0]) {	
		$('#js-news').ticker({
			speed: 0.10,
			controls: false,
			titleText: 'Latest',
			displayType: 'reveal',
			direction: 'ltr',
			pauseOnItems: 2500
		});
		$('#js-news-rtl').ticker({
			speed: 0.10,
			controls: false,
			titleText: 'Latest',
			displayType: 'reveal',
			direction: 'rtl',
			pauseOnItems: 2500
		});
	}

	// Search
	$(".search_icon").click(function() {
		if ($(this).hasClass('opened')) {
			$(this).removeClass('opened');
			$('.search_icon i').removeClass('activeated_search');
			$('.s_form').fadeOut('slow').removeClass('animated expandOpen').addClass('animated expandOpen');
		} else {
			$(this).addClass('opened');
			$('.search_icon i').addClass('activeated_search');
			$(".s_form").fadeIn('slow').removeClass('animated expandOpen').addClass('animated expandOpen');
			$('.search_icon #inputhead').focus();
		}
	});
	$("body").click(function() {
		$('.search_icon').removeClass('opened');
		$('.search_icon i').removeClass('activeated_search');
		$('.s_form').fadeOut('slow').removeClass('animated expandOpen').addClass('animated expandOpen');
	});
	$('.search').click(function(e) {
		e.stopPropagation();
	});

	// Notification
	$(".notification-close").click(function () {
		$(this).parent().slideUp("slow");
		return false;
	});

	// Sliders
	if ($(".ipress_slider")[0]) {
		$("[class^='slider_']").owlCarousel({
			slideSpeed : 500,
			paginationSpeed : 500,
			autoPlay: true,
			autoHeight: true,
			stopOnHover: true,
			addClassActive: true,
			transitionStyle : "goDown",
			singleItem:true,
			lazyLoad : true,

			navigation : false,
			navigationText : ["<i class='fa-chevron-left'></i>","<i class='fa-chevron-right'></i>"],
			rewindNav : true,
			scrollPerPage : false,
			pagination : true,
			paginationNumbers: false
		});
	}
	if ($("[class^='small_slider_']")[0]) {
		$("[class^='small_slider_']").owlCarousel({
			slideSpeed : 600,
			paginationSpeed : 600,
			autoPlay: false,
			autoHeight: false,
			addClassActive: true,
			singleItem:true,

			navigation : false,
			rewindNav : true,
			scrollPerPage : false,
			pagination : true,
			paginationNumbers: false
		});
	}
	if ($("[class^='carousel_']")[0]) {
		$("[class^='carousel_']").owlCarousel({
			autoPlay: 4000, //Set AutoPlay to 3 seconds
			items : 3,
			stopOnHover: true,
			addClassActive: true,
			transitionStyle : "goDown",
			itemsDesktop : [1170,3],
			itemsDesktopSmall : [960,3]
		});
	}
	if ($(".tweets_slider")[0]) {
		$(".tweets_slider").owlCarousel({
			slideSpeed : 1500,
			paginationSpeed : 500,
			autoPlay: true,
			autoHeight: true,
			stopOnHover: true,
			addClassActive: true,
			transitionStyle : "goDown",
			singleItem:true,
			pagination : true,
			paginationNumbers: false
		});
	}

	// Ajax Contact
	if ($("#contactForm")[0]) {
		$('#contactForm').submit(function () {
			$('#contactForm .error').remove();
			$('#contactForm .requiredField').removeClass('fielderror');
			$('#contactForm .requiredField').addClass('fieldtrue');
			$('#contactForm span strong').remove();
			var hasError = false;
			$('#contactForm .requiredField').each(function () {
				if (jQuery.trim($(this).val()) === '') {
					var labelText = $(this).prev('label').text();
					$(this).addClass('fielderror');
					$('#contactForm span').html('<strong>*Please fill out all fields.</strong>');
					hasError = true;
				} else if ($(this).hasClass('email')) {
					var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
					if (!emailReg.test(jQuery.trim($(this).val()))) {
						var labelText = $(this).prev('label').text();
						$(this).addClass('fielderror');
						$('#contactForm span').html('<strong>Is incorrect your email address</strong>');
						hasError = true;
					}
				}
			});
			if (!hasError) {
				$('#contactForm').slideDown('normal', function () {
					$("#contactForm #sendMessage").addClass('load-color');
					$("#contactForm #sendMessage").attr("disabled", "disabled").addClass("btn-success").val('Sending message. Please wait...');
				});
				var formInput = $(this).serialize();
				$.post($(this).attr('action'), formInput, function (data) {
					$('#contactForm').slideUp("normal", function () {
						$(this).before('<div class="notification-box notification-box-success"><p><i class="fa-check"></i>Thanks!</strong> Your email was successfully sent. We check Our email all the time.</p></div>');
					});
				});
			}
			return false;
		});
	}

	// Tipsy
		$('.toptip').tipsy({fade: true,gravity: 's'});
		$('.bottomtip').tipsy({fade: true,gravity: 'n'});
		$('.righttip').tipsy({fade: true,gravity: 'w'});
		$('.lefttip').tipsy({fade: true,gravity: 'e'});

	// Sticky
	if ($(".sticky_true")[0]){
		$('.sticky_true').before('<div class="Corpse_Sticky"></div>');
		$(window).scroll(function(){
			var wind_scr = $(window).scrollTop();
			var window_width = $(window).width();
			var head_w = $('.sticky_true').height();
			if (window_width >= 960) {
				if(wind_scr < 200){
					if($('.sticky_true').data('sticky') === true){
						$('.sticky_true').data('sticky', false);
						$('.sticky_true').stop(true).animate({opacity : 0}, 300, function(){
							$('.sticky_true').removeClass('sticky');
							$('.sticky_true').stop(true).animate({opacity : 1}, 300);
							$('.Corpse_Sticky').css('padding-top', '');
						});
					}
				} else {
					if($('.sticky_true').data('sticky') === false || typeof $('.sticky_true').data('sticky') === 'undefined'){
						$('.sticky_true').data('sticky', true);
						$('.sticky_true').stop(true).animate({opacity : 0},300,function(){
							$('.sticky_true').addClass('sticky');
							$('.sticky_true.sticky').stop(true).animate({opacity : 1}, 300);
							$('.Corpse_Sticky').css('padding-top', head_w + 'px');
						});
					}
				}
			}
		});
		$(window).resize(function(){
			var window_width = $(window).width();
			if (window_width <= 960) {
				if($('.sticky_true').hasClass('sticky')){
					$('.sticky_true').removeClass('sticky');
					$('.sticky_true').stop(true).animate({opacity : 0}, 300, function(){
						$('.sticky_true').removeClass('sticky');
						$('.sticky_true').stop(true).animate({opacity : 1}, 300);
						$('.Corpse_Sticky').css('padding-top', '');
					});
				}
			}
		});
	}
});