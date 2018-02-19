$().ready(function(){
		$("h1").toggle("fade");
		
		$("#enlace").toggle("bounce", {times: 0.7}, "slow");

		$("#enlace").animate({
			backgroundColor: "white"
		}, 1000);
		$("a").animate({
			color: "#BCAAA4"
		}, 1500);	
});