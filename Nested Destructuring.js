// Nested Destructuring
const users = [
  { id: 1, name: "Muhammad Bashir", age: 23 },
  { id: 2, name: "Bashir", age: 23 },
  { id: 3, name: "Ali", age: 23 },
];

const [{ id: userId }, { name: userName }, { age }] = users;
console.log(userId);
console.log(userName);
console.log(age);
