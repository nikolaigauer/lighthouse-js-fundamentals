var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

var whileList = 0;
while (whileList < ingredients.length) {
  whileList++;  // CHECK IT, WHEN THE CURLIES ARE LIKE THIS IT LISTS THE INGREDIENTS WITHOUT REPEATING
  // WORD. BUT! It begs the questions... why have the loop!
  // OOOOOOOOOOhhhohhhoo I see, hmmm

console.log("These are the contents of the ingredients array, listed using a    while loop: " + ingredients[whileList]); // are you wanting to output the whole array?
}

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
  console.log(e); // check the index
  console.log(ingredients[e]);
}
