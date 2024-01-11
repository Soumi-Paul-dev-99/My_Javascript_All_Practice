const cardArray = [
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
  {
    name: "fries",
    img: "images/fries.png",
  },
  {
    name: "cheeseburger",
    img: "images/cheeseburger.png",
  },
  {
    name: "hotdog",
    img: "images/hotdog.png",
  },
  {
    name: "ice-cream",
    img: "images/ice-cream.png",
  },
  {
    name: "milkshake",
    img: "images/milkshake.png",
  },
  {
    name: "pizza",
    img: "images/pizza.png",
  },
];

cardArray.sort(() => 0.5 - Math.random());
// console.log(cardArray);

const gridDisplay = document.querySelector("#grid");
const cardChosen = [];
const cardChosenId = [];
// console.log(gridDisplay);
function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    // console.log(card, i);
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipcard);
    // console.log(card, i);
    gridDisplay.appendChild(card);
  }
}
createBoard();
function checkMatch() {
  const cards = document.querySelectorAll("img");
  console.log("check for match");
  if (cardChosen[0] === cardChosen[1]) {
    alert("you found a match");
    cards[cardChosenId[0]].setAttribute("src", "images/white.png");
  }
}

function flipcard() {
  const cardId = this.getAttribute("data-id");

  cardChosen.push(cardArray[cardId].name);
  cardChosenId.push(cardId);
  console.log("clicked", cardId);
  console.log(cardChosen);
  console.log(cardChosenId);
  this.setAttribute("src", cardArray[cardId].img);
  if (cardChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
