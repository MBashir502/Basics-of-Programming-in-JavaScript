//for in loop in Array

const items = ["item1", "item2", "item3", "item4", "item5"];
const item2 = [];
for (let item in items) {
  item2.push(items[item]);
}
console.log(item2);
