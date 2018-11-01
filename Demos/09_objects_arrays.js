var colors = ["red", "green", "blue", "yellow"];

for(index in colors){
    console.log(index);
}

for(color of colors){
    console.log(color);
}

var person = {
    id: 1,
    name: "Satyen"
}

for( p in person){
    console.log(p)
}

//of in objects gives error
// for( p1 of person){
//     console.log(p1)
// }
