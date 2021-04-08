(function(){
    "use strict";

    // TODO: Create an array of 4 people's names using literal array notation, in a variable called 'names'.
    var names = ["Christian", "Marina", "Miyavi", "Theo"];
    // TODO: Create a log statement that will log the number of elements in the names array.
    console.log ("There are " + names.length + " names.");
    // TODO: Create log statements that will print each of the names array elements individually.
    for (var x = 0; x < names.length; x++){
        console.log("The name at index " + x + " is " + names[x]);
    }
    names.forEach(function (element, index){
        console.log("The name at index " + index + " is " + element);
    });

   })();
