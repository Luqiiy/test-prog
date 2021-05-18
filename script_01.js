/***** Variablen 01 *******/

// ich gebe da iwas ein

/**
  block kommentar
 */

// Ausgabe
//console.log("Hallo Welt");
//console.log(firstName);

// Deklaration + Wertzuweisung 1
/*
let firstName; // Deklaration (Definition)
firstName = "Anthony"; // Wertzuweisung
console.log(firstName); // Ausgabe
let familyName = "Schlotte"; // Deklaration + Wertzuweisung
console.log(familyName); // Ausgabe
console.log(firstName + " " + familyName);
*/

// Deklaration + Wertzuweisung 2
/*
let firstName,familyName;
firstName = prompt("Bitte Vornamen eingeben:");
familyName = prompt("Bitte Namen eingeben:");
console.log("moin, " + firstName + " " + familyName + "!");
*/
/*
// JS ist eine untypisierte Sprache! | untyped
let test; // Deklaration
//test = "hi"; //string
//test = 2; // number 
//test = true; //boolean
console.log("Typ: " + typeof test);
console.log("Inhalt: " + test);
*/


/***** Variblen 2 *****/
/*
// Deklaration
let ageJohn, ageMark;
let birthYearJohn, birthYearMark;

// Wertzuweisung | Assignment
let date = new Date();
let year = date.getFullYear();
console.log(year);
console.log(date);
ageJohn = 55;
ageMark = 30;

//Operation (Differenz)
birthYearJohn = year - ageJohn;
birthYearMark = year - ageMark;

console.log("Aktuelles Jahr: " + year );
console.log("birthYearJohn: " + birthYearJohn);
console.log("birthYearMark : " + birthYearMark);
*/

/***** Variblen 3 *****/

let ageJohn, ageMark

ageJohn = 55;
ageMark = 30;

// Operation (Vergleich/Test)

let isJohnOlder = (ageJohn > ageMark);
console.log(isJohnOlder);

let isMarkOlder = (ageMark > ageJohn);
console.log(isMarkOlder);



























