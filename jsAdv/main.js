const companies = [
  { name: "company 1", category: "Finance", start: 1981, end: 1990 },
  { name: "company 2", category: "Retail", start: 1999, end: 2020 },
  { name: "company 3", category: "Auto", start: 1984, end: 2022 },
  { name: "company 4", category: "Technology", start: 1981, end: 2010 },
  { name: "company 5", category: "Retail", start: 1985, end: 2001 },
  { name: "company 6", category: "Finance", start: 1986, end: 2000 },
  { name: "company 7", category: "Auto", start: 1997, end: 2017 },
  { name: "company 8", category: "Finance", start: 1980, end: 2005 },
  { name: "company 9", category: "Technology", start: 1979, end: 2009 },
];

const ages = [21, 43, 65, 34, 12, 10, 45, 23, 17, 10];

// for (let i = 0; i < companies.length; i++) {
//   console.log(companies[i]);
// }

//forEach
// companies.forEach(function (company) {
//   console.log(company.category);
// });

//FILTER
//get 21 and older
// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] >= 21) {
//     canDrink.push(ages[i]);
//   }
// }

// const canDrink = ages.filter(function (age) {
//   if (age >= 21) {
//     return true;
//   }
// });

// const canDrink = ages.filter((age) => age >= 21);

//Filter retail companies
// const retailCompanies = companies.filter(function (company) {
//   if (company.category === "Retail") {
//     return true;
//   }
// });

// const retailCompanies = companies.filter(
//   (company) => company.category === "Retail"
// );

// console.log(retailCompanies);

//get 80's companies
// const retailCompanies = companies.filter((company) => company.start <= 1990);
// console.log(retailCompanies);

//get companies that last more than 10 years
// const retailCompanies = companies.filter(
//   (company) => company.end - company.start >= 10
// );
// console.log(retailCompanies);

//MAP
// create array of company names
// const companyNames = companies.map(function (company) {
//   return company.name;
// });

// console.log(companyNames);

// const testMap = companies.map(function (company) {
//   return `${company.name} [${company.start} - ${company.end}]`;
// });
// const testMap = companies.map(
//   (company) => `${company.name} [${company.start} - ${company.end}]`
// );

// console.log(testMap);

//first squareroot and then multiply
// const agesMap = ages.map((age) => Math.sqrt(age)).map((age) => age * 2);
// console.log(agesMap);

// SORT
// const sortedCompanies = companies.sort(function (c1, c2) {
//   if (c1.start > c2.start) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));

// console.log(sortedCompanies);

// const sortAges = ages.sort((a, b) => b - a);
// console.log(sortAges);

//REDUCE

// let ageSum = 0;
// for (let i = 0; i < ages.length; i++) {
//   ageSum += ageSum[i];
// }

// let ageSum = ages.reduce(function (total, age) {
//   return total + age;
// }, 0);

// let ageSum = ages.reduce((total, age) => total + age, 0);

// console.log(ageSum);

//get total years for company
// let totalYears = companies.reduce(function (total, company) {
//   return total + (company.end - company.start);
// }, 0);

// let totalYears = companies.reduce(
//   (total, company) => total + (company.end - company.start),
//   0
// );

// console.log(totalYears);

//Combine Methods
const combined = ages
  .map((age) => age * 2)
  .filter((age) => age >= 40)
  .sort((a, b) => a - b)
  .reduce((a, b) => a + b);

console.log(combined);
