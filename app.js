
const btn = document.querySelector('.icon');
const links = document.querySelector('ul');

btn.addEventListener('click',function(){
  links.classList.toggle('active');
})


// console.log(test());
// function test() {
//    let a = 10;
//    return a;
// }


// let a = function(name,age,job){
   
//    let introduce = `My name is ${name}, I am ${age}. I am a ${job}.`
//    return introduce;
// }
// console.log(a('kazi',29,'web develop'));




// function cal() {
//   var a = parseInt(document.getElementById('value1').value);
//   var b = parseInt(document.getElementById('value2').value);
//   var operator = document.getElementById('operator').value;
//   var calculate;
//   var button = document.querySelector('#button');
  
  
//   if (operator == "add") {
//     calculate = a + b ;
//  }else if (operator == "min") {
//    calculate = a - b ;
// }else if (operator == "div") {
//    calculate = a / b;
// }else if (operator == "mul") {
//    calculate = a * b;
// }
  
// document.getElementById('value3').innerHTML = calculate;
 
  
 
// }






// function test(name,age,job) {
//   var greeting = `Hi my name is: ${name}, I am ${age}. My job is ${job}.`;
//   var greet = "Hi my name is " + name +" ,I am " + age + " .My job is " + job;
  
//   return greeting;
  
// }

// console.log(test("Foysal",29,'Web Developer'));
 
// var test = function (name,age,job) {
//   var greeting = `Hi my name is: ${name}, I am ${age}. My job is ${job}.`;
//   var greet = "Hi my name is " + name +" ,I am " + age + " .My job is " + job;
  
//   return greeting;
  
// }

// console.log(test("Foysal",29,'Web Developer'));

// (function test(name,age,job) {
//   var greeting = `Hi my name is: ${name}, I am ${age}. My job is ${job}.`;
//   var greet = "Hi my name is " + name +" ,I am " + age + " .My job is " + job;
  
//   console.log(greeting);
  
// }('kazi',20,'web developing'));


