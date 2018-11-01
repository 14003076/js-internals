function Employee(id, name, basic, hra, da){
    this.id = id;
    this.name = name;
    this.basic = basic;
    this.hra = hra;
    this.da = da;

    //This goes in Function object, not accessible from instances of this function
    Employee.count++;

    //Every instance will get their own copy of print function
    this.print = function(){
        return "Id: "+this.id+"\nName: "+this.name+"\nTotal Salary: "+this.printSalary();
    }
    
    //Now, their exist only one copy of function inside the prototype of function or __proto__ of all instances of Function  <- Good Practice
    Employee.prototype.printSalary = function(){
        return this.basic+this.hra+this.da;
    }

    //all vars are lost as the instance of function creation is over - No Use
    var PI=3.14;
}

var emp = new Employee(1, 'Satyen', 1000, 200, 100);

console.log(emp.print());
console.log(Employee.count);

