// Je gaat functies schrijven die we kunnen hergebruiken om een lijst met eindcijfers van studenten te checken. Je zult over de cijfers heen moeten itereren (hoe pak je dat aan?),
// maar ook een manier moeten vinden om hetgeen dat je verzamelt ergens te bundelen. Op deze manier zul je ontdekken hoe je omgaat met scope. Pak vooral het hoofdstuk op EdHub over for-loops er nog eens bij!
// Tip: je mag hier geen ingebouwde object methoden gebruiken, dus daar hoef je niet naar te kijken.

const grades = [9, 8, 5, 7, 7, 4, 9, 8, 8, 3, 6, 8, 5, 6];

/* Opdracht  1: Cum Laude */

/* 1a: Script schrijven  */
// De administratie moet weten hoeveel studenten er dit blok cum laude zijn afgestudeerd (8 of hoger). Daar moeten namelijk speciale diploma's voor besteld worden.
// Schrijf de stapjes om dit te kunnen checken eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array checken op deze conditie?
// * Hoe zorg ik ervoor dat dit ook werkt wanneer de array 100 entries bevat?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan bijhouden?
// Log het antwoord in de terminal.


// Oplossing Marjet:
let amountOfCumLaude = 0

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8) {
        amountOfCumLaude = amountOfCumLaude + 1;
    }
}
console.log(amountOfCumLaude);

// Oplossing Damon :
let cumLaudeList = []; // Dit had geen Array hoeven te zijn, dit had een nummer kunnen zijn van geslaagde studenten.

for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 8 ) {
        cumLaudeList.push(grades[i]); // push voegt hem toe aan de array, overschrijft niks, ik moet niet de index ophalen maar de waarde in de index (pak de naam van de grades)
    }
}

console.log(cumLaudeList.length);
/*console.log(cumLaudeList.pop()); // pop zorgt dat het element uit de array gehaald wordt. Dit was alleen handig in het geval dat ik de waarde (getal van 6 inhoud) van de cumLaudeList wilde ophalen, en niet wat er in de 6 plekken van de array stond.*/
/*console.log(cumLaudeList.length)*/; // Waarom geeft dit alleen 1, ik heb toch meer waardes in mijn array? -> omdat hij kijkt naar HOEVEEL waardes er in de array zitten (nog maar 1 door .pop)
// ---- Verwachte uitkomst: 6


/*  1b: Omschrijven tot een herbruikbare functie   */
// Schrijf een functie genaamd cumLaude, die een array van cijfers verwacht (zoals grades) en het aantal Cum laude studenten teruggeeft. Gebruik hiervoor jouw antwoord van 1a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array met eindcijfers willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function cumLaude(numbers) {
    let cumLaudeList = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 8) {
            cumLaudeList.push(numbers[i]); // push voegt hem toe aan de array, overschrijft niks
        }
    }
    return cumLaudeList.length; // in plaats van: return cumLaudeList, heb je .length nodig om te zien hoeveel items erin zitten.
}

console.log(cumLaude(grades));
console.log(cumLaude([6, 4, 5]));
console.log(cumLaude([8, 9, 4, 6, 10]));

// ---- Verwachte uitkomsten:
// cumLaude(grades) geeft 6
// cumLaude([6, 4, 5]) geeft 0
// cumLaude([8, 9, 4, 6, 10]) geeft 3




/* Opdracht  2: Gemiddeld cijfer */

/* 2a: Script schrijven  */
// De studenten-administratie moet ieder blok opnieuw berekenen wat het gemiddelde eindcijfer is, maar we beginnen met de grades array van hierboven.
// Schrijf de stapjes om dit te kunnen berekenen eerst uit en vraag jezelf de volgende dingen af:
// * Hoe wordt een gemiddelde berekend?
// * Wat moet ik verzamelen uit de array van cijfers om uiteindelijk een gemiddelde te kunnen berekenen?
// * Hoe zorgt ik ervoor dat ik alle waardes uit de array kan langslopen, ook als de array wel 100 entries zou bevatten?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 6.642857142857143

//array losse elementen van maken en dit + elkaar doen.

/* ----- Oplossing 1, niet gelukt --------
let totalNumber = 0;
for (let i = 0; i < grades.length; i++) { // zorgt dat je overal over kan itereren // in javascript moet je een let of constant defineren?
    if (grades[i] < grades.length) {
        totalNumber = + grades.shift(); // zorgt ervoor dat je het eerst item uit je array kan halen.
    } else {
        let avarage = totalNumber / grades.length; // eerst moet je de for loop helemaal door voordat je dit uitrekent. // grades.length // laat zien door hoeveel je het moet delen.
        console.log(avarage);
    }
}
*/


let totalNumber = 0;
for (let i = 0; i < grades.length; i++) {
    totalNumber += grades[i];
}

const average = totalNumber / grades.length;
console.log(average);

/* 2b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd averageGrade, die een array van cijfers verwacht (zoals grades) en het gemiddelde cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 2a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

function averageGrade(numbers) {
    let totalNumber = 0;
    for (let i = 0; i < numbers.length; i++) {
        totalNumber += numbers[i];
    }
    return totalNumber / numbers.length;
}

// ---- Verwachte uitkomsten:
// averageGrade(grades) geeft 6.642857142857143
// averageGrade([6, 4, 5]) geeft xxxx
// averageGrade([8, 9, 4, 6, 10]) geeft xxxx

console.log(averageGrade(grades));
console.log(averageGrade([6, 4, 5]));
console.log(averageGrade([8, 9, 4, 6, 10]));

/* 2c: Afronden op twee decimalen */
// Zorg ervoor dat het gemiddelde cijfer dat wordt teruggegeven uit de functie netjes wordt afgerond op twee decimalen.
// Tip: Google is your best friend!


function averageGrade2(numbers) {
    let totalNumber2 = 0;
    for (let i = 0; i < numbers.length; i++) {
        totalNumber2 += numbers[i];
    }
    totalNumber2 = totalNumber2 / numbers.length;
    return Math.round(totalNumber2);
}

console.log(averageGrade2(grades));


/* Bonusopdracht: hoogste cijfer */

/* 3a: Script schrijven  */
// Schrijf een script die op basis van de grades array (hierboven) checkt wat het hoogst behaalde cijfer is. Je mag hier geen bestaande methoden voor gebruiken. Schrijf de stapjes eerst uit en vraag jezelf de volgende dingen af:
// * Hoe kan ik iedere waarde van de array langsgaan?
// * Op welke conditie moet ik checken?
// * Hoe zorgt ik ervoor dat wanneer ik een cijfer tegenkom die aan de conditie voldoet, ik dit ergens kan opslaan?
// Log het antwoord in de terminal.

// ---- Verwachte uitkomst: 9


/* 3b: Omschrijven tot een herbruikbare functie */
// Schrijf een functie genaamd highestGrade, die een array van cijfers verwacht (zoals grades) en het hoogste cijfer teruggeeft. Gebruik hiervoor jouw antwoord van 3a.
// Zorg ervoor dat jouw functie ook werkt als we een andere array willen checken, zoals bijvoorbeeld: [6, 4, 5] of [8, 9, 4, 6, 10].
// Log het antwoord in de terminal.

// ---- Verwachte uitkomsten:
// highestGrade(grades) geeft 9
// highestGrade([6, 4, 5]) geeft 6
// highestGrade([8, 9, 4, 6, 10]) geeft 10
