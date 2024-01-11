const input = document.getElementById("numOfwords");
const container = document.querySelector(".container");
let numOfwords;

const generateWord = (n) => {
  let text = "";
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  for (let i = 0; i < n; ++i) {
    const random = (Math.random() * 25).toFixed(0); // toFixed for fix decimal value
    text += letters[random];
  }

  return text;
};

// console.log(generateWord(20));

const generatePara = () => {
  const numOfwords = Number(input.value);

  const para = document.createElement("p");

  let data = "";

  for (let i = 0; i < numOfwords; ++i) {
    const randomNumber = (Math.random() * 15).toFixed(0);

    data += generateWord(randomNumber).toLowerCase();
    data += " ";
  }
  //   console.log(data);

  para.innerText = data;

  para.setAttribute("class", "paras");

  container.append(para);
};
