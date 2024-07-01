const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum);

/*const colors = ["red", "orange", "yellow", "green"];
colors[5] = "blue";
const iterator = colors.keys();
for (const key of iterator) {
	console.log(`${key}: ${colors[key]}`);

}*/

const colors = ["red", "yellow", "blue"];
colors[5] = "purple";
colors.forEach((item, index) => {
  console.log(`${index}: ${item}`);
});
