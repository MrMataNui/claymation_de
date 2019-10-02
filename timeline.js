$(() => {
	// initialClass();

	$('[class^=Inktober-day]').after('<br />');
	$('[id^=lang-]').click(function() {
		langChange($(this));
	});

	$('[id^=2019]').click(function() {
		onClick($(this));
	});

	$('[class^=Inktober-day]').css('display', 'none');
	$('[id^=Inktober-day]').click(function() {
		inktober($(this));
	});

	$('[id$=Inktober]').each(function() {
		inktoberDays($(this));
	});

	// $('[id$=-year]').css('cursor', 'pointer');
	// $('[id$=-year]').click(function() { yearChange($(this)); });
});

function inktober(location) {
	const id = location.attr('id');
	const classDisplay = $(`[class^=${id}]`).css('display');
	const display = classDisplay === 'none' ? 'block' : 'none';
	$('[class^=Inktober-day]').css('display', 'none');
	$(`div.${id}`).css('display', display);
}

function inktoberDays(location) {
	const max = 1;
	let length = 0;
	for (let i = 0; i < max; i++) {
		if (location.not(`#day-${i + 1}-Inktober`).length) {
			length++;
		}
	}
	if (length === max) {
		location.css('display', 'none');
	}
}

function initialClass() {
	$('#months li').addClass('deselected');
	$('#2019jan').addClass('selected');
	$('#months li#2019jan').addClass('selected');
	$('#months li#2019jan').removeClass('deselected');
}

function langChange(location) {
	const lang = location.attr('id');
	$('.en').css('display', 'none');
	$('.de').css('display', 'none');
	switch (lang) {
		case 'lang-en':
			$('.en').css('display', 'block');
			$('#lang-name').html('Language: English');
			break;
		case 'lang-de':
			$('.de').css('display', 'block');
			$('#lang-name').html('Sprache: Deutsch');
			break;
	}
}

function onClick(location) {
	const id = location.attr('id');
	$('#dates [id^=2019]').removeClass('selected');
	$('#months li').removeClass('selected');

	$(`#${id}`).addClass('selected');
	$(`#months li#${id}`).addClass('selected');

	// $('#months li').addClass('deselected');
	// $(`#months li#${date}`).removeClass('deselected');
}

function yearChange(location) {
	const date = location.attr('id');
	const getYears = [2019, 2020];
	let number = $('#date2019 num').html();
	number = parseInt($.trim(number));
	switch (date) {
		case 'previous-year':
			if (getYears.includes(number - 1)) {
				number--;
			}
			break;
		case 'following-year':
			if (getYears.includes(number + 1)) {
				number++;
			}
			break;
	}
	$('#date2019 num').html(number);
}
