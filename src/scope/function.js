function greeting () {
    let userName = 'Ana';
    console.log (userName);
    
    // === valor y tipo exactamente iguales 
    if (userName === 'Ana') {
        console.log (`Hello, ${userName}!`);
    } else {
        console.log ('Sorry, you are not Ana :(');
    }
}

greeting ();

// ReferenceError: userName is not defined => Esta fuera del Scope local, por eso el no la reconoce. 
console.log (userName);