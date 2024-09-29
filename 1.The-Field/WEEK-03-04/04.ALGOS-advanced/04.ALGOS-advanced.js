console.log("#####04.ALGOS-advanced#####");
console.log("");
console.log("==00.exo");
/* Create a functions that takes a num argument. You should then console.log all numbers from 1 to num.
But here’s the catch :
multiple of 3 should print “Fizz” and multiples of 5 should print “Buzz”.
Lastly if the number is multiple of 3 and 5, it should print FizzBuzz

Notes :
- Your code should be modular. You must be able to pass any numbers as n and the code should still work. */

/* function fzbz (num){
if (isNaN(num) || num <= 0 || !Number.isInteger(num)){
    return "Error, use a positive integer!";
} else {
    for (let i = 1; i <= num; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0){
            console.log("Buzz");
        } else {
            console.log(i);
        }
    };
}
}
fzbz(15); */

console.log("");
console.log("==01.exo");
/* Write a function called ransomNote which takes two parameters : noteText and magazineText.
The goal is : with all the words of magazineText, you should be able to create the noteText.
The function should return true if we are able to write the noteText with the words
from magazineText or false if we can't.

Notes :
Here are two examples :
- noteText = "this is a secret note to you from a secret admirer"
- magazineText = "puerto rico is a great place you must hike far from town to find a secret waterfall
that i am an admirer of but note that it is not as hard as it seems this is my advice to you"

In the case above, it would be false. Why ? Because all the words are present,
but secret appears only once in the magazineText, but there are two secret in the noteText

If the noteText was :
"this is a note to you from a secret admirer"

That would work and would be true*/

/* function ransomNote (noteText, magazineText){
    let noteWords = noteText.split(' ');
    let magazineWords = magazineText.split(' ');
    let noteCount = {};
    let magazineCount = {};

    for (let word of noteWords) {
        noteCount[word] = (noteCount[word] || 0) + 1;
    }

    for (let word of magazineWords) {
        magazineCount[word] = (magazineCount[word] || 0) + 1;
    }

    for (let word in noteCount) {
        if (noteCount[word] > (magazineCount[word] || 0)) {
            return false; 
        }
    }
    return true;
}
let noteText = "this is a note to you from a secret admirer";
let magazineText = "puerto rico is a great place you must hike far from town to find a secretwaterfall that i am an admirer of but note that it is not as hard as it seems this is my advice to you";
console.log(ransomNote(noteText, magazineText)); */

console.log("");
console.log("==02.exo");
/* A palindrome is any word or phrase that spells the same way both backward and forward.
For example : race car is a palindrome. (don't take spaces, periods, dots, etc in consideration)
Other examples : Madam, I'm Adam, radar, kayak, etc.
You should create a function isPalindrome that takes a parameter text and
returns a boolean indicating if the provided text is a palindrome or not.

Notes :
- You should be able to to ignore all special characters, spaces, dots, periods, etc. and be case insensitive */

/* function isPalindrome (text){
let cleanText = text.replace(/[^a-zA-Z]/g, "").toLowerCase();
let reverseText = cleanText.split('').reverse().join('');
return cleanText === reverseText;
}
console.log(isPalindrome("hello"));

// Without REGEX

function isPalindromeBis (text){
    text = text.toLowerCase();
    const alpha = "abcdefghijklmnopqrstuvwxyz"
    let cleanedText = "";
    for (let characters of text){
        if (alpha.includes(characters)){
        cleanedText += characters;   
        }
    }

    let reversedText = "";
    for (i = cleanedText.length - 1; i >= 0 ; i--){
        reversedText += cleanedText[i];
    }
    return cleanedText === reversedText;
}
console.log(isPalindromeBis("KAyAk"));

// Henrique version

const isPalindromeAgain = (str) => {
    const alphaBis = "abcdefghijklmnopqrstuvwxyz".split("");
    let arrBis = str.trim().toLowerCase().split("");
    
    arrBis = arrBis.filter((el) => {
        return alphaBis.includes(el);
    });
    
    const arrTestBis = [...arrBis].reverse();
    
    for (let i = 0; i < arrBis.length; i++){
        if (arrBis[i] !== arrTestBis[i]){
            return false;
        }
    }
    return true;
};
console.log(isPalindromeAgain("Madam, I'm Adam")); */


console.log("");
console.log("==03.exo");
/* Caesar Cipher is a way of "encrypting" a text that, supposably, Julius Caesar used in his communication.
We switch every letter with, for example, two letters before in the "alph"abet.
The Caesar cipher function will take two parameters str and num;
str represents the text we want to cipher and num de amount of letters you want to go forward or backward
(using negative numbers)

Notes :
- Make it case incensitive
- You should be able to loop back or forward into de the alphabet (if you have to go 3 from z, it would be c) */

/* function caesarCipher (str, num){
    str = str.toLowerCase();
    let charArray = str.split('');
    let result = '';

    const alphabet = 'abcdefghijklmnopqrstuvwxyz';

    for (let i = 0; i < charArray.length; i++){
        let char = charArray[i];
        if (alphabet.includes(char)){
            let index = alphabet.indexOf(char);
            let newIndex = (index + num) % alphabet.length;
            if (newIndex < 0){
                newIndex += alphabet.length;
            }
            result += alphabet[newIndex];
        } else {
            result += char;
        }
    }
    return result;
}
console.log(caesarCipher("hello world", 3));  // khoor zruog
console.log(caesarCipher("khoor zruog", -3)); // hello world
console.log(caesarCipher("abc xyz", 5));     // fgh cde
console.log(caesarCipher("z", 1));            // a */

console.log("");
console.log("==04.exo");
/* Create a function that takes a string parameter and return another string with all the words inversed.
Notes :
- The order of the words doesn't change, just the letters of each word */

/* function reverseWords (string) {
    string = string.toLowerCase();
    let words = string.split(' ');
    let reverseWords = [];

    for (i=0 ; i< words.length; i++){
    let word = words[i];
    let reverseWord = word.split('').reverse().join('');
    reverseWords.push(reverseWord);
    }

    let result = reverseWords.join(' ');
    return result;
}
console.log(reverseWords('This is a string of words')); // Siht si a gnirts fo sdrow */

// MAP METHOD :

/* function reverseWords(string) {
string = string.toLowerCase();
    // Séparer la chaîne en mots
    let words = string.split(' ');
    // Inverser chaque mot en utilisant map
    let reversedWords = words.map(word => 
        word.split('').reverse().join('')
    );
    // Assembler les mots inversés en une seule chaîne
    let result = reversedWords.join(' ');
    // Retourner le résultat
    return result;
}

// Exemples d'utilisation
console.log(reverseWords("Hello World"));  // "olleH dlroW"
console.log(reverseWords("JavaScript is fun"));  // "tpircSavaJ si nuf" */

console.log("");
console.log("==05.exo");
/* Create a function that takes an array and reverses it.
Notes :
- Don't use reverse()
- Don't create a new array and push elements to it. */

/* function reverseArray (array){
    let reversed = [];

    for (let i=array.length - 1; i>=0 ; i--){
        reversed.push(array[i]);
    }
    return reversed;
}
console.log(reverseArray([1, 2, 3, 4, 5])) // [5, 4, 3, 2, 1]
console.log(reverseArray(['apple', 'banana', 'cherry', 'date'])) // ['date', 'cherry', 'banana', 'apple'];
console.log(reverseArray([{ name: 'Alice', age: 30 },{ name: 'Bob', age: 25 },{ name: 'Charlie', age: 35 }]));
// [{name: 'Charlie', age: 35},{name: 'Bob', age: 25}, {name: 'Alice', age: 30}]   */

console.log("");
console.log("==06.exo");
/* Write a function that takes as argument an array of numbers numArray and the sum we want to obtain.
Your function should return every pair of numbers from numArray that adds up to the 'sum'
Notes :
- The result should be an array of arrays.
- Any number in the array can be used in multiple pairs (look at the "4" in the exemple below) */

/* function sumArray (numArray, sum){
    ket newNumArray = [...new Set (numArray)]
    let result = [];
    for (let i = 0; i < newNumArray.length; i++){
        for (let j = i + 1; j <newNumArray.length; j++){
            if (newNumArray[i] + newNumArray[j] === sum){
                result.push([newNumArray[i],newNumArray[j]]);
            }
        }
    }
    return result;
} */
console.log(sumArray([1, 2, 8, 13, 12, 9], 14)); 

console.log("");
console.log("==07.exo");
/* Fibonacci sequence starts with 1 and 1 and the next numbers are always the sum of the last two numbers. So... Here is the sequence :
1 1 2 3 5 8 13 21 34 ...
Write a function that takes a num number and returns an array with the num first elements of the Fibonacci sequence.
Notes :
- Recursion would be the best way to solve it but there is another simple way. */

/* function fibonacci (num){
    let fibArray = [];
    for (i = 0; i < num; i++){
        if (i === 0 || i === 1){
            fibArray.push(1);
        } else {
            let nextNumber = fibArray[i-1] + fibArray[i-2];
            fibArray.push(nextNumber);
        }
    }
    return fibArray;
}
console.log(fibonacci(4)); // [1, 1, 2, 3]
console.log(fibonacci(9)); // [1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(6)); // [1, 1, 2, 3, 5, 8] */