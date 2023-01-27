// in js , we can declare variable in 3 ways 
// 1. by var
// 2. by let
// 3. by const




// ********* CONST KEYWORD *********
// const myname = "Yogesh";
// console.log(myname);

// const myName =[];
// myName.push("Mohn");
// console.log(myName);

// const myName = 56; redeclaration is not allowed in const.
// STRICT




//******** LET KEYWORD *********
// let myName ="Mohn";
// console.log(myName);
// myName ="alex";
// console.log(myName); 
// we can reassign a variable.

// we can also change the data type in js.
// let myName ="Mohn";
// console.log(myName);
// myName =5;
// console.log(myName); 
 
// we can not redeclare the variable again
// let myName ="Mohn";
// console.log(myName);
// let myName =5;
// console.log(myName); 
 //above code will throw an error
//LESS STRICT




 // ************* VAR KEYWORD *********
// var MyName = "Yogesh";
// console.log(MyName);
// MyName = "tannu"; // reassigning is allowed
// console.log(MyName);
// var MyName = "Sharma"; //redeclaration is allowed
// console.log(MyName);
//FLEXIBLE
//var has global scope whereas let and const have local scope.

// function addTwoNumbers(num1 , num2){
//     return num1 + num2;
// }
// let x = addTwoNumbers(5,5);
// console.log(x);

// {
//     var num = 5;
// }
// console.log(num);
//have global scope




// ************* STRING INTERPOLATION **********
//The purpose of string interpolation is to add various variables or expressions inside a string in an error-free manner.
// let firstName = "Yogesh";
// let lastName = "Sharma";
// //console.log(firstName +" "+ lastName);
// // let fullName = firstName+" "+lastName;
// // console.log(fullName);
//  let fullName = `${firstName} ${lastName}`;
//  console.log(fullName);




// ********** Default Params **********
//  NORMAL FUNCTION(use function keyword)
// function addTwoNumbers(num1 , num2){
//      return num1 + num2;
//     }
// console.log(addTwoNumbers(1,2) );

//  ARROW FUNCTION(no need to use function keyword)
//  let addTwoNumbers = (num1 , num2) => {
// return num1 + num2;
//  }
//  console.log(addTwoNumbers(1,2));

 //ARROW FUNCTION(can be also written without return keyword)
//  let addTwoNumbers = (num1 , num2) => num1 + num2;
// console.log(addTwoNumbers(1,2));
// NaN = not a number

//when we donot give any default value
// let addTwoNumbers = (num1 , num2) => {
//     console.log(num1);
// console.log(num2);
//  return num1 + num2;
//   }
//   console.log(addTwoNumbers(1));
  //output
// 1
// undefined
// NaN

// by providing default value
// let addTwoNumbers = (num1 , num2= 6) => {
//     console.log(num1);
// console.log(num2);
//  return num1 + num2;
//   }
//   console.log(addTwoNumbers(1));




// **************** REST(...) AND SPREAD(...) OPERATOR are applicable in arrays and objects in js (operator overloading) **********
let array = [5,23,4,5,6,78];

//console.log(array); // output :- [ 5, 23, 4, 5, 6, 78 ] complete array getting printed

//console.log(...array); // output :-  5, 23, 4, 5, 6, 78  only the data inside it is getting printed.

// let newArray = [...array, 34,90,12];// deep cloning.
// console.log(newArray);
//output :- [5, 23,  4,  5, 6,78, 34, 90, 12] (it will take all the value of array then it will append it in newArray).

// let newArray = [100, 200, 56,...array];// deep cloning.
// console.log(newArray);
// output :- [
//   100, 200, 56,  5, 23,
//   4,   5,  6, 78
// ]


//let newArray = array (it will not copy the elements of array in new array rather array and newArray will start pointing towards same memory location to copy an array we have to use spread operator ).




// ********** rest operator ********
// let testFunction = (...args) => {
//   return args;
// }

// let myNumbers = (...numbers) => {
//   console.log(numbers);
// }
// myNumbers(1,2,3,4,5,6,7,8,9,10);

// let maxOfNumbers = (...numbers) =>
// {
//   let maximum = Number.MIN_VALUE;
//   for(let number of numbers ){
//     maximum =Math.max(maximum, number);
//   }
//   return maximum;
// }
// console.log(maxOfNumbers(1,2,3,4,5,6,7,8,9,10));
//when we have to pass many arguments and it is not feasible to write whole argumnets so we use Rest operator.




//  *********** For Object *********
// let object ={
//   name: "Yogesh",
//   age : 19,
//   city: "New York"
// };
// // let object2 = {...object, country: "Russia", address:"earth"};
// // console.log(object2); (append the key value pair in object2)

// let object2 = {...object, name : "Anshul"}; // overwrite the previous value in object2.
// console.log(object2);

let  object ={
  name : "Anshul",
  age:56,
  address:
  {
    city : "agra",
    state : "up",
    country :"India",
  }
}
// let object2 ={...object}
// object2.address.city ="Banaras";// update the value of city in address in object2
// console.log(object2);
// console.log(object); // address is also updated for object . it is called shallow cloning (not 100% copying) . both object and object2 are refering the same address.

// ***deep cloning*****
let object2 = JSON.parse(JSON.stringify(object));
object2.address.city ="patna";
console.log(object2);
console.log(object);//doesnot change object.