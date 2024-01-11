let student = {
  firstName: "Raja",
  lastName: "Ghosh",
  age: 12,
  //   getEmail: function () {
  //     return `${this.firstName}.${this.lastName}@gmail.com`;
  //   },
};
let teacher = {
  firstName: "Peter",
  lastName: "Parker",
  age: 12,
  //   getEmail: function () {
  //     return `${this.firstName}.${this.lastName}@gmail.com`;
  //   },
};
function getEmail() {
  return `${this.firstName}.${this.lastName}@gmail.com`;
}
function chooseSubject(sub1, sub2) {
  //   console.log(sub1, sub2);
  return [sub1, sub2];
}
// console.log(getEmail.call(teacher)); //o/p Peter.Parker@gmail.com
// console.log(chooseSubject.call(teacher, "maths", "english")); ->>> any type of params
console.log(chooseSubject.apply(teacher, ["maths", "english"])); //->>> only array type of params
console.log(getEmail.bind(teacher)()); //->>> only bind the function and use it later
// console.log(getEmail.call(student));
