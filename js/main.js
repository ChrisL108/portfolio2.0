$(function(){ 
	
	// var $astronaut = $("#astronaut"), // astronaught is 150px wide
	// 	$astronautHeight = $astronaut.height(),
	// 	$astronautWidth = $astronaut.width(),
	// 	$jumbotron = $(".jumbotron"),
	// 	$jumbotronHeight = $jumbotron.height(),
	// 	$jumbotronWidth = $jumbotron.width(),
	// 	$window = $(window);


// var $astronaut = $("#astronaut");


var astronaut = $("#astronaut");
var mouseX = 0, mouseY = 0;

$(".jumbotron").mousemove(function(e){
   mouseX = e.pageX;
   mouseY = e.pageY - 450; 
});

// cache the selector

var xp = 0, yp = 0;
var loop = setInterval(function(){
    // change 12 to alter damping higher is slower
    xp += (mouseX - xp) / 12;
    yp += (mouseY - yp) / 12;
    astronaut.css({left:xp, top:yp});
    
}, 30);


});