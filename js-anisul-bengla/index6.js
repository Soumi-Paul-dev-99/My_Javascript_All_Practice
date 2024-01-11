//IIFEs (Immediately Invokeable Function Expressions)

(function display(){
    console.log("hello")
})();
//Function Expressions

var display2 = function displaymessage(){
    console.log("hi i am message")
};
display2();

var display=function dispallymsg(msg)
{
    console.log(msg);
}
display("i am message")

//( ), { } , [ ] , <>
//task7 : create an IIFEs that print sum of 2 numbers
(function (sum1,sum2){
    var result=(sum1+sum2)
    document.write("result is ="+result)
})(4,5)
