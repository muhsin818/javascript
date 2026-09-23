let printName = function() {
    console.log("Muhsin");
};

// printName();

// setTimeout(printName, 10000);
// setInterval(printName, 1000);

let timer = setInterval(printName, 1000);
// clearInterval(timer);

setTimeout(function() {
    clearInterval(timer);
}, 5000);
