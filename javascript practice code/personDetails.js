/* Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.

"Person-1 Details:"
"Name: Francisca Rohan"
"Age: 25"
"Country: USA"
"
Person-2 Details:"
"Name: Raimond Aruna"
"Age: 30"
"Country: Netherlands" */

class Person{
    constructor(name,age,country)
{
    this.name = name;
    this.age=age;
    this.country=country;
}

displayDetails(){
    console.log(`Name is : ${this.name}`);
    console.log(`Age is : ${this.age}`);
    console.log(`Country is: ${this.country}`);
}


}
const person1 = new Person("soumi",21,"india")
const person2 = new Person("maulik",81,"india")
const person3 = new Person("rimi",213,"india")
console.log("person 1 details")
person1.displayDetails()
console.log("person 2 details")
person2.displayDetails()
console.log("person 3 details")
person3.displayDetails();

/*Write a JavaScript program to create a class called 'Rectangle' with properties for width and height. Include two methods to calculate rectangle area and perimeter. Create an instance of the 'Rectangle' class and calculate its area and perimeter.*/

class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    rectangleArea(){
        return this.width + this.height;
    }
 rectanglePerimeter(){
    return 2*(this.width + this.height)
 }

}

const rectangle = new Rectangle(12,10);

const area = rectangle.rectangleArea();
const perimeter = rectangle.rectanglePerimeter()
console.log(`rectangle area ${area}`)
console.log(`rectangle perimeter ${perimeter}`)
