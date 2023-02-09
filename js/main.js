let player1 = prompt('Гра починається!Гравець #1 Введіть свій варіант з даних: Камінь, Ножиці, Папір');
let player2 = prompt('Гра починається!Гравець #2 Введіть свій варіант з даних: Камінь, Ножиці, Папір');

let wordGame1 = 'Камінь';
let wordGame2 = 'Ножиці';
let wordGame3 = 'Папір';

// Ігрова Логіка

// if (player1 == wordGame1 && player2 == wordGame1 || player1 == wordGame2 && player2 == wordGame2 || player1 == wordGame3 && player2 == wordGame3) {
//     alert ('Ніхто не переміг, нічия');
// } else if (player1 == wordGame1 && player2 == wordGame2 || player1 == wordGame2 && player2 == wordGame3 || player1 == wordGame3 && player2 == wordGame1) {
//     alert ('Переміг гравець #1');
// } else if (player1 == wordGame1 && player2 == wordGame3 || player1 == wordGame3 && player2 == wordGame2 || player1 == wordGame2 && player2 == wordGame1 ) {
//     alert ('Переміг гравець #2');
// } else {
//     alert ('Ви ввели невірно ігрове слово,повторіть спробу = )');
// }

// Гра фінальна версія
if (player1 == wordGame1 && player2 == wordGame1) {
    alert ('Нічия! Обидва гравці обрали Камінь');
} else if (player1 == wordGame2 && player2 == wordGame2) {
    alert ('Нічия! Обидва гравці обрали Ножиці');
} else if (player1 == wordGame3 && player2 == wordGame3) {
    alert ('Нічия! Обидва гравці обрали Папір');
} else if (player1 == wordGame1 && player2 == wordGame2) {
    alert ('Гравець #1 Переміг!!! Гравці Обрали #1 Камінь - #2 Ножиці');
} else if (player1 == wordGame2 && player2 == wordGame3) {
    alert ('Гравець #1 Переміг!!! Гравці Обрали #1 Ножиці - #2 Папір');
} else if (player1 == wordGame3 && player2 == wordGame1) {
    alert ('Гравець #1 Переміг!!! Гравці Обрали #1 Папір - #2 Камінь');
} else if (player1 == wordGame1 && player2 == wordGame3) {
    alert ('Гравець #2 Переміг!!! Гравці Обрали #1 Камінь - #2 Папір');
} else if (player1 == wordGame3 && player2 == wordGame2) {
    alert ('Гравець #2 Переміг!!! Гравці Обрали #1 Папір - #2 Ножиці');
} else if (player1 == wordGame2 && player2 == wordGame1) {
    alert ('Гравець #2 Переміг!!! Гравці Обрали #1 Ножиці - #2 Камінь');
} else {
    alert ('Упс,хтось з гравців некоректно ввів ігрове слово,повторіть спробу =)');
}