var person = {
    id: 1,
    name: "Brendan"
};

Object.defineProperty(person, "id", {writable: false});

person.id = 101;//no effect

console.log(person);

Object.defineProperty(person, "name" , {enumerable: false});
console.log(person);
console.log(person.name);

