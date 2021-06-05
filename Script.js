let array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 }
];

for (let person of array) {

    // OPDRACHT 1 DE OBJECTEN.....................................................

    console.log("Dit zijn alle gegevens per persoon: ", person)


    // OPDRACHT 2 DE NAMEN........................................................

    console.log('Dit zijn de namen: ' + person.name)


    // OPDRACHT 3 GEBOORTEJAAR....................................................


    console.log(person.name + " is geboren in het jaar: " + (2021 - person.age))


    // OPDRACHT 4 NAMEN EN BEROEP.................................................

    console.log(person.name + " is een " + person.profession)


    // OPDRACHT 5 OUDER DAN 50 JAAR...............................................

    if (person.age >= 50) { console.log(person.name + " is ouder dan 50, namelijk: " + person.age) }

}


