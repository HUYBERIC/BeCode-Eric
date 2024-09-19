console.log("#####02.ALGOS-serie2#####");
console.log("");
console.log("==01.Remove Duplicate From Array");
// Create a function that remove duplicates from an array.

const removeDuplicates = (arr) =>[...new Set(arr)]

console.log(removeDuplicates([4, 9, 5, 1, 3, 2, 4, 1, 8]));
console.log(removeDuplicates(["hello", "world", "goodbye", "world"]));
console.log(removeDuplicates([true, true, false, true, true, false]));


/* 
- new Set(arr) => Créer un nouvel objet en ne gardant que les valeurs uniques à partir de l'array
- [... xxx] => transforme le Set en array
*/

console.log("");
console.log("==02.Capitalize ");
// Create a function that capitalizes a string.

const capitalize = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

console.log(capitalize("belgium"));
console.log(capitalize("brazil"));
console.log(capitalize("congo"));

// Sélectionner le premier index, uppercase, ajouter le reste avec slice() et préciser en lowercase.

console.log("");
console.log("==03.The Days Between");
// Find the days between 2 given days

const dayDiff = (date1, date2) => Math.round((date1 - date2)) / (1000 * 60 * 60 * 24);

console.log(dayDiff(new Date("2020-10-21"), new Date("2021-10-22")));

/*
- Arrondire la différence des deux dates (beurk les décimaux pour parler de jours).
- Diviser par le nombre de millisecondes qu'il y a dans un jour :
- 24h dans un jour
- 60min dans une heure
- 60sec dans une minute
- 1000 milliseconds dans une seconde.
*/

console.log("");
console.log("==04.Average Between Numbers");
// Find the average between multiple numbers using reduce method.

const average = (...arr) => arr.length > 0 ? (arr.filter(num => num).reduce((sum, num) => sum + num, 0)) / arr.length : 0;

console.log(average(1, 2, 3, 4));

/*
- Toucher l'ensemble de l'argument (sinon arr obligatoire)
- Vérifier que l'argument ne soit pas vide
- Si ok : on filtre les éléments pour garder les valeurs truthy
- On fait la somme avec reduce et on divise par le nombre d'élément (moyenne)
- Si non "0"
*/

console.log("");
console.log("==05.Smallest Element");
// Get the Smallest Element of an Array

const minArr = (arr) => Math.min(...arr);

console.log(minArr([13, 7, 11, 3, 9, 15, 17]));

// Trouver le minimum en comparant TOUTE l'array.

console.log("");
console.log("==06.Same Value?");
// Check if Two Arrays Contain the Same Values

const compareArray = (arr1, arr2) => arr1.length === arr2.length && arr1.sort().toString() === arr2.sort().toString();

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 1, 4, 2];
const arr3 = [1, 2, 3];
console.log(compareArray(arr1, arr2));
console.log(compareArray(arr1, arr3));

/*
- Vérifier que les arr ont la même longueur (sinon d'office false).
- Vérifier qu'après le tri et la conversion en string, ce soit les mêmes.
*/

console.log("");
console.log("==07.RGB Random Generator");
// Create a function that generates a random rgb value.
// The outcome should be the same as we declare it in CSS : rgb(?, ?, ?)

const rgbGen = (red, blue, green) => `rgb(${Math.round(Math.random()* 255)}, ${Math.round(Math.random()* 255)}, ${Math.round(Math.random()* 255)})`

console.log(rgbGen());

/*
- Préparer le format de la réponse `rgb()`.
- Dans cette réponse générer les trois nombre arrondis entre 1 et 255.
*/

console.log("");
console.log("==08.Letter Count");
// Create a function that takes a string and a letter and counts how many times the letter appears in the string.

const letterCount = (str, letter) => str.split(letter).length-1;

console.log(letterCount("hello", "l"));
console.log(letterCount("abracadabra", "a"));
console.log(letterCount("oups", "z"));

/*
- Split str en utilisant letter comme séparateur
- .length nous donne le nombre de sous-tableau crée, il faut faire -1 pour connaître le nombre de séparateurs (lettre)
*/

console.log("");
console.log("==09.SumArray");
/* Create a function that returns the sum of all positive numbers in an array. (negative numbers should be ignored).
If only negative numbers are present, it should return 0 */

const sumArray = (arr) => arr.filter(num => num > 0).reduce((sum, num) => sum + num, 0);

console.log(sumArray([1, 6, 2, -3, 5, -12]));
console.log(sumArray([-3, -4, -2]));

/*
- Filtrer tous les nombres > 0.
- Reduce avec sum comme accumulateur, on ajoute num à la sum et la valeur de départ est 0.
*/

console.log("");
console.log("==010.Value Check");
/* Create a function that takes an array of objects and an object with one key/value pair as arguments.
The function should return every entries that are the same than the object. */

const scanAndFind = (arr, obj) => arr.filter(item => Object.entries(obj).every(([key, value]) => item[key] === value));

// Voir exemple du cours pour la solution.
/*
- Filtrer tous les éléments du tableau
- Object.entries(obj) convertit l'objet en un tableau de paires de valeur clé
- Every teste si toute nos paires de valeur clé sont conforme à l'array de départ
- On structure l'élément avec [Key, Value]
- La dernière égalité vérifie si la veleur de la key de l'objet item correspond à celle attendue
*/