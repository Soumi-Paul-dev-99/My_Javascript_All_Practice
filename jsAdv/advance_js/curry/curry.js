// currying takes a function that receives more than one parameter and breaks it into a series of unary (one parameter) functions.
//therefore curried function only takes one parameter ata time.

//currying
const buildSandwich = (ingredient1) => {
  return (ingredient2) => {
    //Anonymous  function.( anonymous function is that type of function that has no name or we can say which is without any name.)
    return (ingredient3) => {
      return `${ingredient1}, ${ingredient2}, ${ingredient3}`;
    };
  };
};

const mySandwich = buildSandwich("Bacon")("Lettuce")("Tomato");
console.log(mySandwich);

//lets refactor
const buildSammy = (ingred1) => (ingred2) => (ingred3) =>
  `${ingred1},${ingred2},${ingred3}`;

const mySammy = buildSammy("trukey")("cheese")("bread");
console.log(mySammy);
