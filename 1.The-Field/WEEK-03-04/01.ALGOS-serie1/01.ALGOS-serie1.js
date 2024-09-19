console.log("#####01.ALGOS-serie1#####");
console.log("");
console.log("==00.exo");
/*Create a function that takes two arguments.
Both arguments are integers, a and b
Return true if one of them is 10 or if their sum is 10.
Notes :
- Don't forget to return the result.*/

/* function conditionNumber (a, b) {
if (typeof a === 'number' && typeof b === 'number'){
    if (Number.isInteger(a) && Number.isInteger(b)) {
        if (a === 10 || b === 10 || a + b === 10){
            return true;
        } else {
            return false;
        }
    } else {
        return false;
    }
} else {
    return false;
}
}
console.log(conditionNumber(6, 4)); // true */

console.log("");
console.log("==01.exo");
/* Create a function that takes the age in years and returns the age in days.
Notes :
- Use 365 days as the length of a year for this challenge.
- Ignore leap years and days between last birthday and now.
- Expect only positive integer inputs.*/

/* function convertAge (age){
    if (typeof age === 'number' && age >= 0 && Number.isInteger(age)){
        return age * 365;
    } else {
        return "Wrong input!";
    }
}
console.log(convertAge(10)); // 3650 */

console.log("");
console.log("==02.exo");
/*Create a function that takes a number as an argument.
Add up all the numbers from 1 to the number you passed to the function.
For example, if the input is 4 then your function should return 10 because 1 + 2 + 3 + 4 = 10.
Notes :
- Expect any positive number between 1 and 1000.*/

/* function randomNum (num) {
    if (typeof num !== 'number' || num < 0 || !Number.isInteger(num)){
        return "Error, try with a positiv number!";
    } else {
        let sum = 0;
        for (let i = 1; i <= num; i++){
        sum += i;
        }
        return sum;
    }
}
console.log(randomNum(15)); // 120
console.log(randomNum(-12)); // Error, try with a positiv number!
console.log(randomNum("abs")); // Error, try with a positiv number! */

console.log("");
console.log("==03.exo"); // Harder
/* Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.
Notes :
- All test arrays will have at least one element and are valid.*/

/* function numberArr(arr) {
    if (arr.length <= 0) {
        return "Invalid array"
    } else if (arr.length === 1){
        return [arr[0], arr[0]];
    } else {
        let min = Math.min(...arr);
        let max = Math.max(...arr);
        return [min, max];
    }
}

console.log(numberArr([1, 9, -7])); // [-7, 9]
console.log(numberArr([2])); // [2, 2]
console.log(numberArr([])); // Invalid array */

console.log("");
console.log("==04.exo");
/* A word is on the loose and now has tried to hide amongst a crowd of tall letters!
Help write a function to detect what the word is, knowing the following rules:
- The wanted word is in lowercase.
- The crowd of letters is all in uppercase.
- Note that the word will be spread out amongst the random letters, but their letters remain in the same order.*/

/* function findWord (letters){
    let wantedWord = '';

    for (let character of letters){
        if (character >= 'a' && character <= 'z') {
            wantedWord += character;
        }
    }
    return wantedWord;
}
console.log(findWord("UcUNFYGaFYFYGtNUH")); 
console.log(findWord("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(findWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment")); */

console.log("");
console.log("==05.exo");
/* You will be given an array of drinks, with each drink being an object with two properties:
name and price.
Create a function that has the drinks array as an argument and
return the drinks objects sorted by price in ascending order.

Assume that the following array of drink objects needs to be sorted:

drinks = [
    {name: "lemonade", price: 10},
    {name: "lime", price: 10},
    {name: "coke", price: 8},
    {name: "vodka", price: 17},
    {name: "water", price: 3},
]

Expected results
The output of the sorted drinks object will be:
sortDrinkByPrice(drinks) ➞ [
    {name: "water", price: 3},
    {name: "coke", price: 8},
    {name: "lemonade", price: 10 },
    {name: "lime" , price: 10},
    {name: "vodka", price: 17},
]*/

/* function sortedDrink (drinks){
    drinks.sort((first, second) => {
        if (first.price < second.price){
            return -1;
        } else if (first.price > second.price) {
            return 1;
        } else {
            return 0;
        }
    });
    return drinks;
}
const drinks = [
    {name: "lemonade", price: 10}, 
    {name: "lime", price: 10},
    {name: "coke", price: 8},
    {name: "vodka", price: 17},
    {name: "water", price: 3},
]
    console.log(sortedDrink(drinks)); */

console.log("");
console.log("==06.exo");
/* In this challenge, a farmer is asking you to tell him how many legs
can be counted among all his animals.
The farmer breeds three species:

- chickens = 2 legs
- cows = 4 legs
- pigs = 4 legs
The farmer has counted his animals and he gives you a subtotal for each species.
You have to implement a function that returns the total number of legs of all the animals.

Notes :
- Don't forget to return the result.
- The order of animals passed is animals(chickens, cows, pigs).
- Remember that the farmer wants to know the total number of legs and not the total number of animals.*/

/* function legsTot (chickens, cows, pigs){
    if (typeof chickens !== 'number' || !Number.isInteger(chickens) || chickens < 0
    || typeof cows !== 'number' || !Number.isInteger(cows) || cows < 0
    || typeof pigs !== 'number' || !Number.isInteger(pigs) || pigs < 0){
    return "Oops mistake, legs are counted with positive integers!";
} else {
    let totalChickenLegs = chickens * 2;
    let totalCowsLegs = cows * 4;
    let totalPigsLegs = pigs * 4;
    let totalLegs = totalChickenLegs + totalCowsLegs + totalPigsLegs;
    return totalLegs;
}
}
console.log(legsTot(1, 2, 3)); // 22 */

console.log("");
console.log("==07.exo");
/* Create a function that takes three arguments probability, prize, pay and returns true if
probability * prize > pay;
otherwise return false.
To illustrate:
profitableGamble(0.2, 50, 9)
... should yield true, since the net profit is 1 (0.2 * 50 - 9), and 1 > 0.
Notes :
- A profitable gamble is a game that yields a positive net profit
where net profit is calculated in the following manner:
net_outcome = probability_of_winning * prize - cost_of_playing.*/

/* function gamble(proba, prize, pay) {
    if (isNaN(proba) || isNaN(prize) || isNaN(pay)) {
        return "You have to use number to use this equation!"
    } else {
        if (proba * prize > pay){
            return true;
        } else {
            return false;
        }
    }
}
console.log(gamble(0.7, 40, 28)); // false */

console.log("");
console.log("==08.exo");
/* Create a function that returns the number of frames shown in a given number of minutes for a certain FPS.
Notes :
- FPS stands for "frames per second" and it's the number of frames a computer screen shows every second.*/

/* function fps(factor, res){
    if (isNaN(factor) || isNaN(res) || factor < 0 || res < 0){
        return 'Sorry bro, you should use positive numbers to get your FPS'
    } else {
        return factor * res * 60;
    }
}
console.log(fps(1, 1)); // 60
console.log(fps(10, 1)); // 600
console.log(fps(10, 25)); // 15000 */

console.log("");
console.log("==09.exo");
/*A vehicle needs 10 times the amount of fuel than the distance it travels.
However, it must always carry a minimum of 100 fuel before setting off.
Create a function which calculates the amount of fuel it needs, given the distance.
Notes :
- Distance will be a number greater than zero.
- Return 100 if the calculated fuel turns out to be less than 100.*/

/* function qtyFuel (km) {
    if (isNaN(km) || km < 0){
        return "To use this function you have to use a positive integer!"
    } else {
        if (km > 0 && km <= 10){
            return 100;
        } else {
            return km * 10;
        }
    }
}
console.log(qtyFuel(15)); // 150
console.log(qtyFuel(23.5)); // 235
console.log(qtyFuel(3)); // 100 */