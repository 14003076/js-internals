a = 1;//Breakpoint
b = 2;//Breakpoint - Here, b becomes local due to hoisting(instead of becoming global first and then local) which automatically brings definition up.
var b;//Breakpoint
b = 3;//Breakpoint
console.log("trying...");//Breakpoint

f1(); //usually this gives error, but due to hoisting the definition is moved up in the code. hence, no error.
//Because scripts are written in multiple files which needs to bring all the definition up irrespective of the scripts in browser.

function f1(){
    console.log("Hello");
}