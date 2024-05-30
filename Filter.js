// Filter Method
// const numbers = [2, 3, 4, 5];
// const myFun = function (number) {
//   return number % 2 === 0;
// };
// const newNumber = numbers.filter(myFun);
// console.log(newNumber);

// 2nd
const numbers = [2, 3, 4, 5];
const myFun = function (number) {
  return number % 2 !== 0;
};
const newNumber = numbers.filter(myFun);
console.log(newNumber);
