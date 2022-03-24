console.log("Before");

setTimeout(
  function greet(greeting, name) {
    console.log(`${greeting} my name is ${name}`);
  },
  3000,
  "Hello",
  "Mrinal"
);

setTimeout(
  function greet(greeting, name) {
    console.log(`${greeting} my name is ${name}`);
  },
  5000,
  "Hi",
  "Mukesh"
);

console.log("After");

// Asynchronous Method
