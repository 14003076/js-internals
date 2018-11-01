function Employee(id, name, basic, hra, da){
    this.id = id;
    this.name = name;
    this.basic = basic;
    this.hra = hra;
    this.da = da;

    //Every object will get their own copy of print function
    this.print = function(){
        return "Id: "+this.id+"\nName: "+this.name+"\nTotal Salary: "+this.printSalary();
    }
    
    //Now, their exist only one copy of function <- Good Practice
    Employee.prototype.printSalary = function(){
        return this.basic+this.hra+this.da;
    }
}


var employees = [];
employees[0] = new Employee(1, 'Satyen', 1000, 200, 100);
employees[1] = new Employee(2, 'Vikram', 2000, 300, 200);
employees[2] = new Employee(3, 'Dinesh', 3000, 400, 300);
employees[3] = new Employee(4, 'Pooja', 4000, 500, 400);
employees[4] = new Employee(5, 'Aditya', 5000, 600, 500);

for (let employee of employees) {
    console.log(employee.print());
    console.log("---------------------------------")
}
