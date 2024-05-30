// Foreach method

// const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function myFun(number, index) {
//   console.log(`index is: ${index} and number is: ${number}`);
// }
// myArray.forEach(myFun);

// 2nd
// const myArray = [4, 5, 6, 7, 8, 9];
// myArray.forEach(function (number, index) {
//   console.log(`indx is ${index} number is:${number}`);
// });

// 3rd
// const myArray = [4, 5, 6, 7, 8, 9];
// myArray.forEach(function (number) {
//   console.log(number * 3);
// });

// 4th

const users = [
  { firstName: "Ali", lastName: " Raza", age: 24, City: "Lahore" },
  { firstName: "Ahmad", lastName: " Raza", age: 24, City: "Lahore" },
  { firstName: "Raza", lastName: " Raza", age: 24, City: "Lahore" },
  { firstName: "Bashir", lastName: "Ahmed", age: 24, City: "Lahore" },
];

users.forEach(function (user, index) {
  console.log(user.firstName, index);
});

// for of loop

// for (let user of users) {
//   console.log(user.City);
// }
