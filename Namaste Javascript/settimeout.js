// function x(){
//     var i = 10;
//     setTimeout(function(){
//         console.log(i)
//     },1000);
//     console.log("hello guys")
// }
// x();


//for not using let print 1,2,3,4,5
function x() {
  for ( var i = 1; i <= 5; i++) {
    function close(x) {
      setTimeout(function () {
        console.log(x);
      }, x * 3000);
    }
    close(i);
  }
  console.log("hello");
}
x();

//for using let 
function x(){
    for(let i=1;i<=5;i++){
        setTimeout(function(){
            console.log(i);
        },i*1000)
    }
    console.log("hello guys")
}
x();