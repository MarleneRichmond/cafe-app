/**
 * Created by Tony Byrd on 5/10/18.
 */

var List = require('prompt-list');
var rp = require('request-promise');


// Greeting print out
console.log("Hi welcome to the CafeApp");


// prompt the user for input
// make call out to openWhisk
var options;
GetDrinkOptions();

async function GetDrinkOptions() {
  var url = "https://service.us.apiconnect.ibmcloud.com/gws/apigateway/api/8b7e1ac866b2c44743c235346ff74e566d8d51387bb261ec40bbbd7edf984843/menu/topLevel"
  var drinks = rp(url)
    .then(function(Drinks) {
      console.log("Drinks = ", Drinks)
      console.log("Drinks.options = ", Drinks[2])
      options = Drinks

  console.log("options.options = ", options.options)
  var list = new List({
  name: 'order',
  message: 'What would you like to order?',
    // choices may be defined as an array or a function that returns an array
  choices: options
  });
  list.run()
    .then(function(answer) {
        console.log(answer);
    });
})
}




// async
/*
list.ask(function(answer) {
    console.log(answer);
});
*/

// promise




// check there input and handle error (within the range)





