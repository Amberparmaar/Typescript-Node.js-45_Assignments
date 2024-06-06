"use strict";
// . Sandwiches: Write a function that accepts a array of items a person wants
// on a sandwich. The function should have one parameter that collects as many
// items as the function call provides, and it should print a summary of the sandwich
// that is being ordered. Call the function three times, using a different number
// of arguments each time.
Object.defineProperty(exports, "__esModule", { value: true });
//recipe of sandwich => ingridient : bread as required, slice of omellet, salt as required, piece of chicken,
//mayonnise, ketchep.
function makeSandwich(ingridients) {
    console.log(`Make a Sandwich with`);
    for (let i = 0; i < ingridients.length; i++) {
        console.log(` - ${ingridients[i]}`);
    }
}
makeSandwich(['bread', 'slice of omellet', 'salt', 'piece of chicken', 'mayonnise', 'ketchup']);
makeSandwich(['bread', 'salt', 'piece of chicken', 'mayonise', ' chilli sauce']);
makeSandwich(['bread', 'slice of omellet', 'salt', 'fries']);
