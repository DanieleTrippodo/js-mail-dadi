// Lista delle email autorizzati
var listaAutorizzati = ["utente1@example.com", "utente2@example.com", "utente3@example.com"];

// Chiedi all'utente di inserire la sua email
var emailUtente = prompt("Inserisci la tua email:");

// Controlla se l'email dell'utente è presente nella lista degli autorizzati
if (listaAutorizzati.includes(emailUtente)) {
    console.log("Accesso consentito. Benvenuto!");
} else {
    console.log("Accesso negato. La tua email non è autorizzata.");
}
