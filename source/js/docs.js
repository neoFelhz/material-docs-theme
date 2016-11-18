$(document).ready(function () {
	$('.ui.accordion')
		.accordion();

	$('.ui.sticky')
		.sticky({
			context: '#main'
		});

	// Add # to headings
	$("h2, h3, h4").each(function (e) {

		$(this).prepend('<a class="heading-link" href="#' + $(this).attr("id") + '">#</a>');
	});

	// Show # when mouseover on headings
	$("h2, h3, h4").mouseenter(function () {
		$(this).children(".heading-link").css("color", "#cb3837");
	});
	// Hide # when mouseover on headings
	$("h2, h3, h4").mouseleave(function () {
		$(this).children(".heading-link").css("color", "#fff");
	});

	// i18n
	var i18n = domI18n({
		selector: '[data-translatable]',
		languages: ['zh', 'en'],
		separator: ' // '
	});

	currentLang = navigator.language; //判断除IE外其他浏览器使用语言
	if (!currentLang) { //判断IE浏览器使用语言
		currentLang = navigator.browserLanguage;
	}

	//根据判断的语言使用相应的 i18n
	if (currentLang.match(/(zh).+/g)) {
		i18n.changeLanguage('zh');
		$("#lang-select").val('zh');
	}
	if (currentLang.match(/(en).+/g)) {
		i18n.changeLanguage('en');
		$("#lang-select").val('en');
	}

	//Select change language
	$('#lang-select').change(function () {
		if ($(this).val() == "zh") i18n.changeLanguage('zh');
		if ($(this).val() == "en") i18n.changeLanguage('en');
	});

	// Smooth scroll to anchor
	$("a.back-top, a.item").click(function () {
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, {
			duration: 500,
			easing: "swing"
		});
		return false;
	});
});