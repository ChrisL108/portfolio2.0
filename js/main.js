
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
	    	TweenLite.to(astronaut, 1, {
	    				left:xp, top:yp,
	    				opacity: 0 } );
	    }
}, 33);


// SKILLS SECTION
$skills = $("#skills-section");
$window.on('scroll', function() {
	if ( $window.scrollTop() > $skills.offset().top -
									( $skills.height() / 2 )  ){
		$(".progress:eq(0)").animate({ value: '92' }, 1000); //JS
		$(".progress:eq(1)").animate({ value: '83' }, 2000); //HTML
		$(".progress:eq(2)").animate({ value: '68' }, 3000); //CSS
		$(".progress:eq(3)").animate({ value: '75' }, 4000); //etc
		progressText.fadeIn();
	}
});

var progressText = $(".progress-text");
var showText = function() {
	progressText.fadeIn('slow');
}
progressText.hide();

// animate by letter?
// var titles = $("#what-i-do h4");
// for (var i=0; i< titles.length; i++ ) {
// 	for (var j = 0; j < titles[i].length ; j++ ) {
// 		console.log(titles[i][j].val());
// 	}
// }


});   // end ready function





