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
