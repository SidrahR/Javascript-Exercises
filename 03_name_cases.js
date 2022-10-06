// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

var name = "David white";
console.log(name.toLowerCase());
console.log(name.toUpperCase());

var name_split = name.split(" ");

for (var i=0  ; i<name_split.length; i++){
  name_split[i] = name_split[i].charAt(0).toUpperCase() + name_split[i].slice(1);
}
console.log(name_split.join(" "))

