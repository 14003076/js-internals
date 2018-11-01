//class is just Syntactic Sugar over prototypal OOP
class Employee {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }
    print(){
        console.log(this.id, this.name);
    }
}

var emp1 = new Employee(1, "Brendan");
var emp2 = new Employee(2, "Alan Kay");

emp1.print();
emp2.print();

class Manager extends Employee {
    constructor(id, name, dept) {
        super(id, name);
        this.dept = dept;
    }
    print(){
        super.print();
        console.log(this.dept);
    }
}

var manager = new Manager(3, 'Alan', 'IT');
manager.print(); 

