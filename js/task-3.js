// Методи масиву

// Метод join() дозволяє обєднати елементи масиву в рядок

// const words = ["JavaScript", "is", "amazing"];
// console.log(words.join("")); // 'JavaScriptisamazing'
// console.log(words.join(" ")); // 'JavaScript is amazing'
// console.log(words.join("-")); // 'JavaScript-is-amazing'


// Мeтод join() корисний за необхідності перетворення масиву в рядок з певними роздільниками між елементами.
// Наприклад, нам потрібно написати функцію, яка перетворює рядки зі snake_case (зміїної нотації з підкресленнями) в kebab-case (нотацію з тире).

function transformString(string) {
    const words = string.split("_");
    return words.join("-");
}
transformString("user-age")  // "user-age"
transformString("price_per_droid"); // "price-per-droid"


