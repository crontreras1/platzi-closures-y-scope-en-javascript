const myGlobal = 0; 

function myFunction () {
    const myNumber = 1;
    console.log (myGlobal);

    // función interna
    function parent () {
        const inner = 2;
        console.log (myNumber, myGlobal);


        // función dentro de otra función interna
        function child () {
            console.log (inner, myNumber, myGlobal);
        }

        return child ();
    }

    return parent ();
}

myFunction ();

// return: 
// 0
// 1 0
// 2 1 0