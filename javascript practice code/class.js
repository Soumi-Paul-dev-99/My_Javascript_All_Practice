//defining class using es6

// class Vahicle {
//   constructor(name, maker, engine) {
//     this.name = name;
//     this.engine = engine;
//     this.maker = maker;
//     }
//     getDetails() {
//         return (`The name of the bike is ${this.name}`)
//     }
// }

// //Making object with the help of the contructor
// let bike1 = new Vahicle("honda","sujuki","1323dd")
// let bike2 = new Vahicle("hondasdas", "sujsdsasdsuki", "13sds23dd");

// console.log(bike1.getDetails());
// console.log(bike2.maker);
// console.log(bike1.name);



function Banker(Bank_name, Bank_address , balence=0) {
  this.Bank_name = Bank_name;
    this.Bank_address = Bank_address;
    this.balence = balence;
    this.accountNumber = Date.now()

    this.deposit = function (amount) {
        this.balence += amount;
    };

    this.withdraw = (amount) => {
        this.balence -= amount;
    };
}
let bank1 = new Banker("kotack", "khyanan", 452755)
let bank2 = new Banker("mahindra", "bagri");

bank1.deposit(1000)
console.log(bank1.Bank_name);
console.log(bank2.Bank_address);
console.log(bank1,bank2)