console.log("#####02.ALGOS-serie2#####");
console.log("");
console.log("==00.exo");
/*Create a function which returns the number of true values there are in an array.
Notes :
- Return 0 if given an empty array.
- All array items are of the type bool (true or false).*/

/* function countTrue (arr) {
let count = 0;
    if (arr.length === 0){
        return 0
    } else {
        for (let i = 0; i < arr.length; i++){
        if (arr[i] === true){
            count++;
        } 
        } 
            return count;
        }
}
console.log(countTrue([true, false, false, true, false])); //2
console.log(countTrue([false, false, false, false])); //0
console.log(countTrue([])); //0 */

console.log("");
console.log("==01.exo");
/*In a board game, a piece may advance 1-6 tiles forward depending on the number rolled on a six-sided die.
If you advance your piece onto the same tile as another player's piece, both of you earn a bonus.
Can you reach your friend's tile number in the next roll?
Create a function that takes your position a and your friend's position b and
returns a boolean representation of whether it's possible to earn a bonus on any die roll.
Notes :
- You cannot move backward (which is why example #3 doesn't work).
- If you are already on the same tile, return false, as you would be advancing away.
- Expect only positive integer inputs.*/

/* function position (a, b){
    if (isNaN(a) || !Number.isInteger(a) || a < 0
    || isNaN(b) || !Number.isInteger(b) || b < 0){
        return 'Use a positive integer!'
    }
    if (b < a || a === b){
        return false;
    }
    let difference = b - a;
    if (difference <= 6){
        return true;
    }
    return false;
}
console.log(position(3, 7)); // true
console.log(position(2, 2)); // false
console.log(position(5, 3)); // false */


console.log("");
console.log("==02.exo");
/* Create a function that will return an integer number
corresponding to the amount of digits in the given integer num.*/

/* function number (num){
    if (isNaN(num) || !Number.isInteger(num)){
        return `Use an integer!`
    }
    return num.toString().length;
}
console.log(number(1000)); // 4
console.log(number(12)); // 2
console.log(number(1305981031)); // 10
console.log(number(0)); // 1 */



console.log("");
console.log("==03.exo");
/* Write a function that converts an object into an array,
where each element represents a key-value pair in the form of an array.
Notes :
- Return an empty array if the object is empty.*/

/* function objToArray (obj){
    if (obj.length === 0){
        return [];
    }
    return Object.entries(obj);
}
console.log(objToArray({ a: 1, b: 2 })); // [["a", 1], ["b", 2]]
console.log(objToArray({ shrimp: 15, tots: 12 })); // [["shrimp", 15], ["tots", 12]]
console.log(objToArray({})); // [] */

console.log("");
console.log("==04.exo");
/* Create a function that takes two numbers as arguments (num, length)
and returns an array of multiples of num until the array length reaches length.
Notes :
- Notice that num is also included in the returned array. */

/* function numToArray (num, length){
    let result = [];
    if (isNaN(num) || isNaN(length) || !Number.isInteger(num) || !Number.isInteger(length)){
        return error;
    }
    for (i = 1; i <= length ; i++){
        result.push(num * i);
    }
    return result
}
console.log(numToArray(7, 5)); // [7, 14, 21, 28, 35]
console.log(numToArray(12, 10)); // [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(numToArray(17, 6)); // [17, 34, 51, 68, 85, 102] */

console.log("");
console.log("==05.exo");
/* Create a function that takes in a number as a string n and
returns the number without trailing and leading zeros.
- Trailing Zeros are the zeros after a decimal point which don't affect the value
(e.g. the last three zeros in 3.4000 and 3.04000).
- Leading Zeros are the zeros before a whole number which don't affect the value
(e.g. the first three zeros in 000234 and 000230).
Notes :
- Return a string.
- If you get a number with .0 on the end, return the integer value (e.g. return "4" rather than "4.0").
- If the number is 0, 0.0, 000, 00.00, etc... return "0". */

/* function delZero (num) {
    if (isNaN(num) || num <0){
        return `Error, we need a positive number!`
    }
    return parseFloat(num).toString();
    }
console.log(delZero("230.000")); // 230
console.log(delZero("00402")); // 402
console.log(delZero("03.1400")); // 3.14
console.log(delZero("30")); // 30 */

console.log("");
console.log("==06.exo");
/* In this challenge you will be given an array similar to the following:
[[3], 4, [2], [5], 1, 6]
In words, elements of the array are either an integer or an array containing a single integer.
We humans can clearly see that this array can reasonably be sorted according to
"the content of the elements" as:
[1, [2], [3], 4, [5], 6]
Create a function that, given an array similar to the above, sorts the array according to the
"content of the elements".
Notes :
- To reiterate, elements of the array will be either integers or arrays with a single integer */

/* function sortArray (arr){
    let downloadValue = arr.map(item => {
        let value = Array.isArray(item) ? item[0] : item;
        return [value, item];
    });
    downloadValue.sort((a, b) => a[0] - b[0]);
    return downloadValue.map(item => item[1]);
}
console.log(sortArray([4, 1, 3])); // [1, 3, 4]
console.log(sortArray([[4], [1], [3]])); // [[1], [3], [4]]
console.log(sortArray([4, [1], 3])); // [[1], 3, 4]
console.log(sortArray([[4], 1, [3]])); // [1, [3], [4]]
console.log(sortArray([[3], 4, [2], [5], 1, 6])); // [1, [2], [3], 4, [5], 6] */

console.log("");
console.log("==07.exo");
/* Create a function that takes two numbers and a mathematical operator + - / *
and will perform a calculation with the given numbers.
Notes :
- If the input tries to divide by 0, return: "Can't divide by 0!" */

/* function calc (num1, operator, num2) {
    if (isNaN(num1) || isNaN(num2) ||
    operator !== "+" && operator !== "-" && operator !== "/" && operator !== "*"){
        return "Can't be calculated. Check values and mathematical operator. Try again!"
    }
    if (operator === '/' && num2 === 0) {
        return "Can't divide by 0!"
    }
    switch (operator) {
        case '+' : 
            return num1 + num2;
        case "-" : 
            return num1 - num2;
        case "*" : 
            return num1 * num2;
        case "/" : 
            return num1 / num2;
    }
}
console.log(calc(2, "+", 2)); // 4
console.log(calc(2, "*", 2)); // 4
console.log(calc(4, "/", 2)); // 2 */

console.log("");
console.log("==08.exo");
/* Create a function that takes a country's name and its area as arguments and
returns the area of the country's proportion of the total world's landmass.
Notes :
- The total world's landmass is 148,940,000 [Km^2]
- Round the result to two decimal places. */

/* function areaOfCountry (country, area){ // How to verify if it's a real country without list?
    if (typeof country !== 'string' || isNaN(area) || area < 0){
        return `Please type a real country with his real area (in km²) to process the code.`
    }
    let percentage = (area / 148940000)*100
    return `${country} is ${percentage.toFixed(2)}% of the total world's landmass`
}
console.log(areaOfCountry("Russia", 17098242)); // "Russia is 11.48% of the total world's landmass"
console.log(areaOfCountry("USA", 9372610)); // "USA is 6.29% of the total world's landmass"
console.log(areaOfCountry("Iran", 1648195)); // "Iran is 1.11% of the total world's landmass" */

console.log("");
console.log("==09.exo");
/* Given an input string, reverse the string word by word, the first word will be the last, and so on.
Notes :
- A word is defined as a sequence of non-space characters.
- The input string may contain leading or trailing spaces.
However, your reversed string should not contain leading or trailing spaces.
- You need to reduce multiple spaces between two words to a single space in the reversed string. */

/* function reverseWords (string) {
    string = string.trim();
    let everyWords = string.split(' ').filter(word => word.length > 0);
    let reverseEveryWords = everyWords.reverse();
    return reverseEveryWords.join(' ');
}
console.log(reverseWords(" the sky is blue")); // "blue is sky the"
console.log(reverseWords("hello   world!  ")); //  "world! hello"
console.log(reverseWords("a good example")); // "example good a" */