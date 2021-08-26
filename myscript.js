// chiedi all’utente il cognome

let cognomeUtente = prompt("inserisci il tuo cognome");
console.log(cognomeUtente);

// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

let cognomiInLista = [ "Bianchi" , "Neri" , "Rossi" , "Verdi" , "Gialli"];
console.log(cognomiInLista);

cognomiInLista.push(cognomeUtente); //Prima qui avevo inserito un altro cognome -> "Speciale" spiegare.

console.log(cognomiInLista);

// stampa la lista ordinata alfabeticamente

cognomiInLista.sort()
console.log(cognomiInLista);


// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova

const posizioneCognomeUtente = cognomiInLista.indexOf(cognomeUtente) +1;
console.log(posizioneCognomeUtente);