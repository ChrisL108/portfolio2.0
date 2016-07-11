
$(function() {

var $title = $('#site-title'),
	$titleSpan = $(".jumbotron span"),
	$jumbotron = $(".jumbotron"),
	$about = $("#about"), 
	$about_text = $('#about_text'),
	$about_text2 = $('#about_text2'), 
	$about_text3 = $('#about_text3'),
	$projectImgs = $('.project-imgs');
// Astronaut animation
var astronaut = $("#astronaut"),
	$window = $(window),
	mouseX = mouseY = xp = yp = 0;
// Ajax form variables
var contactForm = $('form'),
	userName = $('#userName'),
	userEmail = $('#userEmail'),
	userMsg = $('#userMsg');
	$formMessages = $('#form-messages');

	$("#site-title").typed({
		strings: ["My name is <span class='text-primary'>Chris LaCaille</span>",
				  "I <span class='text-primary'>design</span> websites... ^600 and <span class='text-primary'>build</span> them",
				  "Check out my work!<br><a id='work-link' href='#recent-work-heading' class='btn btn-lg'>Click Here</a>"
				  ],
		typeSpeed: 0,
		startDelay: 1000,
		callback: function() {
			smoothScroll();
		}
	});

// Smoother scrolling 
smoothScroll =  function() {
	$('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && 
			location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target || $('[name=' + this.hash.slice(1) +']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body')
						.animate({scrollTop: targetOffset}, 1000);
					return false;
				}
		}
	});
}
smoothScroll();


// jumbotron mouse events
$jumbotron.mousemove( function(e) {
   mouseX = e.pageX ;
   mouseY = e.pageY - 50; 
});
// Loop over astronaut Tween animation
// setInterval & Tween ( or css() ) is smoother than animation()
var loop = setInterval(function(){
	// Damper on 10 .. can change ... higher is slower
	xp += (mouseX - xp) / 10;
	yp += (mouseY - yp) / 10;
    if ( xp > 50 && 
		 xp < ($window.width() - 150) && 
		 yp > 0 && 
		 yp < 430) 
    {
    	TweenLite.to(astronaut, 1.5, 
    				{ left:xp, top:yp, 
    				  opacity: 1  });
    	
    } else {
    	TweenLite.to(astronaut, 1.2, 
    				{ left:xp, top:yp,
    				  opacity: 0  });
    }

}, 100);


// ABOUT SECTION
$window.on('scroll', function() {
	if ( $window.scrollTop() > $about.offset().top - ( $about.height() / 1.2 )) {
		$about_text.fadeIn(300, function() { 
			$about_text2.fadeIn(1100, function() {
				$about_text3.fadeIn(300);
			});
		});
	} else {
		$about_text.hide();
		$about_text2.hide();
		$about_text3.hide();
	}
});

// Project Imgs HOVER
$projectImgs.on('mouseover', function() {
	TweenLite.set($(this), {className: '+=contrast150'});
});
$projectImgs.on('mouseleave', function() {
	TweenLite.set($(this), {className: '-=contrast150'});
});


// FORM AJAX REQUEST

$('form').on('submit', function(e) {
	e.preventDefault();
	// alert("Thanks! I'll get back to you as soon as possible.");
	console.log(userName.val(), userEmail.val(), userMsg.val());
	contactForm.serialize();
	$.ajax({
		url: contactForm.attr('action'),
		type: 'POST',
		data: {name: userName.val(),
			   email: userEmail.val(),
			   message: userMsg.val()
		},
	})
	.done(function() {
		console.log("success");
		$formMessages.html("Message Sent.. Thank You! I'll get back to you ASAP.");
		userName.val('');
		userEmail.val('');
		userMsg.val('');


	})
	.fail(function(data) {
		console.log("error sending form data...");

	    // Set the message text.
	    if (data.responseText !== '') {
	        $formMessages.html(data.responseText);
	    } else {
	        $formMessages.html("Oops! An error occured and your message could not be sent.");
	    }
		})
	.always(function() {
		console.log("complete");
	});
	
});

// END AJAX





});   // end ready())






