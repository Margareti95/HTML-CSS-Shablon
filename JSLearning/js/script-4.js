'use strict'

// Урок №4. Типы данных. TypeOff
// Язык JS использует динамичискую типизацию, однако для выявления
// типа данных можно использовать ключевое слово typeof

let userName;

console.log(typeof userName); // Выведет undefined, поскольку ему не присвоено
// значение

let userAge = 36;

console.log(typeof userAge); // Числовой (Number)

let userStr = "О, Великая Русь!";

console.log(typeof userStr); // Строка (String)

// JS использует 8 типов даных:
/* 
    - Undefined;
    - Null;
    - Boolean;
    - Number;
    - BigInt;
    - String;
    - Symbol;
    - Object
*/

let userName;   // undefined
let userName = null; // null
let willYouMarryMe = true; // Boolean (или false)
let userAge = 20; // Number
let userAge = 29.23; // Number
let userAge = 123123123123123213n; // BigInt
let userName = 'CuCuVova'; // String

// - NaN - ошибка при вычислении

let userAge = 36;

let userAgeInfo = `Возраст: $(userAge)`; // Вывод на консоль 
                                        // результат выражения $(userAge)

let userInfo = {    // Object
    name: "Vova",
    age: 35
}

let id = Symbol("id"); // Символ (Symbol)
