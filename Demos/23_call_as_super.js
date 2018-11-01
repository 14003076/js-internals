function Employee(id, name, basic, hra, da){
    this.id = id;
    this.name = name;
    this.basic = basic;
    this.hra = hra;
    this.da = da;

    this.print = function(){
        return "Id: "+this.id+"\nName: "+this.name+"\nTotal Salary: "+this.printSalary();
    }

    Employee.prototype.printSalary = function(){
        return this.basic+this.hra+this.da;
    }
}

var emp = new Employee(1, 'Satyen', 1000, 200, 100);

function Manager(id, name, basic, hra, da, dept) {
    Employee.call(this, id, name, basic, hra, da);
    this.dept = dept;
}

var manager = new Manager(2, "Vikram", 10000, 200, 10, "IT");

console.log(emp);
console.log(manager);
