// let submitBtn = document.querySelector("button");
// submitBtn.addEventListener("click", showMsg);


// function showMsg () {
//     alert("Namaste World")
// }

let btnMsg = document.querySelector("button");
btnMsg.addEventListener("click",inputMsg);

function inputMsg (){
    let name = prompt("enter your name")
btnMsg.textContent = "your name is"+name;
}