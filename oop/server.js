const express = require("express");
const app = express();

const PORT = 4004;

app.get("/", (req, res) => {
  res.send("GET Request Called");
});

//Utility function

class User {
  constructor(name, age, income) {
    this.name = name;
    this.age = age;
    this.income = income;
  }

  static compareByAge(user1, user2) {
    return user1.age - user2.age;
  }
  static compareByIncome(user1, user2) {
    return user1.income - user2.income;
  }
}

const user1 = new User("rakesh", 30, 5000);
const user2 = new User("rohit", 40, 10000);
const user3 = new User("raja", 20, 7000);

const users = [user1, user2, user3];
// users.sort((a, b) => a.age - b.age);
// users.sort(User.compareByAge);
users.sort(User.compareByIncome);

console.log(users);

app.listen(PORT, () => {
  console.log(`Server Running on http://localhost:${PORT}`);
});
