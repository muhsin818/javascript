 let person1 = {
 firstName : "Muhsin",
 lastName : "Hassan",
 age : 22,
 town : "New York",
 }
let person2 = {
 firstName : "Twahir", 
 lastName : "Ali",
 age : 25,
 town : "Los Angeles",
}

// console.log(person1)
// console.log(person2)
// console.log(person2.lastName);

for (let key in person1) {
    console.log(key + " : " + person1[key]);
}

