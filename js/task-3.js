// Методи масиву

// Метод join() дозволяє обєднати елементи масиву в рядок

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("-")); // 'JavaScript-is-amazing'


// Мeтод join() корисний за необхідності перетворення масиву в рядок з певними роздільниками між елементами.
// Наприклад, нам потрібно написати функцію, яка перетворює рядки зі snake_case (зміїної нотації з підкресленнями) в kebab-case (нотацію з тире).

// function transformString(string) {
//     const words = string.split("_");
//     return words.join("-");
// }
// console.log(transformString("user-age"));  // "user-age"
// console.log(transformString("price_per_droid"));  // "price-per-droid"


// Метод split()


// Метод split() у JavaScript використовується для поділу рядка на масив, розділяючи його за певним роздільником (символом або виразом).

// const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts); // ["amazing", "french", "recipes"]


// Метод slice()

// Метод масиву slice(begin, end) повертає новий масив, що містить копію частини вихідного масиву, не змінюючи його. Копія створюється від індексу begin до, але не включаючи індекс end.


// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(0, 2)); // ['Earth', 'Mars']
// console.log(planets.slice(0, 4)); // ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3)); // ['Mars', 'Venus']

// Метод concat()

// Метод використовується для об'єднання двох або більше масивів

// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);

// console.log(result)  // ["Mercury", "Venus", "Mars", "Jupiter"];

// Метод indexOf()

// Метод масиву indexOf(elem) використовується для визначення індексу першого входження елемента elem у масиві. Він повертає індекс елемента, якщо він знайдений, або -1, якщо елемент не знайдений. Метод indexOf() виконує сувору рівність (===) при порівнянні елементів.


// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
// console.log(clients.indexOf("Poly")); // 2
// console.log(clients.indexOf("Monkong")); // -1


// Метод масиву push() використовується для додавання одного або більше елементів у кінець масиву.


// const planets = ["Earth", "Mars", "Venus"];

// planets.push("Jupiter");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// planets.push("Saturn", "Neptune");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]

// Функція getLength(array) очікує один параметр array - масив довільних значень. Доповни код функції так, щоб вона перетворювала масив у рядок, без роздільників, і повертала кількість символів в отриманому рядку.

// function getLength(array) {
//     const string = array.join("");
//     return string.length;
// }


// console.log(getLength(["M", "a", "n", "g", "o"]))  //5

