function sayHello(){
    console.log("Hello!");
} 
function sayHelloToGuadalupe() {
    console.log("Hello, Guadalupe!");
  }


function sayHelloToLiz() {
    console.log("Hello, Liz!");
}
function sayHelloToSamip(){
    console.log("Hello, Samip");
}
sayHelloToGuadalupe();
sayHelloToLiz();
sayHelloToSamip();

function sayHelloTo(firstName) {
    console.log(`Hello, ${firstName}!`);
}

sayHelloTo("Guadalupe");
sayHelloTo("Jane");
sayHelloTo("R2-D2");
sayHelloTo(1);

function say(firstName, greeting) {
    console.log(`${firstName}, ${greeting}!`);
}
say("Julio", "Hello");

function add(x, y) {
    return x + y;
  }
  console.log(add(1,2));

  function say(greeting, firstName){
    return `${greeting}, ${firstName}!`;
  }
  console.log(say("Hello", "Liz"));

  function say(greeting, firstName){
    console.log(`${greeting}, ${firstName}!`);
  }
  console.log(say("Hello","Liz"));

  const sum = add(num1, num2);
  const message = `The sum of your numbers is: ${sum}.`;

  
  function sayHello() {
    console.log("Hello!");
  }
  sayHello();