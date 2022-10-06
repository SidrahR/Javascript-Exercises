// More Guests: You just found a bigger dinner table, so now more space is available.Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
var guests = ["Rizwan", "Zain", "Ahmed"];
for (var i = 0; i < guests.length; i++) {
  console.log("Dear " + guests[i]+", more guests will be joining us on a bigger table");
}

// • Add one new guest to the beginning of your array.
guests.unshift("Hira");

// • Add one new guest to the middle of your array.
guests.splice(2,0,"Noreen");

 //• Use append() to add one new guest to the end of your list.
//guests.append("Saira"); //Not an array function
guests.push("Saira")

 //• Print a new set of invitation messages, one for each person in your list.
for (var i = 0; i < guests.length; i++) {
  console.log("Looking forward to meet you at dinner tonight " + guests[i]);
}