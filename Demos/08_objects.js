var person = {
    id: 1,
    name: "Brendan",
    "404": 100
}

console.log(person);

console.log(person["name"]);
console.log(person.id);//shortcut
console.log(person["404"]);//Works
//console.log(person.404);//Error
var member = "id";
console.log(person[member]);
