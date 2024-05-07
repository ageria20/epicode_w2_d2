/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

console.log("ESERCIZIO 1");
const nums = [4, 30];

if (nums[0] > nums[1]) {
  console.log("Il primo Numero è più grande");
} else {
  console.log("Il secondo numero è più grande");
}

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

console.log("ESERCIZIO 2");
const notNum = 5;
if (notNum === 5) {
  console.log("Is equal");
} else {
  console.log("not equal");
}

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

console.log("ESERCIZIO 3");
const numDivisibile = nums[1] % notNum;
if (numDivisibile === 0) {
  console.log("è divisibile per 5");
} else {
  console.log("non è divisibile per 5");
}

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

console.log("ESERCIZIO 4");
const numInt = [16, 8];
let diff = numInt[0] - numInt[1];
let sum = numInt[0] + numInt[1];
if (numInt[0] === 8 || numInt[1] === 8) {
  console.log("Uno dei due numeri è uguale a 8");
}
if (diff === 8 || sum === 8) {
  console.log("La differenza o la somma del numero dato è uguale ad 8");
} else {
  console.log("nessuna delle condizioni è verificata");
}

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

console.log("ESERCIZIO 5");
let totalShoppingCart = 100;
if (totalShoppingCart > 50) {
  console.log("Spedizione Gratuita");
} else {
  totalShoppingCart += 10;
  console.log("Il costo della spedizione è di 10. Totale:", totalShoppingCart);
}
/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

console.log("ESERCIZIO 6");
let blackFiday = true;
let sale = totalShoppingCart * 0.2;
if (blackFiday && totalShoppingCart > 50) {
  totalShoppingCart -= sale;
  console.log("La tua spedizione è gratuita e hai ottenuto un 20% si sconto");
} else {
  console.log("Il costo della spedizione è di 10");
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

console.log("ESERCIZIO 7");
let a = 12;
let b = 15;
let c = 20;
if (a < b && a < c && b < c) {
  console.log(c, b, a);
} else if (a < b && a < c && c < b) {
  console.log(b, c, a);
} else if (a > b && a > c && b > c) {
  console.log(a, b, c);
} else if (c > a && c > b && a > b) {
  console.log(c, a, b);
} else if (c < a && c < b && b < a) {
  console.log(a, b, c);
} else if (c < a && c < b && a < b) {
  console.log(b, a, c);
} else {
  console.log("Sono uguali:", a, b, c);
}

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

console.log("ESERCIZIO 8");
let value = 8;
if (typeof value === "number") {
  console.log("Il valore fornito è un numero");
} else {
  console.log("Il valore fornito non è un numero");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

console.log("ESERCIZIO 9");
let val2 = 10;
let even = val2 % 2;
if (even === 0) {
  console.log("Il valore fornito è pari");
} else {
  console.log("Il valore fornito è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");

    }
*/

console.log("ESERCIZIO 10");
let val = 3;
if (val < 5) {
  console.log("Meno di 5");
} else if (val < 10) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

console.log("ESERCIZIO 11");
me.city = "Toronto";
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

console.log("ESERCIZIO 12");
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

console.log("ESERCIZIO 13");
let len = me.skills.length;
delete me.skills[len - 1];
// si potrebbe utilizzare anche me.skills.pop()
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

console.log("ESERCIZIO 14");
let emptyArr = [];
emptyArr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(emptyArr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

console.log("ESERCIZIO 15");
emptyArr.pop();
emptyArr.push(100);
console.log(emptyArr);
