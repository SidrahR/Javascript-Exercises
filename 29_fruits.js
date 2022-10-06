// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements.Each should check whether a certain kind of fruit is in your array.If the fruit is in your array, the if block should print a statement, such as You really like bananas!

var fav_fruits = ["Apple", "Mango", "Grapes"];

if (fav_fruits.includes("Banana") == true ){
  console.log("You really like bananas!");
} else if (fav_fruits.includes("Peach") == true) {
  console.log("You really like peaches!");
} else if (fav_fruits.includes("Mango") == true) {
  console.log("You really like mangoes!");
} else if (fav_fruits.includes("Apple") == true) {
  console.log("You really like apples!");
} else if (fav_fruits.includes("Grapes") == true) {
  console.log("You really like grapes!");
} 