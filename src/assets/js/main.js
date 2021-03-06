jQuery(document).ready(function ($) {

	// jQuery sticky Menu

	$(".mainmenu-area").sticky({ topSpacing: 0 });



	$(document).ready(function () {
		$('.owl-carousel').owlCarousel({
			loop: true,
			margin: 10,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					nav: true
				},
				600: {
					items: 3,
					nav: false
				},
				1000: {
					items: 5,
					nav: true,
					loop: false,
					margin: 20
				}
			}
		})
	})

	/* 	owl.on('mousewheel', '.owl-stage', function (e) {
			if (e.deltaY > 0) {
				owl.trigger('next.owl');
			} else {
				owl.trigger('prev.owl');
			}
			e.preventDefault();
		}); */


	$('.product-carousel').owlCarousel({
		loop: true,
		nav: true,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 3,
			},
			1000: {
				items: 5,
			}
		}
	});

	$('.related-products-carousel').owlCarousel({
		loop: true,
		nav: true,
		margin: 20,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 2,
			},
			1000: {
				items: 2,
			},
			1200: {
				items: 3,
			}
		}
	});

	/* 	$('.brand-list').owlCarousel({
			loop: true,
			nav: true,
			margin: 20,
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
				},
				600: {
					items: 3,
				},
				1000: {
					items: 4,
				}
			}
		}); */

	var owl = $('.brand-list');
	owl.owlCarousel({
		items: 4,
		loop: true,
		margin: 10,
		autoplay: true,
		autoplayTimeout: 1000,
		autoplayHoverPause: true
	});
	$('.play').on('click', function () {
		owl.trigger('play.owl.autoplay', [1000])
	})
	$('.stop').on('click', function () {
		owl.trigger('stop.owl.autoplay')
	})


	// Bootstrap Mobile Menu fix
	$(".navbar-nav li a").click(function () {
		$(".navbar-collapse").removeClass('in');
	});

	// jQuery Scroll effect
	$('.navbar-nav li a, .scroll-to-up').bind('click', function (event) {
		var $anchor = $(this);
		var headerH = $('.header-area').outerHeight();
		$('html, body').stop().animate({
			scrollTop: $($anchor.attr('href')).offset().top - headerH + "px"
		}, 1200, 'easeInOutExpo');

		event.preventDefault();
	});

	// Bootstrap ScrollPSY
	$('body').scrollspy({
		target: '.navbar-collapse',
		offset: 95
	})
});


/*
ga('create', 'UA-10146041-21', 'auto');
ga('send', 'pageview');

 */