$(function(){ 
	
	let $astronaut = $("#astronaut"),
		$jumbotron = $(".jumbotron"),
		$window = $(window),
		$endHere = $(".jumbotron").offset().top - $window.height();

		//console.log($(".jumbotron").offset().top);

	$window.on("scroll", function() {
		let newLeft = Math.random() * $window.innerWidth(),
			newTop = Math.random() * $jumbotron.height();
		$astronaut.stop(true).animate({
			left: newLeft,
			top: newTop
		}, 2200);
	});





});