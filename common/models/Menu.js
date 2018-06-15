module.exports = function(Menu) {
  Menu.topMenu = function( cb) {
    process.nextTick(function() {
      cb(null, ["Cafeteria", "Starbucks", "Catering", "Merchandise"]);
    });
  };
   Menu.starbucksMenu = function( cb) {
    process.nextTick(function() {
      cb(null, ["Coffee", "Cold Drinks/Iced Coffee", "Food", "Merchandise"]);
    });
  };
  Menu.coffeeDrinks = function( cb) {
    process.nextTick(function() {
      cb(null, ["Coffee","Caramel Machiato", "Dark Mocha", "White Mocha","Americano", "Latte",
            "Vanilla Latte", "Cappucino", "Hot Chocolate","Espresso Shots","Tazo Tea"]);
    });
  };


};

