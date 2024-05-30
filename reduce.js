//Reduce Method

// const data = [1, 2, 3, 4, 5];
// const sum = data.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// });
// console.log(sum);

// working of Reduce
// accumulator , currentValue   , return
//  1          +    2           ,  3
//  3          +    3           ,  6
//  6          +    4           ,  10
//  10         +    5           ,  15

//2nd

const addToCard = [
  { productId: "21", productName: "Mobile", price: 2400 },
  { productId: "50", productName: "Laptop", price: 2500 },
  { productId: "100", productName: "LCD", price: 2600 },
];
const totalAmount = addToCard.reduce((totalPrice, currentProduct) => {
  return totalPrice + currentProduct.price;
}, 0);
console.log(totalAmount);
