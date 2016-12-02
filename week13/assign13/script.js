$( document ).ready(function() {
    $(".card").mouseenter(function(){
		$(this).fadeTo('fast', 0.25);
	});
	$(".card").mouseleave(function(){
		$(this).fadeTo('fast', 1);
	})

	$("#alabama").click(function() {
		var answer=prompt("What is the capital of Alabama?");

		if (answer="Montgomery") {
			$("#alabama").hide('slow');
		}

		else {
			prompt("Try again!");
		}
	});

	$("#alaska").click(function() {
		var answer=prompt("What is the capital of Alaska?");

		if (answer="Juneau") {
			$("#alaska").hide('slow');
		}

		else {
			prompt("Try again!");
		}
	});

	$("#arizona").click(function() {
		var answer=prompt("What is the capital of Arizona?");

		if (answer="Phoenix") {
			$("#arizona").hide('slow');
		}

		else {
			prompt("Try again!");
		}
	});

	$("#arkansas").click(function() {
		var answer=prompt("What is the capital of Arkansas?");

		if (answer="Little Rock") {
			$("#arkansas").hide('slow');
		}

		else {
			prompt("Try again!");
		}
	});

	$("#california").click(function() {
		var answer=prompt("What is the capital of California?");

		if (answer="Sacramento") {
			$("#california").hide('slow');
		}

		else {
			prompt("Try again!");
		}
	});

	$("#colorado").click(function() {
		var answer=prompt("What is the capital of Colorado?");

		if (answer="Denver") {
			$("#colorado").hide('slow');
		}

		else {
			prompt("Try again!");
		}
	});
});

