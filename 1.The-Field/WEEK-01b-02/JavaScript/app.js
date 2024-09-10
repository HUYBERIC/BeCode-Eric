console.log("#####BEGIN OF JAVASCRIPT BASIS#####");

console.log("");

console.log("#####EXERCISE 06b.Practice.md#####");

        console.log("==TRIM");
/*// DON'T TOUCH THIS LINE!
const message = "    TASTE THE RAINBOW!  "; //DON'T CHANGE THIS LINE PLEASE!

// YOUR CODE BELOW THIS LINE:
console.log(message.trim());*/

        console.log("==LENGTH");
        /*const msg = "Dumbledore";

        console.log(msg.length);

        // DON'T TOUCH THIS LINE! (please)
        const word = "skateboard"; //Don't change this line!

        // YOUR CODE BELOW THIS LINE:*/
        console.log("==SLICE");
        /*let newWord = word.slice(5,10);
        console.log(newWord);*/
        console.log("==REPLACE");
        /*let facialHair = newWord.replace("o","e");
        console.log(facialHair);*/

console.log("");

console.log("#####EXERCISE 07.Numbers.md#####");
        console.log("==GENERATOR")
        /*//Generate a random integer between 0 and 10
        let x = Math.floor(Math.random() * 11);
        console.log(x);*/

        /*//Generate a random integer between 1 and 5
        let y = Math.floor(Math.random() * 5) + 1;
        console.log(y);*/

console.log("");

console.log("#####EXERCISE 08.Practice.md#####");
        console.log("==PROMPT & ALERT EXERCISE")
        /*prompt("What is your name?");

        const name = prompt("What is your name?");

        alert(`Welcome ${name}!`);*/

        /*const name = prompt("What's your name?");
        const age = prompt("How old are you?");
        const city = prompt("Where do you live?");

        alert(`Welcome ${name}, you are ${age} y.o and you live in ${city}`);*/

        console.log("==VAT EXERCISE");
        /*let firstPrice = parseFloat(prompt("What's the price without VAT?"));
        let vat = firstPrice * 0.21;
        let lastPrice = Math.round(firstPrice + vat);

        alert(`The final price is ${lastPrice} !`);*/

        console.log("==SURFACE OF A CIRCLE");
        /*let r = parseFloat(prompt("Whats the radius of your circle?"));
        let pi = 3.14159265359;
        let squareRadius = Math.pow(r, 2);
        let surfaceCircle = pi * squareRadius;
        let betterSurface = surfaceCircle.toFixed(2);

        alert(`The surface of your circle is ${betterSurface}`);*/

        console.log("==CALCULATOR");
                console.log("__SUM");
                /*let firstNumber = parseFloat(prompt("Type your first number to add to the sum"));
                let secondNumber = parseFloat(prompt("Type your second number to add to the sum"));
                let sum = Math.round(firstNumber + secondNumber);
                alert(`The rounded sum is ${sum}`);*/

                console.log("__SUB");
                /*let firstNumber = parseFloat(prompt("Type your first number to add to the sub"));
                let secondNumber = parseFloat(prompt("Type your second number to add to the sub"));
                let sub = Math.round(firstNumber - secondNumber);
                alert(`The rounded sub is ${sub}`);*/

                console.log("__MULTIPLY");
                /*let firstNumber = parseFloat(prompt("Type your first number to add to the product"));
                let secondNumber = parseFloat(prompt("Type your second number to add to the product"));
                let prod = Math.round(firstNumber * secondNumber);
                alert(`The rounded product is ${prod}`);*/

                console.log("__DIVIDE");
                /*let firstNumber = parseFloat(prompt("Type your first number to add to the divide"));
                let secondNumber = parseFloat(prompt("Type your second number to add to the divide"));
                let divide = Math.round(firstNumber / secondNumber);
                alert(`The rounded product is ${divide}`);*/

console.log("");

console.log("#####EXERCICE 10.BooleansComparisonLogic.md#####");
        console.log("==TRUE OR FALSE?");
        /*// question A - true
        true && !false;
        // question B - false
        false && true;
        // question C - true
        !false && !false;
        // question D - false
        5 > 3 && !(2 > 1);
        // question E - false
        true && !(1 == "1"); 
        // question F - true
        5 !== "5" || false; 
        // QUESTION 1 - true
        !0 && true;
        // QUESTION 2 - true
        const a = null;
        const b = undefined;
        const c = 4;
        (!a && b) || c;
        // QUESTION 3 - true
        a == b && c;
        // QUESTION 4 - true
        !b && "Hello" && c;*/

console.log("");

console.log("#####EXERCISE 11b.Exercise.md#####");
        console.log("==CONDITIONS");
                console.log("__CATS OR DOGS?");
                /*let yourName = prompt("What's your name?");
                let animal = prompt("Do you prefer cats or dogs?");

                if (animal.toLowerCase() === "cats"){
                        alert(`Bad choice ${yourName}... Dogs are better!`);
                } else if (animal.toLowerCase() === "dogs"){
                        alert(`Nice ${yourName}! Dogs are our best friends!`);
                } else {
                        alert("Reload the page please, you don't give us a good answer.");
                }*/

                console.log("__KEYLESS CAR?");
                /*const mystery = "P777777"; //Start with a "P", more than 5 characters, contain a "7"  
                //CHANGE THIS VALUE TO MAKE THE CONDITIONAL BELOW TRUE

                // LEAVE THIS CODE ALONE! (pretty please)
                if (mystery[0] === "P" && mystery.length > 5 && mystery.indexOf("7") !== -1) {
                console.log("YOU GOT IT!!!");
                } else {
                console.log("TRY AGAIN");
                }
                
                // ASK THE AGE
                let driverAge = parseFloat(prompt("How old are you?"));
                if (driverAge > 18){
                        alert("Powering On. Enjoye the ride!")
                } else if (driverAge === 18) {
                        alert("Congratulations on your first year of driving. Enjoy the ride!");
                } else {
                        alert("Sorry, you are too young to drive this car. Powering off");
                }*/

                console.log("__FAVORITE FRUIT");
                /*let favoriteFruit = prompt("What's your favorite fruit? (bananas, strawberry or grape)");

                if (favoriteFruit === "bananas"){
                        alert("OMG I like bananas too!")
                } else if (favoriteFruit === "strawberry"){
                        alert("How do you know that I LOVE strawberries?!")
                } else if (favoriteFruit === "grape"){
                        let favoriteColor = prompt("Do you prefer te purple or the green grapes?");
                        if (favoriteColor === "purple"){
                                alert("Unlucky, I don't like it...");
                        } else if (favoriteColor === "green"){
                                alert("Green grapes are ok but... not so much.");
                        } else {
                                alert("I don't understand...");
                        }
                        
                } else {
                        alert(`I don't understand what you mean with "${favoriteFruit}", sorry.`)
                }*/

                console.log("__FAVORITE FRUIT SWITCH MODE");
                /*let favoriteSwitchFruit = prompt("What's your favorite fruit? (bananas, strawberry or grape)");

                switch (favoriteSwitchFruit) {
                        case "bananas": alert("OMG I like bananas too!")
                        break;
                        case "strawberry": alert("How do you know that I LOVE strawberries?!")
                        break;
                        case "grape": 
                        let grapeColor = prompt("Do you prefer te purple or the green grapes?")
                        switch (grapeColor) {
                                case "purple": alert("Unlucky, I don't like it...")
                                break;
                                case "green": alert("Green grapes are ok but... not so much.")
                                break
                                default: alert("I don't understand...")
                                }
                        break;
                        default: alert(`I don't understand what you mean with "${favoriteSwitchFruit}", sorry.`)
                }*/

console.log("");

console.log("#####EXERCISE 12b.Exercise.md#####");
        console.log("==ARRAY pt.1");
        /*const leaderboard = ["Harry", "Lua", "Hermione", "Bellatrix"]; //DON'T TOUCH THIS LINE!

        // YOUR CODE BELOW HERE:
        leaderboard[1] = "Luna";
        leaderboard[3] = "Draco";
        console.log(leaderboard);*/
        
        console.log("==ARRAY pt.2");
        /*const initialArray = [
                null,
                true,
                ["Apple", "two", undefined],
                false,
                ["three", "BeCode"],
                4,
                "I am a big bad wolf",
                ["one"],
                ];
        
        //LONG WAY
        const one = initialArray[7][0];
        const two = initialArray[2][1];
        const three = initialArray[4][0];
        const newArray = [one, two, three];
        console.log(newArray);
        
        //SHORT WAY
        newArray = [initialArray[7][0], initialArray[2][1], initialArray[4][0]]
        console.log(newArray);*/
        
        console.log("==ARRAY pt.3");
        /*const planets = ["The Moon", "Venus", "Earth", "Mars", "Jupiter"]; //DO NOT TOUCH THIS LINE!

        // YOUR CODE GOES BELOW THIS LINE:
        planets.shift();
        planets.push("Saturn");
        planets.unshift("Mercure");
        console.log(planets);*/
        
console.log("");

console.log("#####EXERCISE 13.Objects.md#####");
        console.log("==OBJECT FIRST ONE");
        /*const product = {
                name: "iPhone 15",
                inStock: true,
                price: 1249.90,
                includeInPackage: ["case", "earphones", "charger"],
        }
        console.log(product.includeInPackage[1]);*/

        console.log("==OBJECT ACCESS EXERCISE");
        /*//PLEASE DON'T TOUCH THIS LINE!
        const restaurant = {
        name: "Ichiran Ramen",
        address: `${Math.floor(Math.random() * 100) + 1} Johnson Ave`,
        city: "Brooklyn",
        state: "NY",
        zipcode: "11206",
        };

        //YOUR CODE GOES DOWN HERE:
        const fullAdress = `"${restaurant.address}, ${restaurant.city}, ${restaurant.state} ${restaurant.zipcode}"`;
        console.log(fullAdress); // with or without the "" ? Idk*/

console.log("");

console.log("#####EXERCISE 16.ForLoops.md#####");
        console.log("==LOOPS INC&DECR");
        /*for (let i = 2; i<=20; i+=2) {
        console.log(i);
        }*/

        /*for (let i = 1; i<=20; i+=2) {
        console.log(i);
        }*/

        /*for (let i = 100; i>=10; i-=10) {
        console.log(i);
        }*/

        /*for (let i = 25; i>=0; i-=5) {
        console.log(i);
        }*/

        /*for (let i = 10; i<=1000; i*=10) {

        console.log(i);
        }*/

        console.log("==LOOPS ANIMALS & CELEBRITY");
        /*const animals = ["lion", "pangolim", "zebra", "dog", "cat", "bird"];
        for (let i = animals.length - 1; i>=0; i--){
        console.log(animals[i]);
        }*/
        
        /*const users = [
        {
        firstName: "Vito",
        lastName: "Corleone",
        },
        {
        firstName: "William",
        lastName: "Wallace",
        },
        {
        firstName: "Harry",
        lastName: "Potter",
        },
        {
        firstName: "Amadeus",
        lastName: "Mozart",
        },
        {
        firstName: "Barack",
        lastName: "Obama",
        },
        ];
        for (let i = 0; i<users.length; i++ ){
                const fullName = `${users[i].firstName} ${users[i].lastName}`;
                console.log(`${i+1}. My full name is ${fullName}.`);
        }*/

        console.log("==NESTED LOOPS");
        /*const seatingChart = [
        ["Colas", "Benoit", "Elodie"],
        ["Sola", "Irina", "Antonino", "Eli"],
        ["John", "Maryna", "Naike", "Fabrice"],
        ];
        
        for (let i = 0; i < seatingChart.length; i++) {
        let row = seatingChart[i]
        console.log(`ROW #${i + 1}`)
        for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
        }
        }*/

        console.log("");

console.log("#####EXERCISE 18.EXERCISE-WHILELOOP.md#####");
        console.log("==WHILELOOPS");
        /*let maxNumber;
        let tryOut = 0;

        do {
        maxNumber = +prompt("Enter a number equal or higher than 1 :");
        if (maxNumber < 1){
                prompt("Please, try again, a number equal or higher than 1.");
        }
        } while (maxNumber < 1 || isNaN(maxNumber));

        let randomNumber = Math.floor(Math.random() * maxNumber) + 1;

        let userAnswer;
        do {
        userAnswer = +prompt("Guess the number between 1 and "+ maxNumber +".");
        tryOut++;
        if (userAnswer < randomNumber){
                alert("Try with a higher number!");
        } else if (userAnswer > randomNumber) {
                alert("Try with a lower number!");
        } else {
                alert("Congratulation my G ! You are the real final boss of this game with only " + tryOut + " try.");
                break;
        }
        } while (userAnswer !== randomNumber || isNaN(userAnswer));*/

        console.log("");

console.log("#####EXERCISE 20.EXERCISE-forOf/forIn.md#####");
        console.log("==FOR...IN/OF");
        /*let todoList = [];
        

        while (true) {
                let command = prompt("Type :\n'New' to add a new task.\n'List' to see all the todo list.\n'Delete' to delete a task.\n'Quit' to leave this box.");
                if (command.toLowerCase() === "quit"){
                        console.log("Bye!");
                        break;
                } else if (command.toLowerCase() === "new"){
                        let newTask = prompt("What's your new task?")
                        todoList.push(newTask);
                        console.log("The task "+ /"newTask/"" +" has been add to the list.")
                } else if (command.toLowerCase() === "list"){
                        console.log("**********TODO LIST**********")
                        if (todoList.length === 0){
                                console.log("Nothing in your list.");
                        } else {
                                for (let i = 0; i < todoList.length; i++){
                                        console.log(`${i + 1}. ${todoList[i]}`);
                                }
                        }
                } else if (command.toLowerCase() === "delete"){
                        let indexOfTask = prompt("Write the number of the task you want to delete :");
                        indexOfTask = parsInt(indexOfTask) - 1;
                                if (indexOfTask >=0 && indexOfTask < todoList.lenght){
                                        let deletedTask = todoList.splice(indexOfTask, 1);
                                        console.log("This task has been removed from the list : " + deletedTask);
                                } else {
                                        console.log("This task does not exist");
                                }
                } else {
                        console.log("Invalid action, try again.");
                }
        }*/

console.log("");

console.log("#####EXERCISE 21a.Functions.md#####");
        console.log("==FIRST FUNCTION");
        /*function musicNote(){
                console.log("DO");
                console.log("RE");
                console.log("MI");
                console.log("FA");
                console.log("SOL");
                console.log("LA");
                console.log("SI");
        }
        musicNote();*/

console.log("");

console.log("#####EXERCISE 21b.EXERCISE-FUNCTIONS.md#####");
        /*console.log("==DICE FUNCTION");
        function manyDices(faces, times){
                        for(let i = 0; i < times; i++){
                                let result = Math.floor((Math.random() * faces) + 1);
                                console.log("Number " + (i+1) + " --> " + result);
                        }
                }
                manyDices(4, 3);*/

        console.log("==REPEAT");
        /*function repeatString(string, times){
                        if (typeof times !== 'number' || times < 0 || !Number.isInteger(times)){
                                console.log("You don't choose a good number. It has to be : positiv and integer.");
                                return;
                        } 
                        let result = string.repeat(times);
                        console.log(result);
                }

                repeatString("hélico", 2);*/

        console.log("==FULLNAME");
        /*function greet(firstName, lastName){
                        let firstLetterOfFirstName = firstName[0];
                        console.log("This is " + lastName + " " + firstLetterOfFirstName +".");
                }
                greet("Eric", "HUYBRECHTS");*/

        console.log("==SUM-EXPERIMENT");
        /*function sum (num1, num2){
                if (isNaN(num1) || isNaN(num2)){
                        console.log("You must use numbers in this function!")
                } else {
                        return num1 + num2;
                }
                }
                const myVariable = sum(7, 8);
                console.log(myVariable);*/

        console.log("==MENTAL-EXERCISE");
        /*function logs() {
                console.log("Hello");
                console.log("World");
                return 4; // the function finish here bc the return. I was right.
                console.log("Goodbye");
                console.log("World");
                }
                const myVariable = logs();
                console.log(myVariable);*/

        console.log("==WEATHER-EXERCISE");
        /*function isShortWeather (degrees) {
                console.log("If console say true, consider you can wear a short !")
                if (isNaN(degrees)){
                        console.log(degrees + " is not a temperature. Try again with a number!")
                } else {
                        if (degrees >= 24) {
                                return "true";
                        } else {
                                return "false";
                        }
                }
                }
                let temp = isShortWeather(37);
                console.log(temp);*/

        console.log("==LAST ELEMENT-EXERCISE"); // (arr) = arg pour Array?
        /*function lastElement (arr){
                if (arr.length === 0) {
                        return null;
                } else {
                        return arr[arr.length - 1];
                }
        }
        let firstResult = lastElement([3,5,7]);
        let secondResult = lastElement([1]);
        let thirdResult = lastElement([]);
        console.log(firstResult);
        console.log(secondResult);
        console.log(thirdResult);*/

        console.log("==CAPITALIZE-EXERCISE");
        /*function capitalize(string){
                if (string.length === 0){
                        return "This is EMPTY! Try again.";
                } else {
                        let firstLetterOfString = string[0];
                        let capitalizeLetter = firstLetterOfString.toUpperCase();
                        return capitalizeLetter + string.slice(1);
                }
                
        }
        let result = capitalize("coucou");
        console.log(result);*/
        
        console.log("==SUMARRAY-EXERCISE"); //(numbers) = array?
        /*function sumArray(numbers){
                let sum = 0;
                for (let i = 0; i < numbers.length; i++){
                        sum += numbers[i];
                }
                return sum;
        }
        console.log(sumArray([1, 2, 3])); // 6
        console.log(sumArray([2, 2, 2, 2])); // 8
        console.log(sumArray([50, 50, 1])); // 101*/
        
        console.log("==RETURNDAY-EXERCISE");
        /*//FIRST METHOD
        function returnDay (number){
                if (number < 1 || number > 7 || isNaN(number)) {
                        return null;
                } else {
                        if (number === 1) {
                                return "Monday";
                        } else if (number === 2){
                                return "Tuesday";
                        } else if (number === 3){
                                return "Wednesday";
                        } else if (number === 4){
                                return "Thursday";
                        } else if (number === 5){
                                return "Friday";
                        } else if (number === 6){
                                return "Saturday";
                        } else if (number === 7){
                                return "Sunday";
                        }
                        }
                        }
        let dayWeek = returnDay(3);
        console.log(dayWeek);*/

        //SECOND METHOD WITH ARRAY
        /*const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
        function returnDay(number) {
                if (number < 1 || number > 7 || isNaN(number)) {
                return console.log(null);
                } else {
                return console.log(days[number - 1]);
                }
                }
                returnDay(1);*/

console.log("");

console.log("#####EXERCISE 22.SCOPE.md#####");
        console.log("==FIRST TRY"); 
        /*const i = "Hello World"; //Deux fois la même variable mais deux scopes différents

        for (let i = 0; i < 5; i++) {
                console.log(i);
        }

        console.log(i);*/
console.log("");

console.log("#####EXERCISE 23.FunctionExpressionsHigherOrder.md#####");
        console.log("==DICE FUNCTION");
        /*const callTwice = function (func) {
                func();
                func();
        };
        const rollDie = function () {
                const roll = Math.floor(Math.random() * 6 + 1);
                console.log(roll);
        };
        const newFunc = function (func, times){
                for (let i=0; i < times ; i++){
                        func();
                }
        }
        newFunc(rollDie, 3);*/

console.log("");

console.log("#####EXERCISE 24.METHODS.md#####");
        console.log("==FirstMethodsExercise");
        /*const user = {
                firstName: "Eric",
                lastName: "Huybrechts",
                age: 56,
                printAge: function (){
                        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.` );
                },
                aYearHasPast: function (){
                        this.age += 1;
                }
        }
        user.printAge(); //Age de base
        user.aYearHasPast(); //Faire +1 à l'âge (invisible)
        user.printAge(); //Age augmenté de 1*/

console.log("");

console.log("#####END OF JAVASCRIPT BASIS#####");
        