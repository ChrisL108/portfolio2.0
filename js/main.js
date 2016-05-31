
$(function() {


// ASTRONAUT ANIMATION
var astronaut = $("#astronaut");
var $window = $(window);
var mouseX = mouseY = xp = yp = 0;

$(".jumbotron").mousemove(function(e){
   mouseX = e.pageX ;
   mouseY = e.pageY - 50; 
});

// Loop over astronaut Tween animation
// setInterval & Tween ( or css() ) is smoother than jQuery's animation()
var loop = setInterval(function(){
	// Damper on 15 .. can change ... higher is slower
    	xp += (mouseX - xp) / 15;
		yp += (mouseY - yp) / 15;

	    if ( xp > 50 && xp < ($window.width() - 150) && yp > 0 && yp < 460) {
	    	TweenLite.to(astronaut, 1.5, {
	    				 left:xp, top:yp, 
	    				 opacity: 1} );
	    } else {
	    	TweenLite.to(astronaut, 1, {
	    				left:xp, top:yp,
	    				opacity: 0 } );
	    }
}, 33);


// SKILLS SECTION
$skills = $("#skills-section");
$window.on('scroll', function() {
	if ( $window.scrollTop() > $skills.offset().top -
										 $skills.height() / 2 ) {
		$(".progress:eq(0)").animate({ value: '90' }, 1000);
		$(".progress:eq(1)").animate({ value: '85' }, 2000);
		$(".progress:eq(2)").animate({ value: '68' }, 3000);
		$(".progress:eq(3)").animate({ value: '73' }, 4000);
	}
});


});   // end ready function





