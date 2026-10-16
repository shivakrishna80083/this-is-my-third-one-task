

//   Part 1: Functions and Parameters (5 Questions)

function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();


function studentDetails(name, age, cgpa) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("CGPA:", cgpa);
}

studentDetails("Shiva", 23, 8.5);
studentDetails("Priya", 22, 9.0);


function calculateFee(fee) {
    return fee;
}

let studentFee = calculateFee(50000);

console.log("Student Fee:", studentFee);



function discount(percent) {
    let fee = 200000;
    let discountAmount = fee * percent / 100;
    let finalFee = fee - discountAmount;

    console.log("Original Fee: ₹" + fee);
    console.log("Discount Percentage:", percent + "%");
    console.log("Discount Amount: ₹" + discountAmount);
    console.log("Final Fee: ₹" + finalFee);
}

discount(10);
discount(20);


function studentForm(name, age, disability = "no") {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Disability:", disability);
    console.log("-------------------");
}

studentForm("Shiva", 23, "yes");
studentForm("Priya", 22, "no");
studentForm("Rahul", 21);



//   Part 2: Function Types and Scope (5 Questions)



function printMessage(message) {
    console.log(message);
}

printMessage("Welcome to JavaScript");
printMessage("JavaScript is easy to learn");


let displayName = function(name) {
    console.log("Student Name:", name);
};

displayName("Shiva");
displayName("Priya");


const printNumber = (number) => {
    console.log(number);
};

printNumber(100);
printNumber(200);



function checkScope() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;

        console.log("Inside block - var:", a);
        console.log("Inside block - let:", b);
        console.log("Inside block - const:", c);
    }

    console.log("Outside block - var:", a);

    }

checkScope();


console.log(value);
var value = 10;


//   Part 3: Callback and Higher-Order Functions (6 Questions)



function first(callback) {
    console.log("First function");
    callback();
}
function second() {
    console.log("Second function");
}
first(second);


function add(callback, a, b) {
    console.log("Addition:", a + b);
    callback(a, b);
}
function result(num1, num2) {
    console.log("Callback received:", num1, num2);
}
add(result, 10, 5);



function add(callback, a, b) {
    console.log("Addition:", a + b);
    callback(a, b);
}
const sub = (num1, num2) => {
    console.log("Subtraction:", num1 - num2);
};
add(sub, 20, 10);


function multiply(callback, a, b) {
    console.log("Multiplication:", a * b);
    callback();
}
function message() {
    console.log("Multiplication completed");
}
multiply(message, 5, 4);



function divide(num1, num2) {
    if (num2 === 0) {
        console.log("Cannot divide by zero");
    } else {
        console.log("Division:", num1 / num2);
    }
}

function calculate(callback, a, b) {
    console.log("Calculating division...");
    callback(a, b);
}
calculate(divide, 20, 4);


function studentDetails(callback, name) {
    console.log("Student details:");
    console.log("Callback:", callback);

    if (typeof callback === "function") {
        callback(name);
    } else {
        console.log("Error: Callback must be a function");
    }
}
function displayName1(studentName) {
    console.log("Student Name:", studentName);
}
studentDetails(displayName1, "Shiva");



//  Part 4: Generator Functions (5 Questions)


function* cashbackOffers() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
const offers = cashbackOffers();
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);



function* cashbackOffers() {
    yield "10% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}
const offer = cashbackOffers();
console.log(offer.next());
console.log(offer.next());
console.log(offer.next());



function* discountMessages() {
    yield "5% discount";
    yield "10% discount";
    yield "15% discount";
    yield "20% discount";
    yield "Better luck next time";
}
for (let message of discountMessages()) {
    console.log(message);
}



function* studentNames() {
    yield "Shiva";
    yield "Priya";
    yield "Rahul";
}
for (let name of studentNames()) {
    console.log(name);
}



function* numbers() {
    yield 10;
    yield 20;
    yield 30;
    yield 40;
}
const generator = numbers();
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());



//   Part 5: Currying and Uncurrying (5 Questions)



function add(a, b, c) {
    console.log("Sum:", a + b + c);
}
add(5, 10, 15);



function add1(a) {
    return function (b) {
        return function (c) {
            console.log("Sum:", a + b + c);
        };
    };
}
add1(5)(10)(15);



function add2(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}
let result1 = add2(5)(10)(15);
console.log("Result:", result1);



function calculateTotal(price) {
    return function (discount) {
        return function (quantity) {
            let discountedPrice = price - (price * discount / 100);
            return discountedPrice * quantity;
        };
    };
}
let total = calculateTotal(1000)(10)(3);
console.log("Total Discounted Price: ₹" + total);



// Normal function
function normalAdd(a, b, c) {
    return a + b + c;
}

// Curried function
function curriedAdd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
}

let normalResult = normalAdd(5, 10, 15);
let curriedResult = curriedAdd(5)(10)(15);

console.log("Normal Result:", normalResult);
console.log("Curried Result:", curriedResult);
console.log("Are results equal:", normalResult === curriedResult);


//   Part 6: IIFE, Return, and Mixed Practice (4 Questions)



(function (productName, discount) {
    console.log(
        `Special offer! ${productName} is available at ${discount}% discount.`
    );
})("Laptop", 15);




function getNumber() {
    return 100;
}
let result2 = getNumber();
console.log("Returned Number:", result2);



function getMarks(marks) {
    return marks;
}
let studentMarks = getMarks(85);
console.log("Student Marks:", studentMarks);





function calculateDiscount(fee, discountPercent) {
    return (fee * discountPercent) / 100;
}
function studentFee1(fee = 50000, discountPercent = 10, callback) {
    let discountAmount = callback(fee, discountPercent);
    let finalFee = fee - discountAmount;
    return finalFee;
}
let finalAmount = studentFee1(
    60000,
    15,
    calculateDiscount
);
console.log("Final Student Fee: ₹" + finalAmount);