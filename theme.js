$(function () {
	$(".trigger").click(function (e) {
		e.preventDefault();
		$(".simpleCollapse").toggleClass("open");
	});
});