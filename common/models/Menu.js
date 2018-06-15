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
  Menu.coldDrinks = function( cb) {
    process.nextTick(function() {
      cb(null, ["Iced Coffee","Iced Caramel Machiato", "Iced Dark Mocha", "Iced White Mocha","Iced Americano", "Iced Latte",
            "Iced Vanilla Latte", "Frappuccino", "Smoothies","Iced Tazo Tea"]);
    });
  };
 Menu.starbucksFood = function( cb) {
    process.nextTick(function() {
      cb(null, ["Muffins", "Breakfast Sandwich", "Scone","Bagel", "Coffee Cake","Parfait", "Fruit Cup","Eggs","Chips",
     "Biscotti","Coffee Bites","Kind Bar","Candy","Luna Bar","Lunch Combo","Gum","Mints","Shortbread Cookies",
        "Cookies","String Cheese"]);
    });
  };
   Menu.cafeMenu = function( cb) {
    process.nextTick(function() {
      cb(null, ["Flame Grill"," Butcher and Bakery", "Hot Line", "Entree","Salad Bar", "Chips","Beverages","Candy"]);
    });
  };
 Menu.drinkSize = function( cb) {
    process.nextTick(function() {
      cb(null, ["Tall", "Grande", "Venti"]);
    });
  };
  Menu.coldDrinkSize = function( cb) {
    process.nextTick(function() {
      cb(null, ["Grande", "Venti"]);
    });
  };
  Menu.syrupMenu = function( cb) {
    process.nextTick(function() {
      cb(null, ["No syrup", "Vanilla","Sugarfree Vanilla","Caramel","Hazel Nut","Toffee Nut","Cinnamon Dolce",
      "Sugarfree Cinnamon Dolce","Classic","Peppermint"]);
    });
  };
  Menu.shotPrompt = function( cb) {
    process.nextTick(function() {
      cb(null, ["No thanks", "1", "2", "Dave style"]);
    });
  };


};

