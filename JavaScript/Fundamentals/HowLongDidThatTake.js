// 1. Rewrite isPrime() to calculate primes faster
// 2. Try calculating the 100,000th and 1,000,000th prime numbers

Number.prototype.isPrime = function () {
    for (let i = 2; i <= Math.sqrt(this); i++) {    // 1. We don't need to search past the square root of the number
        if (this % i === 0) {
            return false;
        }
    }
    return true;
}

const { performance } = require('perf_hooks');
const start = performance.now();
let primeCount = 0;
let num = 2; // for math reasons, 1 is considered prime
while (primeCount < 1e4) {   // 2. 1e4 for 10,000, 1e5 for 100,000 , 1e6 for 1,000,000
    if (num.isPrime()) {
        primeCount++;
    }
    num++;
}
console.log(`The 10,000th prime number is ${num - 1}`);
console.log(`This took ${performance.now() - start} milliseconds to run`);

// 3. Which implementation of Fibonacci should be faster? Answer - Iterative Fibonacci implementation

// recursive
function rFib(n) {
    if (n < 2) {
        return n;
    }
    return rFib(n - 1) + rFib(n - 2);
}
rFib(20);

const { performance } = require('perf_hooks');
const start = performance.now();
console.log(rFib(20));
console.log(`This took ${performance.now() - start} milliseconds to run`);

// iterative
function iFib(n) {
    const vals = [0, 1];
    while (vals.length - 1 < n) {
        let len = vals.length;
        vals.push(vals[len - 1] + vals[len - 2]);
    }
    return vals[n];
}
iFib(20);

const { performance } = require('perf_hooks');
const start = performance.now();
console.log(iFib(20));
console.log(`This took ${performance.now() - start} milliseconds to run`);

// 4. Write a more efficient function to reverse a string

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
const reversed1 = story.split("").reverse().join("");

const { performance } = require('perf_hooks');
const start = performance.now();
console.log(reversed1);
console.log(`This took ${performance.now() - start} milliseconds to run`);
//  2.589 milliseconds

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}

const { performance } = require('perf_hooks');
const start = performance.now();
console.log(reverseString(story));
console.log(`This took ${performance.now() - start} milliseconds to run`);
// 2.910 milliseconds

const story = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident culpa nihil repellat nulla laboriosam maxime, quia aliquam ipsam reprehenderit delectus reiciendis molestias assumenda aut fugit tempore laudantium tempora aspernatur? Repellendus consequatur expedita doloribus soluta cupiditate quae fugit! Aliquid, repellat animi, illum molestias maiores, laboriosam vero impedit iusto mollitia optio labore asperiores!";
function reverseString2(str) {
    if (str === "")
        return "";
    else
        return reverseString2(str.substr(1)) + str.charAt(0);
}

const { performance } = require('perf_hooks');
const start = performance.now();
console.log(reverseString2(story));
console.log(`This took ${performance.now() - start} milliseconds to run`);
// 2.448 milliseconds


