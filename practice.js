// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function(fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.

// I - array of numbers
// O - count of numbers that are multiples of 5
// C -
// E -

var multiplesOfFive = function(numbers) {
  var count = 0;

  _.each(numbers, function(number, index, collection) {
    if (number % 5 === 0) {
      count ++;
    }
  });

  return count;
};

/*
 *
 *  _.filter
 *
 */

// I - array of fruits
// O - fruit array with only the desired fruit
// C -
// E -

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function(fruits, targetFruit) {
  return _.filter (fruits, function (currentFruit) {
    return currentFruit === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function(fruits, letter) {
  return _.filter(fruits, function (currentFruit) {
    return currentFruit[0] === letter;
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function(desserts) {
  return _.filter (desserts, function (currentDessert) {
    return currentDessert.type === 'cookie';
  });
};

/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function(products) {
  return _.reduce(products, function (memo, currentProduct, index, list) {
    var price = parseFloat(currentProduct.price.substring(1));
    // reading numeric portion of price omitting $
    return memo + price;
  }, 0);
};

// return an object consisting of dessert types and how many of each.
// exampleOutput: { dessertType: 3, dessertType2: 1 }
var dessertCategories = function(desserts) {
  return _.reduce(desserts, function (memo, currentDessert, index, list) {
    // check currentDessert type
    var dessertType = currentDessert.type;
    // check if type exists in result object (memo)
    if (memo[dessertType] !== undefined) {
    // if it exists, add 1 to the count
      memo[dessertType] += 1;
    // if it does not exist, set memo[type] equal to 1
    } else {
      memo[dessertType] = 1;
    }
    return memo;
  }, {});
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!

// output - array of movie names that came out between 1990-2000

var ninetiesKid = function(movies) {
  return _.reduce(movies, function (memo, currentMovie, index, list) {
    // check currentMovie year
    var movieYear = currentMovie.releaseYear;
    // if movie year is between 1990-2000
    if (movieYear >= 1990 && movieYear <= 2000) {
      // push movie name into memo
      memo.push(currentMovie.title);
    }
    return memo;
  }, []);
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function(movies, timeLimit) {
  return _.reduce(movies, function(memo, currentMovie, index, list) {
    // check the currentMovie runtime
    var movieRuntime = currentMovie.runtime;
    // if movie runtime is less than or equal to timeLimit
    if (movieRuntime <= timeLimit) {
      memo = true;
    }
    return memo;
  }, false);
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters.
var upperCaseFruits = function(fruits) {
  return _.map(fruits, function (currentFruit, index, list) {
    return currentFruit.toUpperCase();
  });

};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
var glutenFree = function(desserts) {
  return _.map(desserts, function (currentDessert, index, list) {
    // look inside currentDessert ingredients
    if (currentDessert.ingredients.includes('flour')) {
      currentDessert.glutenFree = false;
    } else {
      currentDessert.glutenFree = true;
    }
    return currentDessert;
  });
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/
var applyCoupon = function(groceries, coupon) {
  return _.map (groceries, function (currentItem, index, list) {
    // look at currentItem price and read only numeric portion of price omitting $
    var price = parseFloat(currentItem.price.substring(1));
    // apply coupon to price
    var newPrice = price - (price * coupon);
    // add salePrice to object and include $ and fix to 2 decimals
    currentItem.salePrice = '$' + newPrice.toFixed(2);
    // return object
    return currentItem;
  });
};

