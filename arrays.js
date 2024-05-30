// Intro to arrays ---> odered collection of array
// array object
// let fruits = ["apple", "Mango", "grapes"];
// console.log(fruits[1]);
// fruits[1] = "Item1";
// console.log( fruits[1]);
// console.log(typeof fruits);
// console.log(Array.isArray(fruits));

// array push pop and shift unshift

//push
// let fruits = ["apple", "Mango", "grapes"];
// fruits.push("Insert");
// console.log(fruits);

//pop
// let fruits = ["apple", "Mango", "grapes"];
// console.log(fruits);
// let store = fruits.pop();
// console.log(fruits);
// console.log("pop fruit is: ", store);

// shift
// let fruits = [
//   "item0",
//   "item1",
//   "item2",
//   "item3",
//   "item4",
//   "item5",
//   "item6",
//   "item7",
// ];
// console.log(fruits);
// fruits.push("item8"); --------> push
// console.log(fruits);
// fruits.pop(); ------------------>pop
// console.log(fruits);
// fruits.unshift("item9"); --------->unshift
// console.log(fruits);
// fruits.shift(""); --------------->shift
// console.log(fruits);
//**************************************** */
// Primitive vs reference data types
//Primitive
// let num1 = 8;
// let num2 = num1;
// console.log(num1);
// console.log(num2);
// num1++;
// console.log("After increse num1");
// console.log(num1);
// console.log(num2);

// reference
// let array1 = ["apple", "Mango", "grapes"];
// let array2 = array1;
// console.log(array1);
// console.log(array2);
// array1.push("Insert");
// console.log("After increse array1");
// console.log(array1);
// console.log(array2);

//  Clone array
// let array1 = ["item1", "item2", "item3"];
// let array2 = array1.slice(0);
// array2.unshift("item0");
// console.log(array1);
// console.log(array2);

// 2nd

// let array1 = ["item1", "item2", "item3"];
// let array2 = array1.slice(0).concat(["Ali", "Ahmad"]);
// array2.unshift("item0");
// console.log(array1);
// console.log(array2);

// spread operator
// let array1 = ["apple", "Mango", "grapes"];
// let array2 = [...array1];
// array1.push("item23");
// console.log(array1);
// console.log(array2);
// console.log(array1 ===array2);

//2nd

// let array1 = ["apple", "Mango", "grapes"];
// let array2 = [...array1, "Ali", "Bashir"];
// array1.push("item23");
// console.log(array1);
// console.log(array2);
// console.log(array1 === array2);

// 3rd

// let array1 = ["apple", "Mango", "grapes"];
// let array3 = ["Ali", "Ahmad", "Bashir"];
// let array2 = [...array1, "Ali", "Bashir", ...array3];
// array1.push("item23");
// console.log(array1);
// console.log(array2);

// for loop array
// let fruits = ["Apple", "Grapes", "Mango"];
// console.log(fruits.length);
// console.log(fruits[fruits.length - 1]);
// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i].toUpperCase());
// }

// 2nd
// let fruits = ["Apple", "Grapes", "Mango"];
// let array1 = [];
// for (let i = 0; i < fruits.length; i++) {
//   array1.push(fruits[i].toUpperCase());
// }
// console.log(array1);
