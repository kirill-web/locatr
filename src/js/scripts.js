$('#js-menu-toggle').on('click', function (e) {
	e.preventDefault();
	$('html').css('overflow-x', 'visible');
	$('.page-header').animate({left: -300}, 200, 'linear');
	$('.hide-menu').animate({right: 0}, 200, 'linear');
	$('html').animate({right: 300}, 200, 'linear');
});

$('#js-hide-menu').on('click', function (e) {
	e.preventDefault();
	$('html').css('overflow-x', 'hidden');
	$('.page-header').animate({left: 0}, 200, 'linear');
	$('.hide-menu').animate({right: -300}, 200, 'linear');
	$('html').animate({right: 0}, 200, 'linear');
});

$("#js-promo-slider").vegas({
	slides: [
		{
			src: "img/slide1.jpg"
		},
		{
			src: "img/slide2.jpg"
		},
		{
			src: "img/slide3.jpg"
		}
    ],
	timer: false
});

$(function () {
	$('.common-select').selectric();
});


$(document).ready(function () {
	$('input,textarea').focus(function () {
		$(this).data('placeholder', $(this).attr('placeholder'))
		$(this).attr('placeholder', '');
	});
	$('input,textarea').blur(function () {
		$(this).attr('placeholder', $(this).data('placeholder'));
	});
});

$(document).ready(function () {
	var panelHeight = $('.search-results__panel').innerHeight();

	$('.search-results__map').css('height', panelHeight - "50");
	$(window).on('resize', function () {
		var panelHeight = $('.search-results__panel').innerHeight();
		$('.search-results__map').css('height', panelHeight - "50");
	})
});