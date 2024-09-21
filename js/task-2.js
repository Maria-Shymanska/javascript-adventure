// Інструкція if

// let price = 0;
// const subscription = "pro";

// if (subscription === "pro") {
//   price = 100;
// }

// console.log(price); // 100


// Запросіть у користувача число, якщо число дорівнює 10, то виведіть "Вірно", якщо ні то виведіть "Невірно"

// 1. спочатку приводимо до числа

// const userNumber = Number(prompt("Enter a number:"));

// if (userNumber === 10) {
//     console.log("Вірно");
// } else {
//     console.log("Невірно");
// }


// Перевірте, чи є гроші на балансі, якщо є то виведіть на консолі "Positive", якщо немає, то "Negative"


// const balance = 10;

// if (balance > 0) {
//     console.log("Positive");
// } else if (balance < 0) {
//     console.log("Negative");
// } else {
//     console.log("Balance is 0");
// }


// const age = 20;
// console.log(age > 10 && age < 30); // true && true -> true


// Якщо хоча б один із операндів буде приведений до false, результатом виразу буде його значення.

// const age = 50;
// console.log(age > 10 && age < 30); // true && false -> false
// console.log(age > 80 && age < 120); // false && true -> false


// Тобто, логічне «І» зупиняється на хибному і повертає те, на чому зупинилось, або останній операнд.

// Логічне 'АБО' || ()

// Оператор || приводить всі операнди до буля і повертає значення одного з них.

// Тобто, логічне 'АБО' зупиняється на правді і повертає те, на чому зупинилося або останній операнд.

// Виконуючи логічне «АБО», правий операнд може не обчислюватися у випадку, якщо лівий був приведений до true.


// Логічне 'НЕ'  '!'

// Оператор '!' приводить операнд до буля, якщо необхідно, а потім робить інверсію - змінює його на протилежний true -> false або false -> true.

// console.log(!true); // false
// console.log(!false); // true
// console.log(!3); // !3 -> !true -> false
// console.log(!"Mango"); // !"Mango" -> !true -> false
// console.log(!0); // !0 -> !false -> true
// console.log(!""); // !"" -> !false -> true

// const isOnline = true;
// const isNotOnline = !isOnline; // !isOnline -> !true -> false



// const arr1 = [1, 2, 3];
// const arr2 = arr1;
// arr1[1] = 1;
// arr2[2] = 1;
// console.log(arr2)   // [1, 1, 1]


// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];
// const result = arr1 === arr2;
// console.log(result)   // false

// порожній масив приводиться до порожнього рядка, який приводиться до числа 0.

// console.log(Number([])); // 0
// console.log(Number([1])); // 1
// console.log(Number([1, 2, 3])); // NaN

// При перетворенні масиву в логічне значення будь-який масив, навіть порожній, перетворюється на true.

// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];

// console.log(Boolean(emptyArray)); // true
// console.log(Boolean(nonEmptyArray)); // true

// const array = [false];
// const result = array ? "A" : "B";
// console.log(result)  // A


