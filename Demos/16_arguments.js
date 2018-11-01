function testArg(){
    console.log(arguments);

    for(let i=0; i< arguments.length; i++){
        console.log(arguments[i]);
    }

}
testArg();
testArg(1,2,3,4);
console.log("trying...");

function sum(){
    let sum=0;
    for(let i=0; i< arguments.length; i++){
        sum+=arguments[i];
    }
    return sum;
}

console.log(sum());
console.log(sum(1,2,3,4,5));
console.log(sum(10,20,30,40,50, 60, 70));
