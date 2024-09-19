console.log("#####03.ALGOS-serie3#####");
console.log("");
console.log("==00.exo");
/* Create a function that determines whether a number is Oddish or Evenish.
A number is Oddish if the sum of all of its digits is odd,
and a number is Evenish if the sum of all of its digits is even.
If a number is Oddish, return "Oddish". Otherwise, return "Evenish".
For example :
- oddishOrEvenish(121) should return "Evenish", since 1 + 2 + 1 = 4.
- oddishOrEvenish(41) should return "Oddish", since 4 + 1 = 5. */

/* function oddOrEven (num){
    let digits = num.toString().split('');
    let sum = 0;
    for (let i = 0; i<digits.length; i++){
        sum += parseInt(digits[i]);
    }
    if (sum % 2 === 0){
        console.log("Evenish");
        
    } else {
    console.log("Oddish");
    }
    console.log(digits.join(' + ')+ ' = ' + sum);
    console.log(sum + ` % 2 = ` + sum%2);
}
oddOrEven(43); // Oddish // 4 + 3 = 7 // 7 % 2 = 1
oddOrEven(373); // Oddish // 3 + 7 + 3 = 13 // 13 % 2 = 1
oddOrEven(4433); // Evenish // 4 + 4 + 3 + 3 = 14 // 14 % 2 = 0 */

console.log("");
console.log("==01.exo");
/* Create a function that takes an array of objects (groceries)
which calculates the total price and returns it as a number.
A grocery object has a product, a quantity and a price. */

/* function getTotalPrice (groceries){
    let totalPrice = 0;
    for (i = 0; i < groceries.length; i++){
        let item = groceries[i];
        totalPrice += parseFloat(item.quantity * item.price);
    }
    return totalPrice.toFixed(2);
}
console.log(getTotalPrice([{ product: "Milk", quantity: 1, price: 1.50 }])); // 1.50
console.log(getTotalPrice([{ product: "Milk", quantity: 3, price: 1.50 }])); // 4.50
console.log(getTotalPrice([
    { product: "Milk", quantity: 1, price: 1.50 },
    { product: "Eggs", quantity: 12, price: 0.10 },
    { product: "Bread", quantity: 2, price: 1.60 },
    { product: "Cheese", quantity: 1, price: 4.50 }
])); // 10.40
console.log(getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
])); // 0.30 */

console.log("");
console.log("==02.exo");
/* Given a string, reverse all the words which have odd length. The even length words are not changed.
Notes :
- There is exactly one space between each word and no punctuation is used. */

/* function reverseWord (string) {
    let words = string.split(' ');

    for (let i = 0; i < words.length; i++){
        if (words[i].length % 2 !== 0){
            words[i] = words[i].split('').reverse().join('');
    }
}
return words.join(' ');
}
console.log(reverseWord("Bananas")); //
console.log(reverseWord("One two three four")); // "enO owt eerht four"
console.log(reverseWord("Make sure uoy only esrever sdrow of ddo length")); // "Make sure you only reverse words of odd length" */

console.log("");
console.log("==03.exo");
/* Carlos is a huge fan of something he calls smooth sentences.
A smooth sentence is one where the last letter of each word is identical to the first letter the following word
(and not case sensitive, so "A" would be the same as "a").
The following would be a smooth sentence "Carlos swam masterfully"
because "Carlos" ends with an "s" and swam begins with an "s" and swam ends with an "m"
and masterfully begins with an "m".
Create a function that determines whether the input sentence is a smooth sentence,
returning a boolean value true if it is, false if it is not.
Notes :
- The last and first letters are case insensitive.
- There will be no punctuation in each sentence. */

/* function smoothSentences (sentence) {
    let words = sentence.toLowerCase().split(' ')
    for (i = 0; i < words.length -1 ; i++){
        let currentWord = words[i];
        let nextWord = words[i + 1];
        if (currentWord[currentWord.length - 1] !== nextWord[0]){
            return false
        }
    }
    return true;
}
console.log(smoothSentences("Marta appreciated deep perpendicular right trapezoids")); // true
console.log(smoothSentences("Someone is outside the doorway")); // false
console.log(smoothSentences("She eats super righteously")); // true */

console.log("");
console.log("==04.exo");
/* Create a function that takes an array of numbers and return
"Boom!" if the digit 7 appears in the array. Otherwise, return "there is no 7 in the array". */

/* function seven (numbers) {
for (let num of numbers){
    let numString = num.toString();
    if (numString.includes("7")) {
        return "Boom!";
    }
}
return "There is no 7 in the array";
}
console.log(seven([1, 2, 3, 4, 5])); // "there is no 7 in the array"
console.log(seven([1, 2, 7, 4, 5])); // "Boom!"
console.log(seven([10, 20, 30, 70])); // "Boom!" */

console.log("");
console.log("==05.exo");
/* Create a function that converts Celsius to Fahrenheit and vice versa.
Notes :
- Round to the nearest integer.
- If the input is incorrect, return "Error".
- Look on Google how to convert F to C and vice-versa */

/* function farenCels(temp) {
    let unit = temp.slice(-2).toUpperCase();
    let value = parseFloat(temp.slice(0, -2).trim());

if (isNaN(value) || (unit !== "°C" && unit !== "°F")){
    return "Error!";
} else {
    if (unit === "°C"){
        let fahrenheit = (value * 9/5) + 32;
        return Math.round(fahrenheit) + "°F";
    } else {
        let celsius = (value - 32) * 5/9;
        return Math.round(celsius) + "°C";
    }
}
}
console.log(farenCels("35°C")) // ➞ "95°F"
console.log(farenCels("19°F")) // ➞ "-7°C"
console.log(farenCels("33")) // ➞ "Error" */

console.log("");
console.log("==06.exo");
/* Given what is supposed to be typed and what is actually typed,
write a function that returns the broken key(s). The function looks like:
Notes :
- Broken keys should be ordered by when they first appear in the sentence.
- Only one broken key per letter should be listed.
- Letters will all be in lower case. */

/* function findBrokenKeys (expected, typed){
    let brokenKeys = [];
    for (let i = 0; i < expected.length; i++){
        if (expected[i] !== typed[i] && !brokenKeys.includes(expected[i])){
            brokenKeys.push(expected[i]);
        }
    }
    return brokenKeys;
}
console.log(findBrokenKeys("happy birthday", "hawwy birthday")) // ["p"]
console.log(findBrokenKeys("starry night", "starrq light")) // ["y", "n"]
console.log(findBrokenKeys("beethoven", "affthoif5")) // ["b", "e", "v", "n"] */