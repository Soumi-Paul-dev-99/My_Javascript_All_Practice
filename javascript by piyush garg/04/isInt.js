// function isInt(num){
//     return (num%1===0);
// }
// console.log(isInt(4));

function modifyArray(arr,callback){
    arr.push(100);
    console.log(arr)
    callback();
}
var arr = [1,2,3,4,5,6];
modifyArray(arr,function(){
    console.log("array hsas been modified",arr)
})