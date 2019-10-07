$(() => {
	$('[id^=2019]').click(function() {
		const id = $(this).attr('id');
		$('#Termine [id^=2019]').removeClass('ausgewählt');
		$('#Monate li').removeClass('ausgewählt');

		$(`#${id}`).addClass('ausgewählt');
		$(`#Monate li#${id}`).addClass('ausgewählt');
	});

	$('[id$=-Inktober]').click(function() {
		const id = $(this).children(':first').attr('id');
		$('[class^=Inktober-Tag]').removeClass('selected');
		$(`div.${id}`).addClass('selected');
	});

	const Wochen = 1;
	const Tage = Wochen * 7;
	$('[id^=Woche]').each(function() { inktoberImg($(this), Wochen, ['#Woche', '']); });
	$('[id$=Inktober]').each(function() { inktoberImg($(this), Tage, ['#Tag-', '-Inktober']); });

	// $('[id$=-Jahr]').click(function() { JahrVeränderung($(this)); });
});

function initialClass() {
	$('#Monate li').addClass('abgewählt');
	$('#2019jan').addClass('ausgewählt');
	$('#Monate li#2019jan').addClass('ausgewählt');
	$('#Monate li#2019jan').removeClass('abgewählt');
}

function inktoberImg(Standort, max, getPlace) {
	let länge = 0;
	for (let i = 0; i < max; i++) {
		let locationID = getPlace[0] + (i + 1) + getPlace[1];
		if (Standort.not(locationID).length) { länge++; }
	}
	if (länge === max) { Standort.css('display', 'none'); }
}

function JahrVeränderung(Standort) {
	const Datum = Standort.attr('id');
	const JahreBekommen = [2019, 2020];
	let Nummer = $('#Datum2019 num').html();
	Nummer = parseInt($.trim(Nummer));
	switch (Datum) {
		case 'Bisherige-Jahr': if (JahreBekommen.includes(Nummer - 1)) { Nummer--; } break;
		case 'Nächster-Jahr': if (JahreBekommen.includes(Nummer + 1)) { Nummer++; } break;
	}
	$('#Datum2019 num').html(Nummer);
}
