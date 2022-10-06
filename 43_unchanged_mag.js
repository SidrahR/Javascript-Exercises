// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.Because the original array will be unchanged, return the new array and store it in a separate array.Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

function make_great(arr) {
  arr = arr.slice(0);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = "Great " + arr[i];
  }
  return arr;
}

function show_magicians(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log("Magician name is", arr[i]);
  }
}

magicians = ["Zahid", "Ahmed", "Sharjeel", "Waqas"];
var great_magicians = make_great(magicians);

show_magicians(magicians);
show_magicians(great_magicians);
