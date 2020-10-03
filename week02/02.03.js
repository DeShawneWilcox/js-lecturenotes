/*
************
 FUNCTIONS
************
    - JavaScript functions are defined with the function keyword, and can be written as a function declaration or a function expression. 
        - function declarations are hoisted in our code, and run only when we call them. So any function in our code sits and waits to be ran until we call it by it's name. Think of it as student with his or her hand up, waiting to ask a question. That student doesn't ask their question until the teach calls upon them. 
        - function expressions are not hoisted, and are generally stored in variables
            - after a function has been stored in a variable, that variables name can then be called to run the function
    - functions without names are known as anonymous functions
*/


// FUCTION DECLARATION

sayHello();

function sayHello() {
    console.log('hi');
}

//sayHello; // won't run Parentheses are what tells the function to run
sayHello(); // function invocation, or function call

// FUNCTION EXPRESSION
// greetings();

let greetings = function () { //anonymous function
    console.log('hello');
}

greetings(); 

/*
************
 PARAMETERS
************
    - think of parameters as a newly declared variable that we haven't given a value to yet.
        - the value we pass into our function when we call the function to run (also known as an argument), is the value that gets assigned to the parameter.
    - general naming convention for function parameters: the parameter should be named something related to the information we're passing into the function. If we're passing in an integer, we may name our parameter num or number
*/

function myDog(husky) {
    console.log(`My dog's name is ${husky}`);
}

myDog('Luna'); //'Lun' is the arguement, or value we're passing through to the parameter.

let pet = myDog; //Function reference- We're not calling/invoking fuction of myDog. We're assigning function of myDog to variable, pet

pet(); // this will run the function, but since we did not include an arguement no value is assigned to the parameter of husky.et
pet('Luna');
pet('Mira');


//MULTIPLE PARAMETERS AND ARGUEMENTS

function allMyDogs(smallHusky, bigHusky, borderCollie) {
    console.log(`My dogs are named ${smallHusky}, ${bigHusky}, ${borderCollie}`) {
        if (smallHusky === undefined || bigHusky === undefined || borderCollie === undefined){
            console.log('no arguements passed')
        } else {
            console.log(`my dogs are named ${smallHusky}, ${bigHusky}, ${borderCollie}`);
        }
    }
}

allMyDogs();
allMyDogs('Mira', 'Luna', 'Charlie'); //the arguemnt we pass into our fuction call are assigned by position, or by order. First arguement gets assigned to first parameter, etc.
//allMyDogs('Peyton', 'Jonathan', 'Jessica');

/*
************
   RETURN
************
    - functions can also manipulate the data sent to them, and return a new value
*/

//find average weight


function calculator( one, two, three) {
    //console.log(one, two, three);
    let totalWeight= one + two + three;
    //console.log(totalWeight);
    let average = Math.round(totalWeight / 3) ; //Math.round rounds to the nearest integer (whole number)
    //console.log(average)

    return average; //can also use math.round here
}

let averageWeight = calculator(15, 60, 55);// since we're retruning a value from the function, we need a new varibale to capture the return value. Then, when we invoke, or call, the calculator function - the calue that we return from that fuction is the value that's assigned to the averageWeight variable
console.log(`My dogs weigh an average of ${averageWeight} lbs`);


//Arrow functions
//These are expressions


//function func0 (a, b){ // function statement

 //}

 //const func1 = function (a, b) {
//     return a + 2 * b;
// }

//let f = (x) => x;

let f = (x) => x + 5;// concise body arrow function - uses expression on right of code

console.log(f(40)); 

//block-body arrow function - uses block of code and have to specify 'return'
let g = (x) => {
    console.log(x);
    return x + 6;
};

console.log(g(7));


const f0 = (x) => 3 * x;

const f1 = (x) => {
    return 3 * x;
};




/// 1. building up expressions


const returnFirstArg = (x , y) => x;
const returnSecondArg = (x, y) => y;

const returnThree = (x) => 3;
const returnFalse = (x) => false; 

const multiplyNumbers = (x, y) => returnThree((x+ 3) x * y); // anything on the right side of the arrows is an expression it can be a literal, an object literal (wrap it in parenthesis or it will think it is a fuction block) a function, 


const addToAanBobj = (x, y) => [];

const nameJoiner = (first, middle last) => `${last}, ${first},${middle}`;

console.log(`Hi, I am ${nameJoiner('Eli', 'T', 'Drumm')}`);




/* building up expressions 
    //these are all the different options for the right side of your arrow
    const returnFirstArg = (x, y) => x; //variable
    const returnSecondArg = (x, y) => y; //variable -- this time it spits out the second value
    const returnThree = (x) => 3; //literal
    const returnFalse = (x) => false; //literal
    const multipleNumbers = (x, y) => x * y; //expression with variables
    const multipleNumbers = (x, y) => (x+ 3) x * y; //expression with variables & literals
    const multipleNumber = (x, y) => returnThree ((x + 3) * y) //expression with function 
    const addToAandB = (x, y) => ({
        a:x,
        b:y
    }); // expression object */


let v = returnFirstArg(4, 5);

console.log(y);
