

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

	    if ( xp > 50 && xp < ($(window).width() - 150) && yp > 0 && yp < 460) {
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

$(window).on('scroll', function() {
	console.log("This isn't displaying");
}, function() {
	console.log("This IS displaying?");
});


});   // end ready function





	// $("progress").animate({
	// 	value: '80',
	// 	borderColor: 'white'
	// });
	// console.log("callback");