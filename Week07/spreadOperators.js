/*

-SPREAD OPERATOR

- the spread operator pulls out all elements in an array and gives them back to you as a standalone list of elements
- denoted by ...

*/ 

const fullName = ['Zach', 'Maynard'];
//...fullName //'Zach' , 'Maynard'

const copiedFullName = [...fullName];
console.log(copiedFullName);

fullName.push('Mr'); //will not show up in copiedFullName because of order the code is read (top to bottom)
console.log(fullName, copiedFullName);

//SPREAD OPERATOR AND NUMBERS

console.log(Math.min(1, 5, -3));

const prices = [10.99, 5.99, 3.99, 6.59];
console.log(prices);
console.log(Math.min(...prices));

//SPREAD OPERATOR AND OBJECTS

const persons = [{name: Zach, age: 27},{name: Donovan, age: 24}];
const copiedPersons = [...persons];
// console.log(copiedPersons);

persons.push({name: 'Anna', age: 30});
persons[0].name = 'Zachary';
console.log(persons, copiedPersons);
/*
        - JS has five data types that are pased by value: boolean, null, undefined, string, and number..these are known as primitive data types
            - if a primitive data type is assigned to a primitive variable, we can think if that variable as containing a primitive value

            let x = 10;
            let y = 'abc';
            let z = null;

            // x contains 10, y contains 'abc', z contains null, all of these values primitive data types

            VARIABLES    VALUES
            x            10
            y            'abc'
            z            null
            a            10
            b            'abc'

            // when we assign the above variables to another variable using =, we copy the value of the new variable - and they are copied by value

            let a = x;
            let b = y;

            -JS has 3 data types that are copied/passed by reference: array,function, and object. These are all technically objects, so we'll refer to them collectively as objects.
                - variables that are assigned a non-primitive varable type are given a reference to that value. The reference point to the objects location in memory - the variables don't actually contain the value.
                    - objects are created at a location on your computers memory. When we write arr = [], we've created an array in memory - what the variable recieves as the value is the address (or location) of that array in memory.

                    let arr = [];

                    VARIABLES    VALUES     ADDRESS     OBJECTS
                    arr          <#001>     #001        []

                    arr.push(1)

                    VARIABLES    VALUES     ADDRESS     OBJECTS
                    arr          <#001>     #001        [1]

                    - when a reference type value, or a non primitive data type (arr, function, object) is copied to another variabwl using =, the address of that value is what's actually copied over as if it were primitive. Arrays, functions, and objectsare copied by reference value, instead of a primitive value.

                    let reference = [1];
                    let refCopy = reference;

                    VARIABLES    VALUES     ADDRESS     OBJECTS
                    reference    <#002>     #002        [1]
                    refCopy      <#002>     

                    - each variable now contains a reference to the same array. That means if we alter one of the variable, the other will see the same changes.


*/

let x = 10;
let y = 'abc';
let z = null;

let a = x;
let b = y;

console.log(x,y,z,a,b);

let arr = [];
console.log(arr);

arr.push(1);
console.log(arr);

let reference = [1];
let refer = reference;
console.log(reference, refCopy);

reference.push(2);
console.log(reference, refCopy);

/////////////////////////////////////////////////////////

const persons = [{name: Zach, age: 27},{name: Donovan, age: 24}];
const copiedPersons = [...persons];
// console.log(copiedPersons);

persons.push({name: 'Anna', age: 30});
persons[0].name = 'Zachary';
console.log(persons, copiedPersons);

// SPREAD OPERATOR AND AVOIDING CHANGING BOTH THE ORIGINAL AND COPIED ARRAY

const persons = [{name: Zach, age: 27},{name: Donovan, age: 24}];
// if we want to avoid changing both the original and copies array, we would need to copy every object as well.
const copiedPersons = persons.map(person => ({
    name: person.name,
    age: person.age
})) // since we're returning something in curly braces ( object) we have to enclose it so JS doesn't think it is the functions body

person.push({name: 'Anna', age: 30});
copiedPersons[0].name = 'Zachary';

console.log(persons, copiedPersons);