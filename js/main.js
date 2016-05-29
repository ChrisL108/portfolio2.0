

// let $astronaut = $("#astronaut");

// let jumboOffset = $('.jumbotron').offset();

// let relX = relY = 0;


// $(document).ready(function(){ 
	
// 	let frames = 30;   // 30 frames per second
// 	let timeInterval = Math.round( 1000 / frames );

// 	animateTimer = setInterval(updateAstronautPos(), timeInterval);

// });  // end doc ready


// $(".jumbotron").on('click',function(e){
// 	var mouseX = e.pageX;
// 	var mouseY = e.pageY;
// 	var relX = mouseX - jumboOffset.left;
// 	var relY = mouseY - jumboOffset.top;
// });

// function updateAstronautPos() {
//   $astronaut.css('left', relX);
//   $astronaut.css('top', relY);
// }


$(function() {


// ASTRONAUT ANIMATION
var astronaut = $("#astronaut");
var mouseX = 0, mouseY = 0;
var xp = 0, yp = 0;

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

	    if ( xp > 50 && xp < ($(window).width() - 150) && yp > 0 && yp < 460) {
	    	TweenLite.to(astronaut, 1.5, {
	    				 left:xp, top:yp, 
	    				 opacity: 1} );
	    } else {
	    	TweenLite.to(astronaut, 0.5, {
	    				left:xp, top:yp,
	    				opacity: 0 } );
	    }
}, 33);


// SKILLS SECTION

$("#skills-section").on('hover', function() {
	 // Tween.to(skillsSection, 1, {backgroundColor: black});
	TweenLite.to($("#skills-section > img"), 1, {width:100, ease:"Elastic.easeOut"});
}, function() {
	/* Stuff to do when the mouse leaves the element */
});


});   // end ready function


