// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
var guests = ['Shoukat', 'Fahad', 'Faizan', 'Zoya', 'Asfand'];
//Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log('Due to limited space , only two people can be invited for dinner.');
// Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print
//a message to that person letting them know you’re sorry you can’t invite them to dinner.
while (guests.length > 2) {
    var removeGuest = guests.pop();
    console.log("Sorry, ".concat(removeGuest, ", I can't invite you to dinner."));
}
//Print a message to each of the two people still on your list, letting them know they’re still invited.
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you are still invited for dinner."));
});
//Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end
//of your prog
guests.splice(0, guests.length);
console.log(guests);
