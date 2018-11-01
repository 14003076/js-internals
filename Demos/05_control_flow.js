//Sum of first 100 natural numbers
var sum = 0;
for(var i=1; i<=100; i++){
    sum += i;
}
console.log(sum);

sum = 0;
var i = 1;
while(i <= 100) {
    sum += i;
    i++;
}
console.log(sum);

sum = 0;
var i = 1;
do {
    sum += i;
    i++;
} while(i<=100);
console.log(sum);

console.log("**********************************************************")

var a = 1;
var b;

if(b==null){
    console.log("b is null");
}else {
    console.log("b is not null");
}

console.log(c);

if(c == undefined){
    console.log("c is undefined");
}else {
    console.log("c is not undefined");
}
