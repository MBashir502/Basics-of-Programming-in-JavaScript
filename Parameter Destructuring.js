// Parameter Destructuring
// object using a React

const person = {
  firstName: "Muhammad Bashir",
  lastName: "Bashir",
  age: 24,
  city: "Lahore",
};
function personDetails({ firstName, lastName, age, city }) {
  console.log(firstName);
  console.log(lastName);
  console.log(age);
  console.log(city);
}
personDetails(person);
