var amitabh = { };

amitabh.name = "Amitabh";
amitabh.surname = "Bachchan";
amitabh.print = function() {
    console.log(this.name+" "+this.surname+" "+this.spouse+" "+this.familyBusiness);
}

amitabh.print();

var abhishek = Object.create(amitabh);

abhishek.print();

abhishek.name = "Abhishek";

abhishek.print();

abhishek.spouse = "Aishwarya";

amitabh.familyBusiness = "Acting";

amitabh.print();
abhishek.print();
