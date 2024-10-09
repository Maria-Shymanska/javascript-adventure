// Перебір об'єкта

// метод for... in

// Для перебирання об'єктів використовується спеціальний цикл for...in, який перебирає ключі об'єкта object


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };

// for (const key in book) {
//     console.log(key);   // ключ
//     console.log(book[key]);  // значення властивості з таким ключем
// }

// Метод Object.keys()б який приймає об'єкт і повертає масив ключів його властивостей. Якщо в об'єкті немає властивостей, метод поверне порожній масив.

// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   genres: ["historical prose", "adventure"],
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ['title', 'author', 'genres', 'rating']

// Object.keys(object);
// Якщо метод Object.keys(object) повертає масив імен властивостей об'єкта (тобто ключі), то метод Object.values(object) повертає масив значень його властивостей. Якщо в обєкті відсутні властивості то він поверне пустий масив.


// const book = {
//   title: "The Last Kingdom",
//   author: "Bernard Cornwell",
//   rating: 8.38,
// };
// const keys = Object.keys(book);
// console.log(keys); // ["title", "author", "rating"]
// const values = Object.values(book);
// console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]








