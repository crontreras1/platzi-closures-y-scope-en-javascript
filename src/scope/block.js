function fruits () {
    if (true) {
        var fruit1 = 'Apple'; // var = Function Scope
        let fruit2 = 'Kiwi'; // let = Block Scope
        const fruit3 = 'Banana'; // const = Block Scope

        console.log (fruit2);
        console.log (fruit3);
    }

    console.log (fruit1);
}

fruits ();

// Return:
// Kiwi
// Banana
// Apple
