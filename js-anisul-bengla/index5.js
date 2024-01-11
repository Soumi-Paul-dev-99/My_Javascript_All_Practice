// for (var x = 1; x <= 100; x = x + 1) {
//   document.write(" " + x);
// }
// document.write("<h1>end</h1>");

// for(var x=0; x<=99 ; x= x+2){
//     document.write(" "+x)
// }

// for(var y=10 ; y>=1 ; y=y-1){
//     document.write(" "+y)
// }

// let sum=0;
// for (var x=1 ; x<=10 ;x=x+1){
//     sum=sum+x;
// }
// document.write("sum="+sum);

//sum of number
// var m = parseInt(prompt("enter the strating number: "));
// var n = parseInt(prompt("enter the last number:"));
// var sum=0;
// for(var i=m ; i<=n ; i=i+1){

//     sum=sum+i;
// }
// document.write(sum);

// five times sum
// for (var x = 1; x <= 5; x++) {
//   var num1 = parseInt(prompt("enter first number:"));
//   var num2 = parseInt(prompt("enter second number"));
//   var sum = num1 + num2;
//   console.log("result =" + sum);
// }

// var i = 1;
// var sum = 0;

// while(i<=5){
//     document.write(" "+i)
// i=i+1;
// }

// document.write("<h1>end</h1>")

// 1+2+3+3+4+..........+10

// var i =1;
// var sum = 0;

// while(i<=10){
//     sum = sum+i;
//     i=i+1;
// }

// document.write(sum);
// document.write("<h1>end</h1>");

//2+4+6+8+....+100
// var i = 2;
// var sum = 0;

// while(i<=100){
//     sum=sum+i;
//     i=i+2;
// }
// document.write(sum);
// document.write("<h1>end</h1>")

// var i=11;
// do {
//     document.write(" " +i);
//     i++;
// } while (i<=10);

// var i=11;
// while(i<=10){
//     document.write(" "+i)
// i++;
// }

// for(var i=0;i<=100;i++){
// if(i%2!=0){
//     continue;;
// }

//     document.write(" "+i)
// }
// document.write("end");

// for(var i=0;i<=100;i++){
//     if(i%2==0){
//         continue;
//     }

//         document.write(" "+i)
//     }
//     document.write("end");

// if(number>0){
//     document.write("positive");
// }
// else{
//     document.write("negative")
// }

// var result= number > 0  ? "positive" : "negative"

// console.log(result)

// var number = Number(prompt("enter a number"));
// if (number > 0) {
//   console.log("positive");
// } else if (number < 0) {
//   console.log("negative");
// } else {
//   console.log("zero");
// }
// var number = Number(prompt("enter a number"))
//  var result = number>0 ? "positive" : number<0 ? "negative" : "zero"
//  console.log(result);

// function square(num){
// var result=num*num;
// document.write("result =" +result +"<br>");
// }
// square(9);
// square(10);
// square(11)

//creating a function
// function square(num1,num2){
//     var result = num1*num2;
//     // document.write("result =" +result+"<br/>")

// return result;

// }
// //calling a function
// var x= square(5,6)
// document.write(x)

//addition

// function addition(x,y){
// var result = x+y;
// document.write("Sum =" +result+"<br>")
// }
// addition(10,20)


//substraction
// function substraction(x,y){
//     var result= x-y;
//     document.write("substraction = "+result+"<br/>")
// }
// substraction(30,20);

//creating a function
//calling a function
// how to pass value in function
//returing a value

function calculator(x,y){
    var result = x+y;
    document.write("addition is ="+result+"<br>");
    var result=x-y;
    
    document.write("substraction is ="+result+"<br>");
    var result = x*y;
    document.write("multiplication is ="+result+"<br>");
    var result = x/y;
    document.write("divition is ="+result+"<br>"); 
    
}
calculator(50,30)