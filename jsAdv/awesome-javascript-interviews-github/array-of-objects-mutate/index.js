const events = [
  {
    name: "First Event",
    metadata: {
      type: "public",
    },
  },
  {
    name: "Event 2",
    metadata: {
      type: "private",
    },
  },
  {
    name: "Third Event",
    metadata: {
      type: "closed",
    },
  },
];
const mappedEvents = events.map((e) => {
  //   if (e.name === "First Event") { //for first object only
  if (e.name) {
    //this is for every object in the array
    e = { ...e, name: "Second Event Mutated" };
  }
  return e;
});

console.log(mappedEvents);
