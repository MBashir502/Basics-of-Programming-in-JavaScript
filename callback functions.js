// callback functions
function myFun(a) {
  console.log("Pakistan");
}

function myFun2(callback) {
  console.log("This is my Callback Function...");
  callback();
}
myFun2(myFun);

