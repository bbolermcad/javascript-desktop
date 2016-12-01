$( document ).ready(function() {
    $(".card").mouseenter(function(){
		$(this).fadeTo('fast', 0.25);
	});
	$(".card").mouseleave(function(){
		$(this).fadeTo('fast', 1);
	})

	$("#alabama").click(function() {
		var answer=prompt("What is the capital of Alabama?")

		if (answer="Montgomery") {
			$("#alabama").hide('slow');
		}
	});
});