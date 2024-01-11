//constructor function
// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;
// }

// const rakeshAccount = new BankAccount("Rakesh K");
// const johnAccount = new BankAccount("John Doe", 1000);

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

// johnAccount.withdraw(500);

// console.log(johnAccount);

//how we convert constructor function converted into classes
class BankAccount {
  customerName;
  accountNumber = Date.now();
  balance = 0;

  constructor(customerName, balance = 0) {
    //a constructor function is present in class
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.balance = balance;
  }

  deposit(amount) {
    this.balance += amount;
  }
}

const rituAccount = new BankAccount("Riya", 3000);

rituAccount.deposit(1000);

console.log(rituAccount);
