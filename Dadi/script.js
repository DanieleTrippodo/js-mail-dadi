
// Generiamo il numero del giocatore
let dadoGiocatore = Math.floor(Math.random() * 6) + 1;

// Generiamo il numero del computer
let dadoComputer = Math.floor(Math.random() * 6) + 1;

// Mostra i risultati del giocatore e del computer
console.log("Il giocatore ha lanciato il dado e ha ottenuto: " + dadoGiocatore);
console.log("Il computer ha lanciato il dado e ha ottenuto: " + dadoComputer);



// Verifichiamo quale dei due numeri è maggiore dell'altro
if (dadoGiocatore > dadoComputer) {
    console.log('il giocatore ha vinto!');
} else if (dadoGiocatore < dadoComputer) {
    console.log('il computer ha vinto!');
} else {
    console.log('Pareggio!');
}

