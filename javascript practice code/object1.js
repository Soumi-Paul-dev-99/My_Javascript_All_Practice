//object literals

//defining object
let person = {
    first_name: "mukul",
    last_name: "soumi",

//metgod
getfunction: function () {
        return (`the name of the person is ${person.first_name} and last lane ${person.last_name}`)
    },
    //object within object
    phone_number: {
        mobile: "1234",
        land:"1414536222"
    }
}
console.log(person.getfunction());
console.log(person.phone_number.mobile)



//using a constructor

function person(first_name, last_name) {
    this.first_name = first_name;
    this.last_name = last_name;
}

//creating a new instance of person object
let person1 = new person("soumi", "paul");
let person2 = new person("mamon", "paul");

console.log(person1.first_name);
console.log(`${person2.first_name} ${person2.last_name}`)