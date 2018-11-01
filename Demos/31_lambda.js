function doSomeWork(unit, mycallback){
    console.log("before calling callback");
    mycallback();
    console.log("after calling callback");
}

doSomeWork(5, () => { console.log("Yahoo! work done") } );

//NOTE:- Using "this" in lambda will refer to it's parent function's "this". Lambda does not receive its own this.
