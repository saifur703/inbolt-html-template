    (function ($) {
    	"use strict";

    	jQuery(document).ready(function ($) {

    		$('.menu-trigger').on('click', function () {
    			$('.mobile-menu').slideToggle();
    		});

    		// About Slider
    		$(".about-slider-box").owlCarousel({
    			items: 1,
    			nav: false,
    			dots: true,
    			navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
    			autoplay: true,
    			loop: true,
    			margin: 0,
    		});

    		// Blog Slider
    		$(".feedback-slider").owlCarousel({
    			items: 3,
    			margin: 30,
    			nav: true,
    			dots: true,
    			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    			autoplay: false,
    			loop: true,
    			responsive: {
    				0: {
    					items: 1,
    				},
    				480: {
    					items: 1,
    				},
    				768: {
    					items: 2
    				},
    				992: {
    					items: 3
    				},
    				1200: {
    					items: 3
    				}

    			}
    		});

    		// Blog Slider
    		$(".blog-slider").owlCarousel({
    			items: 3,
    			nav: true,
    			dots: true,
    			navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    			autoplay: false,
    			loop: true,
    			responsive: {
    				0: {
    					items: 1,
    				},
    				480: {
    					items: 1,
    				},
    				768: {
    					items: 2
    				},
    				992: {
    					items: 3
    				},
    				1200: {
    					items: 3
    				}

    			}
    		});




    		$('p > img').unwrap();
    		$('p > a').unwrap();


    	});


    	jQuery(window).on("load", function () {
    		// code
    	});

    })(jQuery);