//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// Tests for equality and inequality with strings
console.log("equality with string:", 'Apple' == 'Apple');
console.log("inequality with strings:", 'Apple' != 'mango');
// Tests using the lower case function
console.log("mango".toLowerCase() == 'mango');
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log(100 < 250);
console.log(100 == 100);
console.log(50 > 49);
console.log(50 !== 40);
console.log(50 <= 49);
// Tests using "and" and "or" operators
console.log("Apple" && "Banana");
console.log("Apple" || "banana");
//  Test whether an item is in a array 
var fruits = ['Apple', 'Banana', 'kiwi', 'orange'];
console.log('fruit "Banana"  is in the array:', fruits.includes("Banana"));
// Test whether an item is not in the array 
console.log(!fruits.includes("peach"));
