// array spreaing 
let array1 = [1,2,3];
let array2 = [4,5,6];

let array3 = [...array1, ...array2]
console.log(array3)

// object spreaing 
let object1 = { firstName: 'John', lastName: 'Brown' }
let object2 = { age: 25 }

let newObject1 = { ...object1, ...object2 }
console.log(newObject1)

let student1 = {name:"John"}
let student2 = {name:"Mary"}
let newObject = {
 ...student1,
 ...student2,
 name: 'Daniel',
}
console.log(newObject)