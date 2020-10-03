// SOME QUICK NOTES ON OBJECTS AND ARRAYS


let obj1 = {
    a: 0,
    b: 1


};

let obj2 = {
    a: 0,
    b: 1

};
//console.log(obj1 === obj2);




let arr1 = [4, 9, 33];

let arr2 = [4, 9, 33];

console.log(arr1 === arr2);


let empty = [];

function checkIfEmpty(arr) {
    return arr.length === 0;
}

console.log(checkIfEmpty(empty));


function assign3ToB (obj) {
    obj.b = 3;
}

function assignKToString (str) {
    str = 'King Kong';
}

//let obj = {
//    a: 2
//};

let str = 'Godzilla';

assignKToString(str);

console.log(str);

assign3ToB(obj)

console.log(obj);








let str1 = 'mountain'; 

let str2 = 'mountain';

console.log(str1 === str2);