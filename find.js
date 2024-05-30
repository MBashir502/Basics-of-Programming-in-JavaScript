// find method

// const Data = ["Bashir", "Nasir", "Ali", "Kaleem"];
// const ans = Data.find((string) => {
//   return string.length === 3;
// });
// console.log(ans); // Output: "Ali"

// 2nd
const users = [
  { userId: 3, userName: "Ali", age: 23 },
  { userId: 5, userName: "Ahmad", age: 90 },
  { userId: 8, userName: "Ali Raza", age: 43 },
];

const ans = users.find((user) => {
  return user.userId === 5;
});
console.log(ans);
