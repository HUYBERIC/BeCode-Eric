# ==COMPLET GUIDLINE FOR THE FIRST JAVASCRIPT MODULE==

> to link your JS file to your HTML file, put "<script src="namefile.js"></script>" in your HTML just above de closing body tag.
prompt() => the user have to write something in a pop-up.
alert() => the user have ton read a pop-up (can't write).

## ==1. VARIABLES==
var, let and const :
* var affect the global scope
* const is locally scoped and constant
* we can use the same variable if they are not in the same scope (carefull with var...)

## ==2. DATA TYPES==

#### ***STRINGS***
* Proprety (lenght)
> const myString = "I am a super hero!";
> console.log(myString.length);

***or we can do :*** 

> const myString = "Hello, World!";
> myString[0]; // Result : "H"
> myString[1]; // Result : "e"
> myString[2]; // Result : "l"
> myString[3]; // Result : "l"
> myString[4]; // Result : "o"
> myString[5]; // Result : ","

###### * Methods

###### *Slice*
> Cut a string with index of begin and index where it stop (not included).

let account = "BE97684531265";
account.slice(3, 7);
console.log(account) return "7684" beacause 7 is the 3rd index and we go till the 7th index not included.

###### *Replace*
> Replace a specific part of the string with another content.

const myString = "I am very sad";
myString.replace("sad", "happy"); // variable didn't change
myString = myString.replace("sad", "happy"); // variable changed

###### *Concatenation*
> Combine different piece of text with the "+" sign or with the `${}` syntax in the text.

const name = "Henrique";
console.log("Hello, I am " + name);

***or we can do :***

const user = "Henrique";
let age = 35;
const greeting = `Hello, ${user} ! You are ${age} years old.`;
console.log(greeting);

###### *UpperCase & LowerCase*
> ToUpperCase() function in programming is used to convert all lowercase letters in a string to uppercase.

let text = "hello world";
let upperText = text.toUpperCase(); // Result: "HELLO WORLD"

> ToLowerCase() function converts all uppercase letters in a string to lowercase.

let text = "HELLO WORLD";
let lowerText = text.toLowerCase(); // Result: "hello world"

###### *Index & lastIndex*
> IndexOf(): Finds the position of the first occurrence of a specified value in a string. Returns the index or -1 if not found.

let text = "hello world";
let index = text.indexOf("o"); // Result: 4

> LastIndexOf(): Finds the position of the last occurrence of a specified value in a string. Returns the index or -1 if not found.

let text = "hello world";
let lastIndex = text.lastIndexOf("o"); // Result: 7

###### *Trim*
> Trim(): Removes whitespace from both ends of a string.

let text = "   hello world   ";
let trimmedText = text.trim(); // Result: "hello world"

#### ***NUMBERS***
* Operators

Basis operators :
let num1 = 3;
let num2 = 2;
console.log(num1 + num2); // Returns 5
console.log(num1 * num2); // Returns 6
console.log(num1 - num2); // Returns 1
console.log(num1 / num2); // Returns 1.5
console.log(num1 ** num2); // Returns 9
console.log(num1 % num2); // Returns 1 rest

* The Math object

Math.random() * number ; generate à number between 0 and the factor.
Math.round(); round a number.
Math.floor(); round a number to the lower integer.
Math.ceil(); round a number to the higher integer.
var.parseFloat(); transform a string in number.
var.parseInt(); transform and round a string to the lower integer.
var.toString(); transform a number to a string.
var.toFixed(); formats a number as a string with a specified number of digits after the decimal point.

* Assignment operators

num = num + 1 => num += 1
num = num - 2 => num -= 2
num = num / 2 => num /= 2
num = num * 10 => num *= 10

#### ***NULL AND UNDEFINED***
>null and undefined are two data types we encounter in JS.
undefined means the variable has been declared, but its value has not been assigned.
null means an empty value or a blank value.

#### ***BOOLEANS***
>The boolean datatype is composed by two values : either true or false.
#### ***ARRAYS***
>Arrays are a collection of values (data-structure)

* Methods
var.pop(); Adds one or more elements to the end of an array and returns the new length of the array.
var.shift(): Removes the first element from an array and returns it.
var.unshift(): Adds one or more elements to the beginning of an array and returns the new length of the array.
var.concat(): Merges two or more arrays and returns a new array
var.join(): Combines all elements of an array into a string, separated by a specified delimiter.
var.split(): Splits a string into an array of substrings, based on a specified delimiter.
var.slice(): Returns a shallow copy of a portion of an array without modifying the original array.
var.splice(): Adds, removes, or replaces elements in an array by modifying the original array.
var.reverse(): Reverses the order of the elements in an array.
var.sort(): Sorts the elements of an array in place, by default in ascending order.
var.includes(): Checks if an array contains a specified value, returning true or false.

**var.forEach():**
const myArray = ["hello", "goodbye", "see you later"];
myArray.forEach(function (element) {
  console.log(element);
});
***Now, let's see :***
"hello"
"goodbye"
"see you later"

**var.map():**
const firstArray = [1, 2, 3, 4, 5];
const newArray = firstArray.map((element) => {
  return element * 5;
});
***Now, let's see :***
console.log(firstArray);
console.log(newArray);
***Return***
[1,2,3,4,5]
[5,10,15,20,25]
* Reference type
> An example is better than 1000 words.

let arr1 = [1, 2, 3];
let arr2 = arr1;  // Both arr1 and arr2 point to the same array
arr2.push(4);     // Modify arr2
console.log(arr1); // Result: [1, 2, 3, 4] - arr1 is also modified

let arr1 = [1, 2, 3];
let arr2 = [...arr1];  // Creates a new array copy
arr2.push(4);
console.log(arr1); // Result: [1, 2, 3] - arr1 is unchanged
console.log(arr2); // Result: [1, 2, 3, 4]

* Multidimensional arrays
> Array can have more than 1 dimension, we have to lock the good object with many index.

let cube = [
  [
    [1, 2], 
    [3, 4]
  ],
  [
    [5, 6], 
    [7, 8]
  ]
];
let element3D = cube[1][0][1];  // Accesses the element at depth 1, row 0, column 1
console.log(element3D);  // Result: 6

#### ***OBJECTS***
> Just like arrays, objects are what we call a data structure => a collection of values.
But while arrays are a collection of ordered values, objects don't work like that. We structure objects with what we call key/value pairs.

const user = {
  firstName: "Henrique",
  age: 35,
  isMarried: true,
  hasChildren: true,
  children: [
    {
      firstName: "Eva",
      age: 2,
    },
  ],
};// I can acess the firstName like so :
user["firstName"]; // Returns "Henrique" - Bracket method
user.firstName; // Returns "Henrique" - Dot notation method
// I can also chain things. Let's say I want to select the first element of the children array and select the age property :
user.children[0].age; // Returns 2

## ==3. CONDITIONALS==
#### ***COMPARISON***

more than >
less than <
equals to == (independent of data type. So 4 == "4" is true.)
strictly equals to === (dependant of data type. So 4 === "4" is false)
not equal to !=
strictly not equals to !==
more than or equal to >=
less than or equal to <=
strictly more than or equal to >==
strictly less than or equal to <==

* Logical Operators

&& = and
|| = or
! before a sign = not
NaN() = Not a Number

#### ***IF ELSE***
if (boolean) {
  // run this code
} else if (boolean) {
  // run this code
} else {
  // run this code
}

const name = "Henrique";
let age = 35;
if (age < 18) {
  alert(`Hey ${name}, sorry... you are too young to get in`);
} else if (age > 80) {
  alert(`Come on ${name} ! You are too old ! Get back to sleep !`);
} else {
  alert(`Hey there ${name} ! Enter and make yourself confortable`);
}

// Normal IF ELSE
if (laundry === "dirty") {
  cleanLaundry();
} else {
  watchTv();
}
// With ternary operator :
laundry === "dirty" ? cleanLaundry() : watchTv();

#### ***SWITCH***
>This is similar to If...Else condition. Just another way to write your code. The following example is based on the third IF...ELSE example.

switch(variable) {
    case firstCond :
        console.log(`First log`)
        break;
    case secondCond :
        console.log(`Second log`)
        break;
    default:
        console.log(`Else log`)
}
## ==4. LOOPS==
>Loops are the way we repeat fonctionnalities in our code. Be carefull, an infinite loop can destroy your browser (or your PC).

#### ***FOR***
>For loops are one of the most common loop types.

for (let i = 1; i <= 10; i++) {
  console.log(i);
} // This will print all the numbers from 1 to 10.

>Nested loops are two loops inside each other.

for (let i = 1; i <= 5; i++) {
  console.log("i is " + i);
  for (let j = 1; j <= 3; j++) {
    console.log("----- j is " + j);
  }
}

#### ***WHILE***
> The while loop is very similar to the For Loop but with a different syntax. (A syntax that is maybe even simpler)

let num = 0;
while (num < 10) {
  console.log(num);
  num++;
  break;
}

The break line cut the loop. We can cut many loops in a big loop!

#### ***FOR OF***
> Easy way to access a value of an array or an object so :

const colors = ["red", "orange", "blue", "violet"];
**For loop example**
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
**For... of example**
for (let item of colors) {
  console.log(item);
}
**For both, the result will be**
"red"
"orange"
"blue"
"violet"

#### ***FOR IN***
> For...of works only for iterables values. Objects are not iterable because they don't have an order.
A solution is to use for...in which has a similar syntax and returns the keys of an object. So :

const user = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  hobbies: ["football", "movies", "guitar"],
};
for (***let*** *key* ***in*** *user*) {
  console.log(key);
}
**Result :**
firstName
lastName
age
hobbies

***So we can easily access the values like this :***
for (let key in user) {
  console.log(`${key} : ${user[key]}`);
}
// Result :
firstName : John
lastName : Doe
age : 30
hobbies : ["football", "movies", "guitar"]

## ==5. FUNCTIONS==
>Functions are reusable chunks of code that we wrap up and give it a name.

function myFunction() {
  // Whatever code we want here
  return; // What the whole code returns
}

## ==6. THE KEYWORD "THIS"==
## ==7. SPREAD OPERATORS==
## ==8. DESTRUCTURING==