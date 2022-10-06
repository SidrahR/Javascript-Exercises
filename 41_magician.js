// Magicians: Make a array of magician’s names.Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

function show_magicians(arr){
  for(var i =0; i<arr.length; i++){
    console.log(arr[i]);
  }
}

magicians = ["Zahid", "Ahmed", "Sharjeel", "Waqas"];
show_magicians(magicians);