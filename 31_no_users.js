// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.


var users = [];

if (users.length == 0){
  console.log ("We need to find some users!");
} 

for (var i = 0; i < users.length; i++) {
  if (users[i].includes("admin") == true) {
    console.log("Hello admin, would you like to see a status report ?"); 
  } else {
    console.log("Hello " + users[i] + ", thankyou for logging in again");
  }
}