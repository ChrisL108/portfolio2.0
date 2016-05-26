$(function(){ 
	
	var $astronaut = $("#astronaut"), // astronaught is 150px wide
		$astronautHeight = $astronaut.height(),
		$astronautWidth = $astronaut.width(),
		$jumbotron = $(".jumbotron"),
		$jumbotronHeight = $jumbotron.height(),
		$jumbotronWidth = $jumbotron.width(),
		$window = $(window);

console.log($astronautWidth);

	$jumbotron.on("mouseover click touch",  function(e) {
		var newLeft = Math.random() * ($jumbotronWidth - $astronautWidth),
			newTop = Math.random() * ($jumbotronHeight - $astronautHeight);

		$("#astronaut").stop(true).animate({
			left: e.pageX - 80 ,
			top: e.pageY - 250
		}, 2000);

	});


});