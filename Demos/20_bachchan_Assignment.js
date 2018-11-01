var amitabh = { };

amitabh.name = "Amitabh";
amitabh.surname = "Bachchan";
amitabh.print = function() {
    console.log("---------------------------"); 
    for(property in this){
        console.log(property+" "+this[property])
    }
}
Object.defineProperty(amitabh, "print", {enumerable: false});

amitabh.print();

var abhishek = Object.create(amitabh);

abhishek.print();

abhishek.name = "Abhishek";

abhishek.print();

abhishek.spouse = "Aishwarya";

amitabh.familyBusiness = "Acting";

amitabh.print();
abhishek.print();