var person = { };

console.log(person);

console.log(person.__proto__);

person.__proto__.company = "Xerox";

console.log(person.__proto__);

console.log(person.company);//coming from proto

person.company = "Apple";//Writes will add to object

console.log(person.company);//coming from object

person.__proto__.__proto__.__proto__.__proto__.__proto__.hero="superman";//ERROR

console.log("trying...")