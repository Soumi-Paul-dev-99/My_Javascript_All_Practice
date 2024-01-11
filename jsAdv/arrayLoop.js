//array element print using loop
// let colors = ["red","green","blue"]
//         for(let a in colors) {
//             console.log(colors[a]);
//         }
//         let c = ["red","green","blue", "yellow"]
//         c.forEach(function(a,index) {
//             console.log(a);
//         })
//         let y = ["re","gree","blu", "yell"]
//         for(let a of y) {
//             console.log(a);
//         }

//only nymbers
function numbrersOnly(arr) {
  return arr.filter((arr) => typeof arr == "number");
}

console.log(numbrersOnly(["ram", "raja", 20, 39, 40, "38"]));
