//. Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user
//after they log in to a website. Loop through the array, and print a greeting to each user:
let usernames : string[] = ["Admin", "Eric", "Wardah", "Ali", "Hamza"];
//If the username is 'admin', print a special greeting, such as

for (let i = 0; i < usernames.length; i++){
if(usernames[i] === "Admin"){
    console.log("Hello admin, would you like to see a status report?");

//Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
} else{
    console.log(`Hello ${usernames[i]}, thank you for logging in again.`)

  } 
}