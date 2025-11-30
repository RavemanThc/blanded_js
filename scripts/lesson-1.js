// Запропонуйте користувачу ввести число за допомогою prompt().
// Збережіть введене значення у змінну number.
// Перевірте, чи дорівнює змінна number числу 10:
//    Якщо так – виведіть повідомлення 'Вірно' у alert().
//    Якщо ні – виведіть 'Невірно'.

// Підказка: prompt завжди повертає рядок (String), тому перед перевіркою
// перетворіть значення на число за допомогою Number().
// const number = Number(prompt('Type a number'));
// if (number === 10) {
//     alert("hello");
// } else if(number === 8){
//     alert('Durak')
// }
// else {
//     console.log("not hello");
// };
// number === 10 ? alert('Yeah') : alert('Fuck');
// alert(number === 10 ? "true" : 'fall');
// У змінній min лежить випадкове число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число (у першу, другу, третю чи четверту).
// Виведіть в alert відповідне повідомлення, наприклад:
// "10 входить в першу чверть"

// const min = Math.floor(Math.random() * (59 - 0) + 0);
// if (min <= 15) {
//     alert('one');
// }
//     else if (min <= + 30) {
//         alert('twoo');
//     }
//         else if (min <= 45) {
//             alert('three');

// }
// else if (min <= 60) {
//     alert('four')
// } else {
//     alert("no true")
// }
// console.log(min)
// Змінна num може набувати 4 значення: '1', '2', '3' або '4'
// (запитуй це значення у користувача через prompt).
// Якщо вона має значення '1', то у змінну result запишіть 'зима',
// якщо має значення '2' - 'весна' і так далі.
// Розв'яжіть завдання через switch-case.
// Не забудьте про дефолтне значення, на випадок, якщо користувач
// введе в prompt щось інше. В такому випадку result має набувати значення:
// "Вибачте, але ви маєте ввести значення від 1 до 4 включно".
// Значення змінної result виведіть в консоль.
// const num = Number(prompt('Type a number'));
// let result = "";
// switch (num) {
//     case 1:
//         result = "winter"
//         console.log(result);
//         break;
//     case 2:
//         result = "vesna"
//         console.log(result);
//         break;
//     case 3:
//         result = "summer"
//         console.log(result);
//         break;
//     case 4:
//         result = 'osin'
//         console.log(result);
//         break;
//     default: console.log("type a number 1, 2 ,3 ,4");
// }
// Напишіть функцію getNumbers(min, max), що приймає 2 параметри -
// мінімальне і максимальне число відповідно.
// Напишіть цикл всередині функції, який виводить у консоль
// всі числа від max до min за спаданням.
// Окрім цього, підрахуйте суму всіх парних чисел в цьому циклі
// і поверніть її з функції.
// function getNumbers(min, max) {
//     if (typeof min !== 'number' || typeof max !== 'number') {
//         return 'Not a number';
//     }
//     let sum = 0;
//     for (let i = max; i >= min; i--){
//         console.log(i);
    
//     if (i % 2 === 0) {
//         sum += i;
//     }}
//     return sum;
// }
// console.log(getNumbers(1, 10));
// function min(a, b) {
//     if (typeof a !== 'number' || typeof b !== 'number') {
//         return 'Not a number';
//     }
//      if (a > b) {
//         return b;
//     }
//     else {
//         return a;
//     }
// }
// console.log(min(2, 3));
// console.log(min(3, 2));
// console.log(min(2, "GoIt"))
// Напишіть функцію isAdult(age), яка  приймає число - вік користувача і повертає true, 
// якщо параметр age більше чи дорівнює 18.
// В іншому випадку вона запитує підтвердження через confirm 
// і повертає його результат (true/false).
// function isAdult(age) {
//     if (age >= 18) {
//         return true;
//     }
//     return confirm('Are you 18 years old?')
// }
// console.log(isAdult(19))
    let count = 0;
    while (count <= 20) {
        console.log(`counr ${count}`);
        count +=1;
}
