// Spread operator in objects

const obj1 = {
  key1: "Mobile Data",
  key2: "Laptop Data",
};
const obj2 = {
  key3: "Mobile ",
  key4: "Laptop",
  key5: "Ali",
};
const newObj = { ...obj1, ...obj2, key: "Apple" };
console.log(newObj);
