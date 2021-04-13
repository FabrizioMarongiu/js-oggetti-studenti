// Descrizione
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array.

$(document).ready(function(){


// CREO UN OGGETTO CON PROPRIETà NOME COGNOME ETà

var studente = {
    nome : 'Lorenzo',
    cognome : 'Rossi',
    eta : 34,
};

// STAMPA DEL CONTENUTO DELL'OGGETTO "STUDENTE"

for (var key in studente){
    console.log(studente[key]);
}


    // END DOCUMENT
});