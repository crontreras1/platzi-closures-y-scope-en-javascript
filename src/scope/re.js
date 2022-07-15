// var

var firstName; // declara
firstName = 'Cristian'; // asigna 
console.log (firstName);

// return:
// Cristian

var lastName = 'Camilo'; // declara + asigna
lastName = 'Andres'; // reasigna
console.log (lastName);

// return:
// Andres

var secondName = 'Cristian'; // declara + asigna
var secondName = 'Camilo'; // redeclara + reasigna
console.log (secondName); 

// return:
// Camilo

// let 

let fruit = 'Apple'; // declara + asigna
fruit = 'Kiwi'; // reasignar
console.log (fruit);

// return:
// Kiwi

let fruit = 'Banana'; //let no se puede redeclarar
console.log (fruit);

// return:
// SyntaxError: Identifier 'fruit' has already been declared

// const 

const animal = 'Dog'; // declara y asigna
animal = 'Cat'; // reasignar
console.log (animal);

// return:
// TypeError: Assignment to constant variable.

const animal2 = 'Horse';
const animal2 = 'Snake';
console.log (animal2);

// return:
// SyntaxError: Identifier 'animal2' has already been declared

const vehicles = [];
vehicles.push ('Car');
console.log (vehicles);

// return:
// [ 'Car' ]

vehicles.pop ('Car');
console.log (vehicles);

// return:
// []