// Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make sure your comparison is case insensitive.If 'John' has been used, 'JOHN' should not be accepted.

// • Make a list of five or more usernames called current_users.
var current_users = ["Eric", "John", "Kate", "Dave", "Henry"];

// • Make another list of five usernames called new_users.Make sure one or two of the new usernames are also in the current_users list.
var new_users = ["Jeremy", "DAVE", "henry", "Rose", "Blake"];

// • Loop through the new_users list to see if each new username has already been used.If it has, print a message that the person will need to enter a new username.If a username has not been used, print a message saying that the username is available.
for (var i = 0 ; i< current_users.length; i++){
  for(var j=0 ; j< new_users.length; j++){
    if (current_users[i].toLowerCase() == new_users[j].toLowerCase()){
      console.log("User name " + current_users[i]+ " is already taken.");
    }
  }
}
