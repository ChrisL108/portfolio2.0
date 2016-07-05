
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
var astronaut = $("#astronaut");
var $window = $(window);
var mouseX = mouseY = xp = yp = 0;

// global jumbotron
$jumbotron.mousemove( function(e) {
   mouseX = e.pageX ;
   mouseY = e.pageY - 50; 
});
// Loop over astronaut Tween animation
// setInterval & Tween ( or css() ) is smoother than animation()
var loop = setInterval(function(){
	// Damper on 13 .. can change ... higher is slower
	xp += (mouseX - xp) / 13;
	yp += (mouseY - yp) / 13;
    if ( xp > 50 && 
		 xp < ($window.width() - 150) && 
		 yp > 0 && 
		 yp < 510) 
    {
    	TweenLite.to(astronaut, 1.5, 
    				{ left:xp, top:yp, 
    				  opacity: 1  });
    	// TweenLite.set(astronaut, {className: '+=contrast100'});
    } else {
    	TweenLite.to(astronaut, 1.2, 
    				{ left:xp, top:yp,
    				  opacity: 0  });
    }
}, 33);


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

$projectImgs.on('mouseover', function() {
	TweenLite.set($(this), {className: '+=contrast150'});
});
$projectImgs.on('mouseleave', function() {
	TweenLite.set($(this), {className: '-=contrast150'});
});

// Smoother scrolling 
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


});   // end ready())






