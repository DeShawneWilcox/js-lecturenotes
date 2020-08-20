/*

// CHALLENGE 1
// Who's name is longer?
/* BRONZE
Write two variables. One will store your name and another will store a friend's name. Find out what property you can use to check how long the names are. Console log how many letters are in each name.
 */
/* SILVER
Expand on what you have already done and write a conditional to see who has the longer name. Using string interpolation console log who's name is longer. 
Example Result: My name is longer than Adam's.
*/
/* GOLD
In the console log include how many letters difference there are between the names.
Example Result: Adam's name is shorter than mine by 4 letters.
There is also one additional case that should be handled that has not been mentioned so far. See if you can add that to your conditional!
*/


/* var deshawnesName= "DeShawne";
var dereksName= "Derek"; */
/*
let namelength= deshawnesName.length; 
console.log(deshawnesName.length);

let namelength= dereksName.length;
console.log(dereksName.length); 

/*var longerName= (dereksName.length > deshawnesName.length) ? "Derek's name is longer than DeShawne's." : "DeShawne's name is longer than Derek's.";
console.log(longerName); */
/*
let deshawnesName= "DeShawne";
let dereksName= "Derek";


if (dereksName.length > deshawnesName.length){
    console.log(`${dereksName}'s name is shorter than ${deshawnesName}'s name.`)
}   else if (deshawnesName.length < dereksName.lenght) (
    console.log(`${dereksName}'s name is longer than ${deshawnesName}'s name.`) 
)

*/



// CHALLENGE 2
// Types Challenge
/* BRONZE
Create an Object that contains a string, number, boolean, and object.
Console.log the type of one of the values in the object.
 */
/* SILVER
Write a conditional that checks the type of one of the values stored in the object 
and console logs the data type. If the value is not a string, number, boolean, or object console log 'What are you?!'
*/






let myObject = {
    michael: "string",
    dwight: 4,
    pam: true,
    ryan: {
        angela: "sample"
    }
}

let value = myObject.dwight; // 'sample'

if (typeof value === 'string') {
        console.log('this value is a string');
   } else if (typeof value === 'number') {
        console.log('this value is a number');
   } else if (typeof value === 'boolean') {
        console.log('this value is a boolean');
   } else if (typeof value === 'object') {
        console.log('this value is an object');
   } else {
        console.log('what are you?!')
    }  
