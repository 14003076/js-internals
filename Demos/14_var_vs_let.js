function f1(){
    var a = 100;//function level scope
    if(true){
        var b = 200;//function level scope
        let c = 500;//If level scope
        console.log("If block: "+a);
        console.log("If block: "+b);
        console.log("If block: "+c)    
    }
    console.log("function block: "+a);
    console.log("function block: "+b);
    //console.log("function block: "+c)//Error
}

f1();

//console.log("Anonymous function block "+a);//Error
//console.log("Anonymous function block "+b);//Error
//console.log("Anonymous function block "+c)//Error
