$(document).on("click", ".navbar", function(e) {
	if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
		$(".navbar-collapse").collapse("hide");
	}
});