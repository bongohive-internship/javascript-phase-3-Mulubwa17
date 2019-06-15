// solutions to the exercises mentioned in the readme should be in this file.
var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");

if (parseInt(num1, 10) > parseInt(num2, 10)) {
    console.log("The larger of " + num1 + " and " + num2 + " is " + num1 + ".");
} else
if (parseInt(num2, 10) > parseInt(num1, 10)) {
    console.log("The larger of " + num1 + " and " + num2 + " is " + num2 + ".");
} else {
    console.log("The values " + num1 + " and " + num2 + " are equal.");
}

//
for (var x = 0; x <= 15; x++) {
    if (x === 0) {
        console.log(x + " is even");
    } else if (x % 2 === 0) {
        console.log(x + " is even");
    } else {
        console.log(x + " is odd");
    }
}
//
var sum = 0;
for (var i = 0; i < 1000; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        sum += i;
    }
}
console.log('Sum: %d', sum);
//
function assignGrade(score) {
    if (score >= 90) {
        return 'A';
    } else if (score >= 80) {
        return 'B';
    } else if (score >= 70) {
        return 'C';
    } else if (score >= 60) {
        return 'D';
    } else {
        return 'F';
    }
}

console.log('My grade is ' + assignGrade(65) + '.');