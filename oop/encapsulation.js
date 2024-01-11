//Encapsulation
//complex things that stored in class that noone can access any hidden or private fields
class BankAccount {
  customerName;
  accountNumber = Date.now();
  #balance = 0; // to use private property we use #

  constructor(customerName, balance = 0) {
    //a constructor function is present in class
    this.customerName = customerName;
    this.accountNumber = Date.now();
    this.#balance = balance;
  }

  deposit(amount) {
    this.#balance += amount;
  }
  withdraw(amount) {
    this.#balance -= amount;
  }

  set balance(amount) {
    // public property
    if (isNaN(amount)) {
      throw new Error("Amount is not a valid input");
    }
    this.#balance = amount;
  }
  get balance() {
    return this.#balance;
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

const rituAccount = new CurrentAccount("Ritu", 2000);

rituAccount.balance = 5000;

// rituAccount.#balance = "hello";
console.log(rituAccount);
console.log(rituAccount.balance);
