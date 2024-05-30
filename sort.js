// sort method

//Ascii Table
// char: ascii value
// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// ':' : 58
// ':' : 59
// '<' : 60
// '=' : 61
// '>' : 62
// '?' : 63
// '@' : 64

// const data = [12.34, 444, 500, 2, 4, 1];
// data.sort();
// console.log(data);

//2nd
const data = [12.34, 444, 500, 2, 4, 1];
data.sort((a, b) => {
  return a - b;
});
console.log(data);
