// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
var guests = ["Hira", "Rizwan", "Noreen", "Zain", "Ahmed", "Saira"];
console.log("We can invite only two people for dinner");

// • Remove guests from your list one at a time until only two names remain in your list.Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
for(var i= guests.length ; i > 2 ; i--){
  console.log("Dear " + guests.pop() + ", we are sorry to inform that that you are not invited for dinner");
}

// • Print a message to each of the two people still on your list, letting them know they’re still invited.
for (var i = 0; i < guests.length; i++) {
  console.log(guests[i] + " you are still invited for dinner tonight");
}


// • Remove the last two names from your list, so you have an empty list.
for (var i = guests.length; i > 0 ; i--) {
  guests.pop();
}

//Print your list to make sure you actually have an empty list at the end of your program.
console.log("Printing empty list" + guests);