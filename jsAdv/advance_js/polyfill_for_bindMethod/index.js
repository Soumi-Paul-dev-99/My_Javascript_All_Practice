let name = {
  firstName: "rituparna",
  lastName: "ghosh",
};

let printName = function (homeTown, state) {
  console.log(
    this.firstName + " " + this.lastName + ". " + homeTown + ". " + state
  );
};

const printMyname = printName.bind(name, "Dehradun");
printMyname("uttrakhand");

Function.prototype.myBind = function (...args) {
  let obj = this;
  params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};
const printMyname2 = printName.myBind(name, "Dehradun");
printMyname2("uttrakhand");
