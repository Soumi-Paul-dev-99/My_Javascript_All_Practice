// How to find duplicate elements in an array 


const arr = [ 1,2,4,5,6,2,4,6]
const duplicateArr = arr.filter((ele,index,arr)=>arr.indexOf(ele)!==index)
console.log(duplicateArr);


// how to find max and min value in a given array in javascript?

//for max value
const arrNum = [77,45,54,84,115,75]
const maxFunction=(arr)=>{
    return arr.reduce(function(pre,cur){
        return pre>cur?pre:cur
    })}
console.log(maxFunction(arrNum))

//for min value
const arrNum2 = [45,75,35,1115,4567];
const minValue = (arrr)=>{
return arrr.reduce(function(prev,curr){
    return prev<curr?prev:curr
})
}
console.log(minValue(arrNum2))