$(function () {
	$("#distance-slider").slider({
		range: "max",
		min: 1,
		max: 10,
		value: 2,
		slide: function (event, ui) {
			$(".search-results__range-input").val(ui.value);
		}
	});
	$(".search-results__range-input").val($("#distance-slider").slider("value"));
	$("#price-slider").slider({
		range: "max",
		min: 1,
		max: 100,
		value: 20
	});
});