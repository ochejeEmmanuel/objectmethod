
// let obj1 = {name: 'sam'}
// let obj2 = {track: 'web2'}
// let obj3 = {mode: 'game', firstName : "John", lastName : "Doe", age : 50, eyeColor : "blue"}

// // object.assign
// // console.log(obj1);
// // Object.assign(obj2,obj1,obj3)
// // console.log(obj2);

// // object.assign
// // let obj4 = Object.create(obj2)
// // obj4 = {name: 'emma'}
// // console.log(Object.getPrototypeOf(obj4));

// console.log(Object.keys(obj3));
// console.log(Object.values(obj3));

// let obj4 = {mode: 'game', firstName : "John", lastName : "Doe", age : 50, eyeColor : "blue"}

// Object.freeze(obj4)

// console.log(obj4);
// console.log(Object.isFrozen(obj4));

personalInfo = {
    name: "Emma",
    age: 25,
    school: "University of Jos",
    lab: "Blockfuse Lab"
}

contactInfo = { 
    phoneNumber: 808,
    address: "Kwang",
    road: "Rayfield road"
}

let userProfile = Object.assign(personalInfo, contactInfo)

console.log(userProfile);


product = {
    car: "BMW",
    club: "Man u",
    europe: "England",
    trophy: "Champions League"
}

console.log(product);
console.log(Object.keys(product));
console.log(Object.values(product));

settings = {
    theme: "dark",
    notification: true,
    phone: "Infinix",
    laptop: "HP"
}

Object.freeze(settings)
settings.theme = "light"
console.log(settings);
console.log(Object.isFrozen(settings));
