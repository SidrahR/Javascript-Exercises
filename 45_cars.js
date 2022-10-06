// Cars: Write a function that stores information about a car in a Object.The function should always receive a manufacturer and a model name.It should then accept an arbitrary number of keyword arguments.Call the function with the required information and two other name - value pairs, such as a color or an optional feature.Print the Object that’s returned to make sure all the information was stored correctly.

function Car_info(manufacturer, model, ...features ){
  this.manufacturer=manufacturer;
  this.model=model;
  this.features = features;
}

var car1=new Car_info("Honda","Civic");
var car2=new Car_info("Toyota","Corolla", {color:"Blue"}, {interior:"Red"} );
console.log(car1);
console.log(car2);
