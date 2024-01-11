//WITH CLASS
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
  withdraw(amount) {
    this.balance -= amount;
  }
}

class CurrentAccount extends BankAccount {
  transactionLimit = 50000;

  constructor(customerName, balance = 0) {
    //super: when we construct from any class firstly call super constructor
    super(customerName, balance);
  }

  takeBusinessLoan(amount) {
    console.log("taking business loan:" + amount);
  }
}

class SavingAccount extends BankAccount {
  transactionLimit = 10000;

  constructor(customerName, balance = 0) {
    //super: when we construct from any class firstly call super constructor
    super(customerName, balance);
  }

  takePersonalLoan(amount) {
    console.log("taking personal loan:" + amount);
  }
}

const rituAccount = new SavingAccount("Riya", 3000);

// rituAccount.deposit(1000);
rituAccount.withdraw(1000);
rituAccount.takePersonalLoan(4000);

console.log(rituAccount);

//FUNCTION
// function BankAccount(customerName, balance = 0) {
//   this.customerName = customerName;
//   this.accountNumber = Date.now();
//   this.balance = balance;
// }

// BankAccount.prototype.deposit = function (amount) {
//   this.balance += amount;
// };

// BankAccount.prototype.withdraw = function (amount) {
//   this.balance -= amount;
// };

// function CurrentAccount(customerName, balance = 0) {
//   BankAccount.call(this, customerName, balance); //access parent class // constructor linking
//   this.transactionLimit = 50000;
// }

// CurrentAccount.prototype = Object.create(BankAccount.prototype); // linking bank account prototype

// CurrentAccount.prototype.takeBusinessLoan = function (amount) {
//   console.log("taking business loan:" + amount);
// };

// function SavingAccount(customerName, balance = 0) {
//   BankAccount.call(this, customerName, balance); //access parent class // constructor linking
//   this.transactionLimit = 10000;
// }

// SavingAccount.prototype = Object.create(BankAccount.prototype); // linking bank account prototype

// SavingAccount.prototype.takePersonalLoan = function (amount) {
//   console.log("taking personal loan:" + amount);
// };

// const rituAccount = new SavingAccount("Riya", 3000);

// // rituAccount.deposit(1000);
// rituAccount.withdraw(1000);

// console.log(rituAccount);
