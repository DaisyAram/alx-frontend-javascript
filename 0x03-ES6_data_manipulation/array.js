const fruits = ["apple", "orange", "banana"];
const fruitsString = fruits.join(", ");
console.log(fruitsString);

const fruits2 = new Array("apple", "lime", "orange", "banana");
console.log(fruits2);

const fruits3 = "apple, orange, banana".split(", ");
console.log(fruits3.length);

const fruits4 = ["guava", "banana", "pineapple", "passion", "orange"];
console.log(fruits4[0]);

const fruits5 = ["guava", "banana", "pineapple", "passion", "orange"];
console.log(fruits5.indexOf("pineapple"));

const fruits6 = ["banana", "pineapple", "passion", "orange"];
console.log(fruits6.includes("apple"));
console.log(fruits6.includes("banana"));

console.log(fruits6.indexOf("apple") !== -1);
console.log(fruits6.indexOf("banana") !== -1);


const fruits7 = ["grape", "guava", "banana", "pineapple", "passion", "orange"];
const newLength = fruits7.push("thorn mellon");
console.log(fruits7);
console.log(newLength);

const fruits8 = ["grape", "guava", "banana", "pineapple", "passion", "orange"];
const removedItem = fruits8.pop();
const removedItems = fruits8.splice(-3);
const removesItems = fruits8.shift();
console.log(fruits8);
console.log(removedItem);
console.log(removedItems);
console.log(removesItems);


const vehicles = ["BMW", "Mercedes Benz", "Toyota", "Porsche", "Mazda"]
const newVehicles = vehicles.unshift("Bugatti");
console.log(vehicles);
console.log(newVehicles);

const countries = ["Kenya", "Uganda", "Tanzania", "Djibouti", "Eritrea", "Mozambique"];
for (const country of countries) {
  console.log(country);
}

const ctry = ["Kenya", "Uganda", "Tanzania", "Djibouti", "Eritrea", "Mozambique"];
countries.forEach((item, index, array) => {
  console.log(item, index);
});
