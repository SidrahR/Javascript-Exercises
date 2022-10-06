// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array.Make sure the array is not in alphabetical order.
var countries= ["Thailand", "Malaysia", "Pakistan", "Germany", "Japan"];

// • Print your array in its original order.
console.log("Original Array: " + countries);

// • Print your array in alphabetical order without modifying the actual list.
var sorted = countries.slice().sort();
console.log("Alphabetically Sorted: " + sorted);

// • Show that your array is still in its original order by printing it.
console.log("Original Array: " + countries);

// • Print your array in reverse alphabetical order without changing the order of the original list.
var reverse_sorted = sorted.slice().reverse();
console.log("Reverse Sorted: " + reverse_sorted);

// • Show that your array is still in its original order by printing it again.
console.log("Original Array: " + countries);

// • Reverse the order of your list.Print the array to show that its order has changed.
countries = countries.reverse();
console.log("Reversed Original: " + countries);

// • Reverse the order of your list again.Print the list to show it’s back to its original order.
countries = countries.reverse();
console.log("Reverted Original: " + countries);

// • Sort your array so it’s stored in alphabetical order.Print the array to show that its order has been changed.
countries = countries.sort();
console.log("Sorted Original: " + countries);

// • Sort to change your array so it’s stored in reverse alphabetical order.Print the list to show that its order has changed.
countries = countries.reverse();
console.log("Reversed Sorted Original: " + countries);