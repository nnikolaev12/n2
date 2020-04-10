(function($) {
	"use strict"

	///////////////////////////
	// Preloader
	$(window).on('load', function() {
		$("#preloader").delay(500).fadeOut();
	});
	///////////////////////////

	///////////////////////////
	// Smooth scroll
	$(".top-nav ul li a[href^='#'] , .scroll-down a").on('click', function(e) {
		e.preventDefault();
		var hash = this.hash;
		$('html, body').animate({
			scrollTop: $(this.hash).offset().top
			}, 800, function(){
		});
	  });
	///////////////////////////

	///////////////////////////
	// collapse nav button
	$('.nav-ham').on('click', function() {
		$('body').toggleClass('open');
	});
	///////////////////////////

	///////////////////////////
	// magnificPopup
	$('#portfolio-grid').magnificPopup({
		delegate: '.lightbox',
		type: 'image',
		showCloseBtn: false,
		gallery: {
		  enabled: true,
		  navigateByImgClick: false,
		  arrowMarkup: '<button title="%title%" type="button" class="mfp-custom-arrow mfp-custom-%dir% icon-btn"><i class="fa fa-long-arrow-%dir%"></button>',
		},
		callbacks: {
		  buildControls: function() {
			$('<div class="mfp-custom"></div>').appendTo(this.contentContainer).append(this.arrowLeft.add('<button class="mfp-custom-arrow mfp-close icon-btn" type="button">&#10006</button>').add(this.arrowRight));
		  }
		}
	});
	///////////////////////////

	///////////////////////////
	// animated heading
	var duration = 2000;
	var animatedText = $('.animated-text');
	var firstWord = animatedText.children().eq(0);
	firstWord.addClass('active');

	function animateText() {
		var currentActive = animatedText.find('.active').eq(0);
		setTimeout(function () {
			if ( currentActive.is(':last-child') ) {
				var nextWord = firstWord;
			} else {
				var nextWord = currentActive.next();
			}
			currentActive.removeClass('active');
			nextWord.addClass('active');
			animateText();
		}, duration);
	  }
	animateText();
	///////////////////////////

	///////////////////////////
	// parallax scroll
	new WOW().init();
	///////////////////////////

})(jQuery);
