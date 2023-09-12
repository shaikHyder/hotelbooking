// Initialize Firebase with your project's config
const firebaseConfig = {
  apiKey: "AIzaSyC6gjp_NWGTUwXTn-PqdM1Zb8arYjnuUDY",
  authDomain: "fir-contact-ce412.firebaseapp.com",
  databaseURL: "https://fir-contact-ce412-default-rtdb.firebaseio.com",
  projectId: "fir-contact-ce412",
  storageBucket: "fir-contact-ce412.appspot.com",
  messagingSenderId: "197798242228",
  appId: "1:197798242228:web:6e8adaf76e7a229ff674e1",
  measurementId: "G-E1F9GETNLP"
};

firebase.initializeApp(firebaseConfig);

// Reference to your Firebase Realtime Database
var database = firebase.database();
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var arrivalDate = $("#arrival_date").val();
    var departureDate = $("#departure_date").val();
    var room = $("#room").val();
    var guests = $("#guests").val();
    var email = $("#email").val();
    var message = $("#message").val();

    if (!arrivalDate || !departureDate || !room || !guests || !email) {
      alert("Please fill in all required fields.");
      return;
    }

    // Create an object to store form data
    var formData = {
      arrivalDate: arrivalDate,
      departureDate: departureDate,
      room: room,
      guests: guests,
      email: email,
      message: message
    };

    // Push form data to Firebase Realtime Database
    var reservationsRef = database.ref("reservations");
    reservationsRef.push(formData)
      .then(function() {
        alert("Reservation successful! Thank you.");
        // You can redirect the user or perform other actions here
      })
      .catch(function(error) {
        alert("Error processing your reservation. Please try again later.");
        console.error("Error adding reservation: ", error);
      });
  });
});













(function($) {

	'use strict';

	// bootstrap dropdown hover

  // loader
  var loader = function() {
    setTimeout(function() { 
      if($('#loader').length > 0) {
        $('#loader').removeClass('show');
      }
    }, 1);
  };
  loader();

  // Stellar
  $(window).stellar();

	
	$('nav .dropdown').hover(function(){
		var $this = $(this);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		$this.find('.dropdown-menu').addClass('show');
	}, function(){
		var $this = $(this);
			$this.removeClass('show');
			$this.find('> a').attr('aria-expanded', false);
			$this.find('.dropdown-menu').removeClass('show');
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
	  console.log('show');
	});



	// home slider
	$('.home-slider').owlCarousel({
    loop:true,
    autoplay: true,
    margin:10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:true,
    autoplayHoverPause: true,
    items: 1,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:1,
        nav:false
      },
      1000:{
        items:1,
        nav:true
      }
    }
	});

	// owl carousel
	var majorCarousel = $('.js-carousel-1');
	majorCarousel.owlCarousel({
    loop:true,
    autoplay: false,
    stagePadding: 0,
    margin: 10,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: false,
    dots: false,
    autoplayHoverPause: false,
    items: 3,
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:2,
        nav:false
      },
      1000:{
        items:3,
        nav:true,
        loop:false
      }
  	}
	});

  // cusotm owl navigation events
  $('.custom-next').click(function(event){
    event.preventDefault();
    // majorCarousel.trigger('owl.next');
    majorCarousel.trigger('next.owl.carousel');

  })
  $('.custom-prev').click(function(event){
    event.preventDefault();
    // majorCarousel.trigger('owl.prev');
    majorCarousel.trigger('prev.owl.carousel');
  })

	// owl carousel
	var major2Carousel = $('.js-carousel-2');
	major2Carousel.owlCarousel({
    loop:true,
    autoplay: true,
    stagePadding: 7,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: false,
    autoplayHoverPause: true,
    items: 4,
    navText : ["<span class='ion-chevron-left'></span>","<span class='ion-chevron-right'></span>"],
    responsive:{
      0:{
        items:1,
        nav:false
      },
      600:{
        items:3,
        nav:false
      },
      1000:{
        items:4,
        nav:true,
        loop:false
      }
  	}
	});


 

	var contentWayPoint = function() {
		var i = 0;
		$('.element-animate').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('element-animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .element-animate.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							var effect = el.data('animate-effect');
							if ( effect === 'fadeIn') {
								el.addClass('fadeIn element-animated');
							} else if ( effect === 'fadeInLeft') {
								el.addClass('fadeInLeft element-animated');
							} else if ( effect === 'fadeInRight') {
								el.addClass('fadeInRight element-animated');
							} else {
								el.addClass('fadeInUp element-animated');
							}
							el.removeClass('item-animate');
						},  k * 100);
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	contentWayPoint();



})(jQuery);