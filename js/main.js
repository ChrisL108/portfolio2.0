

let $astronaut = $("#astronaut");

let jumboOffset = $('.jumbotron').offset();

let relX = relY = 0;


$(function(){ 
	
let frames = 30;   // 30 frames per second
let timeInterval = Math.round( 1000 / frames );

setInterval(updateAstronautPos(), timeInterval);

 });  // end doc ready


$(".jumbotron").on('click',function(e){
	var mouseX = e.pageX;
	var mouseY = e.pageY;
	var relX = mouseX - jumboOffset.left;
	var relY = mouseY - jumboOffset.top;
});

function updateAstronautPos() {
  $astronaut.css('left', relX);
  $astronaut.css('top', relY);
}



// var astronaut = $("#astronaut");
// var mouseX = 0, mouseY = 0;
// $('.jumbotron').offset().top - 

// $(".jumbotron").mousemove(function(e){
//    mouseX = e.pageX - 300;
//    mouseY = e.pageY - 350; 
// });
// // cache the selector
// var xp = 0, yp = 0;
// var loop = setInterval(function(){
//     // change 12 to alter damping higher is slower
// 	    xp += (mouseX - xp) / 20;
// 	    yp += (mouseY - yp) / 20;
// 	    astronaut.css({left:xp, top:yp});
// }, 70);
