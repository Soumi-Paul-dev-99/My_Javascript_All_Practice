const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved value!");
  }, 10000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise resolved value 2!");
  }, 5000);
});

//await can only be used inside async function
// async function handlePromise() {
//   //js engine was waiting for promise to be resolved
//   console.log("namaste"); //this will print immediately
//   const val = await p;
//   console.log("hello world"); //both log wait for 10sec
//   console.log(val);

//   const val2 = await p;
//   console.log("hello world2"); //this will not run two times
//   console.log(val2);
// }
// handlePromise();

async function handlePromise() {
  //js engine was waiting for promise to be resolved
  console.log("namaste"); //this will print immediately
  const val = await p;
  console.log("hello world"); //both log wait for 10sec
  console.log(val);

  const val2 = await p2;
  console.log("hello world2"); //after 10 sec all this gonna print
  console.log(val2);
}
handlePromise();

//***if i change the order after 5 sec first promise will be resolved and after 10 sec next promise will be resolved. (imp)

// function getData() {
//   //js engine will not wait for promise to be resolved
//   p.then((res) => console.log(res));

//   console.log("hello world");
// }

// getData();
