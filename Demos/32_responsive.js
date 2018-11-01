console.log("Heavy Work started...")
for (var i = 0; i < 100000; i++) {
    console.log(i);
    postMessage(i);
}
console.log("heavy work completed...")
