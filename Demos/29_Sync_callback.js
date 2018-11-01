function callback() {
    console.log("Yahoo! work done");
}

function doSomeWork(unit, mycallback){
    console.log("before calling callback");
    mycallback();
    console.log("after calling callback");
}

doSomeWork(5, callback);

