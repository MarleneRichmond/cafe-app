/**
 * Created by Tony Byrd on 5/10/18.
 */

var List = require('prompt-list');
var rp = require('request-promise');


// Greeting print out
console.log("Hi welcome to the CafeApp");


// prompt the user for input
// make call out to openWhisk
var options = ['Coke',
    'Diet Coke',
    'Cherry Coke',
    {name: 'Sprite', disabled: 'Temporarily unavailable'},
    'Water'];

var list = new List({
    name: 'order',
    message: 'What would you like to order?',
    // choices may be defined as an array or a function that returns an array
    choices: options
});

// async
/*
list.ask(function(answer) {
    console.log(answer);
});
*/

// promise
list.run()
    .then(function(answer) {
        console.log(answer);
    });



// check there input and handle error (within the range)





