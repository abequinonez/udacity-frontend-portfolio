$(document).on("click", ".navbar-header", function(e) {
	if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
		$(".navbar-collapse").collapse("hide");
	}
});
$(document).on("click", ".navbar-collapse.in", function(e) {
	if ($(e.target).is("a") && $(e.target).attr("class") != "dropdown-toggle") {
		$(this).collapse("hide");
	}
});