const message = "Hello, World!";
console.log(message);

// Functions
//older way
function addition_function(a, b) {
    return a+b
}

// newer way with =>
const addition = (a, b) => {
    return a+b
}

console.log(addition_function)
console.log(addition(1, 2))
console.log(addition)
console.log(addition(1, 2))
