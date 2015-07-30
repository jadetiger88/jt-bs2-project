$(document).ready(function() {
	var showWidth = true;
	$(window).resize(function() {
		if (showWidth) {
			var width = $(window).width();
			$("#width-display").html("Width: " + width); 
		}
	});
})