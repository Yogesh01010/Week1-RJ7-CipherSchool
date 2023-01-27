// ************** .map() *********
// used in arrays
// let array =[1,2,3,4,5];
// let newArray =[];
// for(let i =0; i<array.length ;i++){
//     newArray[i]=array[i]*array[i];
// }
// console.log(newArray);
// console.log(array); (new array and old array is two different locations)

//  .map() function gives a new array based on old array ask to write computation logic.
// map() creates a new array from calling a function for every array element.

// map() calls a function once for each element in an array.

// map() does not execute the function for empty elements.

// map() does not change the original array.

// let array =[1,2,3,4,5];
// function functionForMap(element){
//     return element*element;
// }

// let newArray = array.map(functionForMap);//here we are passing function as a function argument.
// console.log(newArray);
// // in js , a function is also a js object.

// same implementation with arrow function
// let functionForMap = (elements) => elements*elements;
// let newArray = array.map(functionForMap);
// console.log(newArray);

// let addTwoNumbers =(a, b ) => a+b;
// //console.log(addTwoNumbers(4,5));
// let num1=4;
// let num2 =6;
// console.log(addTwoNumbers(num1, num2));

//we can also provide direct function as an index.

// let newArray = array.map((element ) => element*element)
// console.log(newArray); //giving square of each element.




// ************* .forEach() **********
//  it's same as for loop used for iterative purpose and it doesnot have any return type it is void type function . It only perform calculation.
// .map() return an array while forEach not.
// let array =[1,2,3,4,5];
// array.forEach((element) => {
//     console.log(element);
// });

// let array =[1,2,3,4,5];
// array.forEach((element, index) => {
//     element *= element;
//     console.log(element);
// });
// console.log("Array is: ", array);




// ********* .filter() ***********
// gives boolean as return

// let array = [10,20,30,40,50,60];
// let newArray = array.filter((element) => element>=30);
// console.log(newArray); //gives the value which is greater than or equal to 30.




// *************.find() ************
// let array = [10,20,30,40,50,60];
// let temp = array.find((value)=>{
//     return value > 20;
// });
// console.log(temp);
// return the first value after satsfying the condition.




// ************ .sort() **********
// let array = [34,67, 56,12,02,80];
// let sortedArray = array.sort()
// console.log(sortedArray);

//[ 12, 2, 34, 56, 67, 80 ]  giving wrong output because it sort all the values according to string value
// sorting by default by lexographical order.
// to sort according to interger fashion we have to use comparator (comparator is an interface in java which help to create a comparision in linear data structure).

// let array = [34,67, 56,12,02,80];
// let sortedArray = array.sort((element1 , element2) => {
//     element1 = Number(element1); // class in js convert any string to integer.
//     element2 = Number(element2);
//     return element1 - element2;
// })// this is comperative function 
// console.log(sortedArray);




// ************ Object destructuring **********
// it's a way to destructure an object
//  let details = {
//     name : "Yogesh",
//     age : 20,
//     address : {
//         street : "RamaMandi",
//         city : "jalandhar",
//         state : "punjab",
//         country : "india",
//         passportDetails:{
//             passportNumber : "ABCUR1234"
//         },
//     },
//  };
 
//  console.log(details.address.passportDetails.passportNumber);
//  let {name : myName, age} = details; //destructuring (copying the name and age from details)
//  console.log(myName , age);




// ************ array matching ********
// conditions for array matching
// 1. if their length is not same then they are not matching
// 2. if they are pointing the same reference then they both are same array ( if (array1 == array2) check the refrence)
// 3. run a for loop check array[i] == array[2] then they are same aaray.




// ************** object matching ***********
// let obj1 = {name:"Yogesh"};
// let obj2 ={name : "Yogesh"};
// function areEqual(obj1, obj2){
//     if(obj1 == obj2){
//         return true;
//     }
//     if(Object.keys(obj1).length !== Object.keys(obj2).length){
//         return false;
//     }
//     for(let key of Object.keys(obj1)){
//         if(typeof obj2[key] === "undefined"){
//             return false;
//         }
//         if(obj2[key] !== obj1[key]){
//             return false;
//         }
//     }
//     return true;
// }
// console.log(areEqual(obj1 , obj2));




// ********** Map and set *********
// let map = new Map();
// map.set(1, "Yogesh");
// map.set(2, "Sharma");
//console.log(map);
// output:- Map(2) { 1=>'Yogesh', 2 => 'Sharma' }
// let temp = map.has(1); //checks whether the key is present or not and returns a boolean value.
// console.log(temp);
// console.log(map.entries());//gives all the entries
// console.log(map.keys());//{ 1, 2 }
// console.log(map.values());//{ 'Yogeshs', 'Sharma' }



// ************ set ***********
let set = new Set();
set.add(1);
set.add(-1);
set.add("buggi")
// console.log(set);
// console.log(set.size);
// console.log(set.has(-1));
// console.log(set.add("buggu"));
// console.log(set.delete("buggu"));
// console.log(set);

//Output :- true
// Set(4) { 1, -1, 'buggi', 'buggu' }
// true
// Set(3) { 1, -1, 'buggi' }




// ************* class ***********
class Animal {
    noOfLegs;
    colour;
    family;
    sound;
    constructor(noOfLegs,colour,family,sound){
        this.noOfLegs = noOfLegs;
        this.colour = colour;
        this.family = family;
        this.sound = sound;
}
showAnimal(){
    console.log("The animal belongs to family " +this.family+" the colour is " + this.colour + " it has " + this.noOfLegs + " no of legs and  it's produces " + this.sound + " sound ");
}
}
//you can not create more than one constructor for a class
let  animal = new Animal(4,"bluasae", "rodedsfnt " , "moodfreoo");
console.log(animal);
animal.showAnimal();