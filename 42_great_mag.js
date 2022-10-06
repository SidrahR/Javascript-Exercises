// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.Call show_magicians() to see that the list has actually been modified.

function make_great(arr) {
  for (var i = 0; i < arr.length; i++) {
    arr[i] = "Great " + arr[i];
  }
}

function show_magicians(arr) {
  for (var i = 0; i < arr.length; i++) {
    console.log("Magician name is", arr[i]);
  }
}

magicians = ["Zahid", "Ahmed", "Sharjeel", "Waqas"];
console.log("Orginal Array:", magicians);
make_great(magicians);
show_magicians(magicians);
