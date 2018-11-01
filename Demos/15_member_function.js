
var person = {
    id: 1,
    name: "Brendan",
    print: function(header){
        console.log(header);
        console.log(this);
    }
};

person.print();

Object.defineProperty(person, 'print', {enumerable: false});

person.print("Person: ");
