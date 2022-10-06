// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.


var guests = ["Rizwan", "Nazish", "Ahmed"];

console.log("We will be inviting " + guests.length + " guests for dinner");

for (var i = 0; i < guests.length; i++) {
  console.log("Looking forward to meet you at dinner tonight " + guests[i]);
}