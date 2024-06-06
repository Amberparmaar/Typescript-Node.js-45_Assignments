//Seeing the World: Think of at least five places in the world you’d like to visit.

import { reverse } from "dns";

// Store the locations in a array. Make sure the array is not in alphabetical order.
let places : string[] = ['Paris', 'America', 'Egypt', 'Germany', 'Yamen'];

//Print your array in its original order.
console.log('original order:' ,places);

//Print your array in alphabetical order without modifying the actual list.
console.log("Alphabetical order :", [...places].sort());

//Show that your array is still in its original order by printing in.
console.log('original order:',places);

//Print your array in reverse alphabetical order without changing the order of the original list.
console.log('reverse alphabetical order:',[...places].sort().reverse());

// Show that your array is still in its original order by printing it again.
console.log(`original order:`,places);

//Reverse the order of your list. Print the array to show that its
//order has changed
places.reverse();
console.log(`reverse order:`,places);

//Reverse the order of your list again. Print the list to show it’s back to its original order
places.reverse();
console.log(`original order:`, places);

//Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

places.sort();
console.log(`alphbetical order:`, places.sort());

//Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.


places.reverse();
console.log(`Reversed alphabetical order:`, places.reverse());






