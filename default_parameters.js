// Default Parameters

// function addTwoNum(a, b) {
//   if (typeof b === "undefined") {
//     b = 5;
//   }
//   return a + b;
// }
// console.log(addTwoNum(2));

// 2nd method
function addTwoNum(a, b = 7) {
  return a + b;
}
console.log(addTwoNum(2));
