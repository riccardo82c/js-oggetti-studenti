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

		for (const key in classe16[i]) {
			console.log(`${key} : ${classe16[i][key]} `);
		}
	}


	// 3. inserisco un nuovo studente da prompt

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

		let newName = $('#nome').val();
		let newSurn = $('#cognome').val();
		let newAge = $('#eta').val();


		/* if per verificare che tutti i campi siano stati compilati */
		if (newName == '' || newSurn == '' || newAge == '') {
			$('#nome').val('');
			$('#cognome').val('');
			$('#eta').val('');

		} else {



			classe16.push({
				nome: newName,
				cognome: newSurn,
				eta: newAge
			});


			$('#nome').val('');
			$('#cognome').val('');
			$('#eta').val('');

			for (let i = 0; i < classe16.length; i++) {

				for (const key in classe16[i]) {
					$('#list').append(`<p>${key} : ${classe16[i][key]}</p>`);
				}
				$('#list').append('<br>');
			}

			/* BONUS */

			var source = $('#template').html();
			var template = Handlebars.compile(source);

			for (let i = 0; i < classe16.length; i++) {
				var html = template(classe16[i]);
				$('#list-two').append(html);

			}
		}

	});

});