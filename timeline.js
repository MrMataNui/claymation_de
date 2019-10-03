$(() => {
	// initialClass();

	$('[id^=2019]').click(function() {
		aufKlick($(this));
	});

	$('[class^=Inktober-Tag]').css('display', 'none');
	$('[id^=Inktober-Tag]').click(function() {
		inktober($(this));
	});

	const woche = 1;
	$('[id^=Woche]').each(function() {
		inktoberWochen($(this), woche);
	});
	$('[id$=Inktober]').each(function() {
		inktoberTage($(this), woche);
	});

	// $('[id$=-Jahr]').css('cursor', 'pointer');
	// $('[id$=-Jahr]').click(function() { JahrVeränderung($(this)); });
});

function initialClass() {
	$('#Monate li').addClass('abgewählt');
	$('#2019jan').addClass('ausgewählt');
	$('#Monate li#2019jan').addClass('ausgewählt');
	$('#Monate li#2019jan').removeClass('abgewählt');
}

function inktober(Standort) {
	const id = Standort.attr('id');
	const classAnzeige = $(`div.${id}`).css('display');
	const display = classAnzeige === 'none' ? 'block' : 'none';
	$('[class^=Inktober-Tag]').css('display', 'none');
	$(`div.${id}`).css('display', display);
}

function inktoberWochen(Standort, woche) {
	// if () {}
	let länge = 0;
	for (let i = 0; i < woche; i++) {
		if (Standort.not(`#Woche${i + 1}`).length) {
			länge++;
		}
	}
	if (länge === woche) {
		Standort.css('display', 'none');
	}
}

function inktoberTage(Standort, woche) {
	const max = woche * 7;
	let länge = 0;
	for (let i = 0; i < max; i++) {
		if (Standort.not(`#Tag-${i + 1}-Inktober`).length) {
			länge++;
		}
	}
	if (länge === max) {
		Standort.css('display', 'none');
	}
}

function aufKlick(Standort) {
	const id = Standort.attr('id');
	$('#Termine [id^=2019]').removeClass('ausgewählt');
	$('#Monate li').removeClass('ausgewählt');

	$(`#${id}`).addClass('ausgewählt');
	$(`#Monate li#${id}`).addClass('ausgewählt');

	// $('#Monate li').addClass('abgewählt');
	// $(`#Monate li#${Datum}`).removeClass('abgewählt');
}

function JahrVeränderung(Standort) {
	const Datum = Standort.attr('id');
	const JahreBekommen = [2019, 2020];
	let Nummer = $('#Datum2019 num').html();
	Nummer = parseInt($.trim(Nummer));
	switch (Datum) {
		case 'Bisherige-Jahr':
			if (JahreBekommen.includes(Nummer - 1)) {
				Nummer--;
			}
			break;
		case 'Nächster-Jahr':
			if (JahreBekommen.includes(Nummer + 1)) {
				Nummer++;
			}
			break;
	}
	$('#Datum2019 num').html(Nummer);
}
