// Function inside function

const pak = () => {
  const myFun = () => {
    console.log("My Function");
  };

  const sumTwoNum = (n1, n2) => {
    return n1 + n2;
  };

  console.log("Pakistan");
  myFun();
  console.log(sumTwoNum(2, 5));
};
pak();
