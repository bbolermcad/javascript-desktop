$("document").ready(function() {
	$(".recipe").hide();
	$("h1").animate({
    width: "100%",
    opacity: 1,
    fontSize: "3em",
  }, 1500 );

	//one user interaction
	$(".r1").click(function(){
		$(".recipe").hide()
		$("#recipeone").show();
		$(".moveit").animate({"left": "+=50px"}, "slow");
	});

	//one fade event
	$(".r2").click(function(){
		$(".recipe").hide()
		$("#recipetwo").fadeTo("slow", 1);
	});

	$(".r3").click(function(){
		$(".recipe").hide()
		$("#recipethree").show();
	});

	$(".r4").click(function(){
		$(".recipe").hide()
		$("#recipefour").show();
	});

	$(".r5").click(function(){
		$(".recipe").hide()
		$("#recipefive").show();
	});

	$(".r6").click(function(){
		$(".recipe").hide()
		$("#recipesix").show();
	});

	//second user interaction
	$(".r7").mouseenter(function(){
		$(".recipe").hide()
		$("#recipeseven").show();
	});

		$(".r7").mouseleave(function(){
		$(".recipe").hide()
		$("#recipeseven").hide();
	});

});