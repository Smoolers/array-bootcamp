// THE BASICS

// 1. Gör en array som innehåller 5 st olika frukter av datatypen string.

const myFruits = ["apple", "banana", "orange", "pear", "kiwi"];

// 2. Gör en array som innehåller 3 olika datatyper, ex. string, number, array.

const stuff = ["Martin", 42, (javascriptIsFun = true)];

// 3. console.log() hur många objekt arrayen nedan innehåller.

let animals = ["cat", "hamster", "parrot", "funky chihuahua"];

console.log(animals.length);

// 4. I arrayen ovan, hämta cat.

console.log(animals[0]);

// 5. I arrayen ovan, hämta funky chihuahua.

console.log(animals[3]);

// 6. I arrayen ovan, byt ut hamster mot tiger.

animals[1] = "tiger";
console.log(animals); // Kollar så jag gjort rätt

// 7. Lägg ihop nedanstående arrayer.

let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);
console.log(c); // Kollar så jag gjort rätt

// Eller utan att skapa en sammanslagningsvariabel (c):
a = [1, 2, 3];
b = [4, 5, 6];
console.log(a.concat(b));

// 8. Klona nedanstående array.

let arr = ["a", "b", "c"];

let knarr = arr;

console.log(arr); // Kollar så arr fortfarande är arr
console.log(knarr); // Kollar så knarr blivit en klon av arr

// METHODS

let fruits = ["kiwi", "apple", "pear"];

console.log(fruits); // Start-arrayen, för referens

// 9. Lägg till en frukt i slutet av arrayen ovan.

fruits.push("ananas");
console.log(fruits);

// 10. Lägg till en frukt i början av arrayen ovan.

fruits.unshift("mango");
console.log(fruits);

// 11. I arrayen ovan, ta bort sista frukten i arrayen.

fruits.pop();
console.log(fruits);

// 12. I arrayen ovan, ta bort första frukten i arrayen.

fruits.shift();
console.log(fruits);

// 13. Sätt in en frukt i arrayen ovan på index 1.

fruits.splice(1, 0, "banana"); // (index-plats för startpunkt, antal värden att ta bort, vilket/vilka värden att sätta in (valfritt))
console.log(fruits);

// 14. Sätt in tre frukter i arrayen ovan på index 2.

fruits.splice(2, 0, "orange", "watermelon", "papaya");
console.log(fruits);

// 15. I arrayen nedan, ta bort Christoffer och Johan.

let names = ["David", "Christoffer", "Johan", "Maja"];

console.log(names); // Start-arrayen, för referens

names.splice(1, 2); // (index-plats för startpunkt, antal värden att ta bort)
console.log(names);

// 16. Spegelvänd på arrayen nedan.

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(nums); // Start-arrayen, för referens

nums.reverse();
console.log(nums);

// 17. Kika om strängen nedan innehåller bokstaven n.

let str = "Supercalifragilisticexpialidocious";

console.log(str); // Start-strängen, för referens

console.log(str.includes("n")); // false

// 18. Kika om strängen ovan innehåller bokstaven x.

console.log(str.includes("x")); // true

// 19. I ovanstående array, hitta vilken position första förekomsten av p har.

console.log(str.indexOf("p")); // 2

// 20. I strängen ovan, plocka fram de 5 första tecknena.

let femForsta = str.slice(0, 5);
console.log(femForsta);

// Eller utan att skapa en variabel (femForsta):
console.log(str.slice(0, 5)); // (Startpunkt utifrån index, slutpunkt utifrån sträng-längd)

// 21. I strängen ovan, plocka fram de 7 sista tecknena.

console.log(str.length); // 34
console.log(str.slice(27, 34));

// Klart =)
