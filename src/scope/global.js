// Variables

var a; // Declarando la variable a sin asignar algún valor
var b = 'b'; // Declarando y asignando a la misma vez
b = 'bb'; // Reasignando un valor
var a = 'aa'; // Redeclaramos un valor

// Global Scope
var fruit = 'Apple'; // Global
console.log (fruit); 

function bestFruit () {
    console.log (fruit);
}

bestFruit (); 

function countries () {
    //No declarar una variable (var, let, const) la hace por defecto Global 
    country = 'Colombia';
    console.log (country);
}

countries ();
console.log (country);
