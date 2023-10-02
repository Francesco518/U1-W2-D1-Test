/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* String sono essenzialmente le parole che devono essere necessariamente delimitate con degli apici.
   Number sono i numeri che possono essere interi o decimali e bisogna scriverli senza apici.
   Boolean può avere solo i valori true (vero) o false (falso)
   Undefined avviene quando ho assegnato un valore a una variabile un qualcosa che non è stato ben definito
   Null invece avviene quando ho dichiarato una variabile a cui no ho dato un valore
   NaN avviene infine quando viene fatta una operazione matematica non valida
*/

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

const name= "Francesco"
let surname= "Buonocore"
console.log (name)

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

let num1 = 12;
let num2 = 20;
console.log ("Addizione:", num1 + num2)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12
console.log (x)

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

// let name= "Buonocore" non può essere applicato perchè con const un determinato valore può essere utilizzato una sola volta

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

console.log ("Sottrazione:", x - 4 )

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

let name1= "john"
let name2 = "John"

console.log (name1 === name2)
console.log (name1 === name2.toLowerCase())

