// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests.Have at least one True and one False result for each of the following:

// • Tests for equality and inequality with strings
var first_name = "John"
var second_name = "Elliot"
console.log("Is 'John' equal to 'Elliot'? ", first_name == second_name);
console.log("Is 'John' equal to 'John'? ", first_name == 'John');

// • Tests using the lower case function
console.log("Is 'John' equal to 'john'? ", first_name == first_name.toLowerCase());
console.log("Is 'john' equal to 'john'? ", first_name.toLowerCase() == first_name.toLowerCase());

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("1 + 1 = 2" , 1+1 == 2);
console.log("1 + 1 != 2" , 1+1 != 2);
console.log("1 + 1 > 2" , 1+1 > 2);
console.log("1 + 1 < 2" , 1+1 < 2);
console.log("1 + 1 >= 2" , 1+1 >= 2);
console.log("1 + 1 <= 2" , 1+1 <= 2);

// • Tests using "and" and "or" operators
console.log("1 + 1 = 2 AND 1 + 1 = 3 ", (1 + 1 == 2) && (1+1 == 3));
console.log("1 + 1 = 2 OR 1 + 1 == 2 ", (1 + 1 == 2) || (1 + 1 == 3));

// • Test whether an item is in a ar// • Test whether an item is not in a array
var numbers =  [20, 15, 22, 54]
console.log("Does 22 exist in array? ", numbers.indexOf(22, 0) != -1);
console.log("Does 35 exist in array? ", numbers.indexOf(35, 0) != -1);
