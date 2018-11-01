function outer() {
    var tiger = 100;//It is a closure
    var lion = 200;
    function inner() {
        console.log(tiger);//here, tiger is illegally accessed. hence tiger is closure. Since lion is not accessed from inner, it is not a closure.
    }

    return inner;
}

var inf = outer();
inf();//tiger zinda hai, kyunki ye closure hai.

/*
So why we need closures?
Because JS did not have traditional OO class initially there was a need to create "fields" somehow.

Look at below code, id and name are accessed from print, they must be alive even after the Employee(id, name) is dead(finishes), so that we can call print() and are still be able to access these just because JS has concept of closure. 
*/
function Employee(id, name){
    this.id = id;
    this.name = name;
    Employee.prototype.print = function(){
        console.log(this.id, this.name);
    }
}
