// // Promiuse is a class in js
// //  constructor(function)
//  let myPromise = new Promise((fulfilled , notFulfilled) =>
//  {
//     let num1 = 10;
//     let num2 = 5;
//     let sum = num1 + num2;
//     if(sum > 24 ){
//         fulfilled(sum);
//     }
//     else{
//         notFulfilled(new Error("Promise is not fulfilled"));
//     }
//  }); // function in promise can never be empty
// //   myPromise.then().catch().finally();
// //   .then() will only occur when promise is happen and .catch() will only occur when promise is not filfilled . They can't execute at the same time.

// myPromise.then(() =>{
//     console.log("Promise was fulfilled");
// }).catch(() =>{
//     console.log("Promise was not fulfilled.");
// })


// function addTwoNumbers(num1 , num2 ){
//     let sum =0;
//     setTimeout(()=>{console.log(num1 + num2);
//     sum = num1+ num2;
// },5000) // takes 2 args one is the function you want to execute and second is the time(number of millisecond you want to wait.) 
// console.log("Inside add two numbers");
//     return sum;
    
// }

// console.log(addTwoNumbers(3,4));


// function addTwoNumbers(num1 , num2){
//      let myPromise = new Promise((fulfilled , notFulfilled) =>
//  {
//     setTimeout(() => {
//         console.log("Inside setTimeOut");
//         fulfilled(num1+ num2);
//     }, 5000);
//     notFulfilled(new Error("An error occurred!"));
// });
// return myPromise;
// }

function addTwoNumbers(num1 , num2){
  return new Promise((fulfilled , notFulfilled) => {
      setTimeout(() =>
      {
          console.log("Inside setTimeOut");
fulfilled(num1+ num2);
      }, 5000);
  });
}
addTwoNumbers(10,5).then(() =>{
      console.log("Promise was fulfilled");
  }).catch(() =>{
      console.log("Promise was not fulfilled.");
  })
  