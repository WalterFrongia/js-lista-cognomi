// chiedi all’utente il cognome

let cognomeUtente = prompt("inserisci il tuo cognome");
console.log(cognomeUtente);


// inseriscilo in un array con altri cognomi: ‘Bianchi’, ‘Neri’, ‘Rossi’, ‘Verdi’, ‘Gialli’

let cognomiInLista = [ "Bianchi" , "Neri" , "Rossi" , "Verdi" , "Gialli"];

console.log(cognomiInLista);

cognomiInLista.push(cognomeUtente);

if (cognomeUtente == cognomiInLista){
    console.log("puoi accedere");
}else{
    console.log("non sei in lista");
}



// stampa la lista ordinata alfabeticamente



// scrivi anche la posizione "umana" (partendo da 1) della lista in cui il nuovo utente si trova
