//1. literals

//this is a string literal//

console.log(`string ${3+7}`);

let x = -4.8;

console.log(x);
console.log(-4.8);

let obj = {
    a: 4,
    b: 9,
    c: 13,
    d: 0,
    e: -1000
};

//this is a boolean literal//
console.log(true);
console.log(false);

//this is a null literal//

console.log(null);

//this is a undefined literal//

console.log(undefined);

console.log(typeof undefined);

let arr = [8, 14, 66, 30, null];

console.log(arr[5]);


//2. statements vs. expressions

//Shannon
//Shannon is a good dog.

let x = 5;

if (3 > 0){
    console.log('three is greater than zero')
}

for(let i of ['a', 'b', 'c']) {
    console.log(i);
}

//can build up expressions with operators:
+ - / * > <



//3. scope

//let x = 5;
if (true){
    let x = 11;
    const y = 14;
}

for (let i of [0, 1, 2]) {
    //let x = 7;
    for (let j of ['a', 'b', 'c',]){
        //let x = 9;
       console.log(`${i}`, `${j}`: `${x}` )
    }   
}

let a = 11;


function addNumbers (b) {
    let a = 2400;
    console.log(a + b);
}

addNumbers(10);




//4. hoisting


function functionTwo () {
    console.log(functionOne());
}

functionTwo();

function functionOne () {
    return 4;
}



//reason for this

function getWeather (zipcode, date, format) {
    let weather;

    let result = getFromServer(zipcode);

    return weather;
}

function getFromServer (zipcode) {

    parseResult(res);
}
//console.log(x);

function parseResult(result) {

}addNumbers(3, 10);

//let x = 5;




//challenge

//Given dogArray, create a new array dogStatements.
//In dogStatements, you should have "____ is a good dog" if the dog's name is 12 characters or less.
//If the dog's name is greater than 10 character, you should have "____ is a very good dog".

const dogArray = ['whippet', 'st bernard', 'goldendoodle', 'skye terrier', 'chinese crested'];

// ['whippet is a good dog', 'st bernard is a good dog' etc. ] 

//PLEASE USE: for-in or for-of, and a ternary

// let arr = []

// arr.push(0);
// arr.push(1);
// arr.push(2);

// console.log(arr);

let dogStatements = [];

for (let dog of dogArray) {
    dogStatements.push( (dog.length <= 12) ? `${dog} is a good dog` : `${dog} is a very good dog`);
}
console.log(dogStatements);

// CHALLENGE 2.
// Given dogStatements (output of first challenge), console.log:
// wHiPpEt iS A GoOd dOg
// sT BeRnArD Is a gOoD DoG
// etc.
// PLEASE USE: ONE for-of, ONE for-in, and a ternary


//for every statement in the dogStatements array:
for (let statement of dogStatements){

}
//create an array
let arr [];

//for every letter of the statement:
for (let in statement){}

//if it is even-indexed, make it lower case and add it to the array
//if it is odd-numbered, make it UPPER case and add it to the array
    if (index % 2== 0){
        arr.push(statement[index].toLowerCase());
    } else{
        arr.push(statement[index].toUpperCase());
    }
        
//turn the array into a string

    let arr = arr.join('');
//print out the string
    console.log(arr);