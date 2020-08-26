/* 
-Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome ed età.
Stampare a schermo attraverso il for in tutte le proprietà. 
-Creare un array di oggetti di studenti.Ciclare su tutti gli studenti e stampare per ognuno nome e cognome.
-Dare la possibilità all’ utente attraverso 3 prompt di aggiungere un nuovo oggetto studente inserendo nell’ ordine: nome, cognome e età.
Usate prima i console.log e poi provare a stampare con jQuery.

BONUS: Provate ad utilizzare Handlebars. */


$(function () {


	// 1. creazione di un oggetto studente con le seguenti proprietà
	const studente = {
		nome: 'Riccardo',
		cognome: 'Colombo',
		eta: 37
	}

	// stampo a video di tutte le proprieta con for in
	for (const key in studente) {
		console.log(`Il valore della proprietà ${key} è  ${studente[key]}`);
	}


	// 2. creare un array di oggetti studenti. Ciclare gli studenti e stampare per ognuno nome e cognome ed eta
	const classe16 = [

		{
			nome: 'Riccardo',
			cognome: 'Colombo',
			eta: 37
		},
		{
			nome: 'Giovanni',
			cognome: 'Rossi',
			eta: 26
		},
		{
			nome: 'Gabriella',
			cognome: 'Gilardi',
			eta: 32
		},
		{
			nome: 'Marta',
			cognome: 'Recalcati',
			eta: 35
		}
	]

	// utilizzo il for per ciclare l'array
	for (let i = 0; i < classe16.length; i++) {

		// ed il for in per ciclare ogni oggetto classe16[i]
		for (const key in classe16[i]) {
			console.log(`${key} : ${classe16[i][key]} `);
		}
	}


	// 3.1 inserisco un nuovo studente da prompt

	/* let newName = prompt('Inserisci il nome studente: ');
	let newSurn = prompt('Inserisci il cognome studente: ');
	let newAge = prompt(`Inserisci l'età studente: `); */
	// e lo pusho nell'array 
	/* 	classe16.push({
			nome: newName,
			cognome: newSurn,
			eta: newAge
		}); */

	// 3.2 Acquisisco i dati da input
	$('#inserisci').click(function () {
		// salvo nelle variabili i valori degli input (maiuscolo la prima lettera)
		let newName = capitalize($('#nome').val());
		let newSurn = capitalize($('#cognome').val());
		let newAge = $('#eta').val();

		let pattern = /^[0-9]*$/;

		// if per verificare che tutti i campi siano stati compilati
		if (newName == '' || newSurn == '' || newAge == '' || !pattern.test(newAge)) {
			// azzero i campi
			$('#nome').val('');
			$('#cognome').val('');
			$('#eta').val('');
		} else {
			// push di valori in un oggetto dentro l'array
			classe16.push({
				nome: newName,
				cognome: newSurn,
				eta: newAge
			});
			// azzero i campi
			$('#nome').val('');
			$('#cognome').val('');
			$('#eta').val('');

			// ciclo for per ciclare tutti gli oggetti
			for (let i = 0; i < classe16.length; i++) {
				// ciclo for in per ciclare ogni oggetto
				for (const key in classe16[i]) {
					// "appendo" ogni proprietà (chiave valore) in #list dentro un paragrafo ciascuno
					$('#list').append(`<p>${key} : ${classe16[i][key]}</p>`);
				}
				// spaziatura tra i paragrafi
				$('#list').append('<br>');
			}


			/* BONUS */
			// utilizzo handlebars
			// qui salvo in source l'HTML dell id template (una lista)
			var source = $('#template').html();
			// salvo in template la compilazione di source
			var template = Handlebars.compile(source);

			// ciclo for per ciclare tutti gli elementi dell'array
			for (let i = 0; i < classe16.length; i++) {
				// per ogni oggetto salvo in html il template col metodo template
				var html = template(classe16[i]);
				// lo appendo nel id #list-two
				$('#list-two').append(html);

			}
		}

	});


	/* FUNZIONE PER FARE IL CAPITALIZE DELLA STRINGA INSERITA*/

	function capitalize(stringa) {
		var primoCarattere = stringa.charAt(0).toUpperCase();
		return primoCarattere + stringa.slice(1).toLowerCase();
	};




});