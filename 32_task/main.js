"use strict";
//. Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
Object.defineProperty(exports, "__esModule", { value: true });
//Make a list of five or more usernames called current_users.
var current_users = ["Amber", "FaHad", "FaIzan", "Hamza", "Ali"];
// Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users = ["FaHad", "FaIzan", "Wardah", "Zoya", "Asfand"];
// Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a
//new username. If a username has not been used, print a message saying that the username is available.
// Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
new_users.forEach(function (new_users) {
    if (current_users.some(function (current_users) { return current_users.toLowerCase(); })) {
        console.log("".concat(new_users, " will need to enter a new username."));
    }
    else {
        console.log("".concat(new_users, " is available."));
    }
});
