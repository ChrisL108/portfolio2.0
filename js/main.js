

$(function() {

// Astronaut animation
var astronaut = $("#astronaut"), $window = $(window);
var mouseX = mouseY = xp = yp = 0;

$(".jumbotron").mousemove( function(e) {
   mouseX = e.pageX ;
   mouseY = e.pageY - 50; 
});

// Loop over astronaut Tween animation
// setInterval & Tween ( or css() ) is smoother than animation()
var loop = setInterval(function(){
	// Damper on 15 .. can change ... higher is slower
	xp += (mouseX - xp) / 13;
	yp += (mouseY - yp) / 13;

    if ( xp > 50 && xp < ($window.width() - 150) && yp > 0 && yp < 460) {
    	TweenLite.to(astronaut, 1.5, {
    				left:xp, top:yp, 
    				opacity: 1} );
    } else {
    	TweenLite.to(astronaut, 1.2, {
    				left:xp, top:yp,
    				opacity: 0} );
    }
}, 33);

// SKILLS SECTION
var $about = $("#about"), $about_text = $('#about_text'),
		$about_text2 = $('#about_text2'), $about_text3 = $('#about_text3');

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

// $("#to-top").on('click', function(event) {
// 	event.preventDefault();
// 	$(‘html, body’).animate({scrollTop: 0});
// 	return false;
// });

// smoother scrolling
$(document).ready(function(){
	$('a[href*=#]').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
			&& location.hostname == this.hostname) {
				var $target = $(this.hash);
				$target = $target.length && $target
						  || $('[name=' + this.hash.slice(1) +']');
				if ($target.length) {
					var targetOffset = $target.offset().top;
					$('html,body')
						.animate({scrollTop: targetOffset}, 1000);
					return false;
				}
		}
	});
});


});   // end ready())





