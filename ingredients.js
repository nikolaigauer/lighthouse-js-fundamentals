var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("List of the items in the ingredients array made using a while loop:")
var whileList = 0;
while (whileList < ingredients.length) {
  console.log(ingredients[whileList]);
  whileList++;
}
console.log("\n") // Line break so it separates the two lists


// Write a for loop that prints out the contents of ingredients:
console.log("List of the items in the ingredients array made using a for loop:")
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
console.log("\n") // Line break so it separates the two lists


// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("List of the items in the ingredients array in reverse made using a for loop:")
for (var e = ingredients.length - 1; e >= 0; e--) { // Subtracting 1 from the array items to achieve correct count from 0
  console.log(ingredients[e]);
}