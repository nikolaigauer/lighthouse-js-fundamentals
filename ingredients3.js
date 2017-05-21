var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// A new while loop
var it = 0;
while (it < ingredients.length) {
  console.log(ingredients[it]);
  it++; // this needs to be at the bottom, meaning, the last thing that happens in each iteration of the loop
}
// look at this, it doesn't work, but it looks the same what you wrote earlier
// this does work; yeah, it's the same
var whileList = 0;
while (whileList < ingredients.length) {
  var msg = "This is an ingredient:";
  // and you can checck the value and set a custom message for an ingredient
  if (ingredients[whileList] === 'eggs') {
    msg = 'eggs are gross!'
  }

  // or you can set a variable and pass it to console.log
  console.log(msg, ingredients[whileList]);

  whileList++;

}

// loop 1
// it = 0, length = 8
// log ingredients[0]
// set it = 1

// loop 2
// it = 1, length = 8
// log ingredients[0]
// set it = 2

// ... etc until:

// loop 8
// it = 7, length = 8
// log ingredients[0]
// set it = 8

// loop 9
// Fails because 8 is not less than 8





// Write a while loop that prints out the contents of ingredients:

var whileList = 0;
while (whileList < ingredients.length) {
  whileList++; } // CHECK IT, WHEN THE CURLIES ARE LIKE THIS IT LISTS THE INGREDIENTS WITHOUT REPEATING
  // WORD. BUT! It begs the questions... why have the loop!
  // OOOOOOOOOOhhhohhhoo I see, hmmm

console.log("These are the contents of the ingredients array, listed using a    while loop: " + ingredients); // are you wanting to output the whole array?


console.log("\n") // Line break so it separates the two lists

// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}

console.log("\n") // Line break so it separates the two lists

// Write any loop (while or for) that prints out the contents of ingredients backwards:
// subtract 1 from ingredients.length to get the last index
// e should also be >= 0. Otherwise it would wouldn't go past 1
for (var e = ingredients.length - 1; e >= 0; e--) {
  // console.log(e); // check the index - -RIGHT HERE SEEE????
  console.log(ingredients[e]);
}
