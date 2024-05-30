// Block Scope Vs Function Scope
// Block Scope
// let  and const Block Scope
{
  let firstName = "Pakistan";
  console.log(firstName);
}
{
  const firstName = "Pakistan Zinda Bad";
  console.log(firstName);
}
// Function Scope
//var Function Scope
{
  var firstName = "Pakistan Zinda Bad";
}
console.log(firstName);

