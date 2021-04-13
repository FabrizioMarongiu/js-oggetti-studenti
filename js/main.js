// Descrizione
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array.

$(document).ready(function(){

// PUNTO 1
// CREO UN OGGETTO CON PROPRIETà NOME COGNOME ETà

// var studente = {
//     nome : 'Lorenzo',
//     cognome : 'Rossi',
//     eta : 34,
// };

// // STAMPA DEL CONTENUTO DELL'OGGETTO "STUDENTE"

// for (var key in studente){
//     console.log(studente[key]);
// }


// CREO UN ARRAY DI OGGETTING

var studenti = [

    {
        nome : 'Fabrizio',
        cognome : 'Rossi',
        eta : 34,
    },

    {
        nome : 'Barbara',
        cognome : 'Verdi',
        eta : 30,
    },

    {
        nome : 'Luisa',
        cognome : 'Quattrini',
        eta : 27,
    },

    {
        nome : 'Sebastian',
        cognome : 'Black',
        eta : 30,
    },

];

// CREO IL CICLO CHE MI PERMETTERà DI FARE IL LOOP SU TUTTO L'ARRAY, PER STAMPARE SOLO IL NOME E IL COGNOME

for ( var i = 0; i < studenti.length; i++){

    var studente = studenti[i];

    console.log('Ecco nome e cognome del ' + (i + 1) + ' studente : ' + studente.nome + " " + studente.cognome);

}

// PUNTO 3
// PERMETTO ALL'UTENTE DI INSERIRE UN NUOVO UTENTE NELLA CLASSE

var scelta = prompt('Vuoi inserire un altro utente? si / no').toLowerCase().trim();

if ( scelta === 'si'){

    var newProfile = {

         nome : prompt('Inserisci il nome : ').toLowerCase().trim(),

         cognome : prompt('Inserisci il cognome : ').toLowerCase().trim(),

         eta : parseInt(prompt('Inserisci l\'età : ')),
    }
    
    console.log(newProfile);

    studenti.push(newProfile);

    console.log(studenti);


// NUOVA STAMPA DELL'ARRAY AGGIORNATO
    for ( var i = 0; i < studenti.length; i++){

        var studente = studenti[i];

        console.log('Ecco nome e cognome del ' + (i + 1) + ' studente : ' + studente.nome + " " + studente.cognome + ' \n La sua età e; ' + studente.eta);

    }

}



    // END DOCUMENT
});