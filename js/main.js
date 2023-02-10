let player1 = prompt('Гра починається!Гравець #1 Введіть свій варіант з даних: Камінь, Ножиці, Папір');
let player2 = prompt('Гра починається!Гравець #2 Введіть свій варіант з даних: Камінь, Ножиці, Папір');

let wordStone = 'Камінь';
let wordScissor = 'Ножиці';
let wordPaper = 'Папір';

// Ігрова Логіка

// if (player1 == wordStone && player2 == wordStone || player1 == wordScissor && player2 == wordScissor || player1 == wordPaper && player2 == wordPaper) {
//     alert ('Ніхто не переміг, нічия');
// } else if (player1 == wordStone && player2 == wordScissor || player1 == wordScissor && player2 == wordPaper || player1 == wordPaper && player2 == wordStone) {
//     alert ('Переміг гравець #1');
// } else if (player1 == wordStone && player2 == wordPaper || player1 == wordPaper && player2 == wordScissor || player1 == wordScissor && player2 == wordStone ) {
//     alert ('Переміг гравець #2');
// } else {
//     alert ('Ви ввели невірно ігрове слово,повторіть спробу = )');
// }

// Гра фінальна версія
if (player1 == wordStone && player2 == wordStone) {
    alert ('Нічия! Обидва гравці обрали Камінь');
} else if (player1 == wordScissor && player2 == wordScissor) {
    alert ('Нічия! Обидва гравці обрали Ножиці');
} else if (player1 == wordPaper && player2 == wordPaper) {
    alert ('Нічия! Обидва гравці обрали Папір');
} else if (player1 == wordStone && player2 == wordScissor) {
    alert ('Гравець #1 Переміг!!! Гравці Обрали #1 Камінь - #2 Ножиці');
} else if (player1 == wordScissor && player2 == wordPaper) {
    alert ('Гравець #1 Переміг!!! Гравці Обрали #1 Ножиці - #2 Папір');
} else if (player1 == wordPaper && player2 == wordStone) {
    alert ('Гравець #1 Переміг!!! Гравці Обрали #1 Папір - #2 Камінь');
} else if (player1 == wordStone && player2 == wordPaper) {
    alert ('Гравець #2 Переміг!!! Гравці Обрали #1 Камінь - #2 Папір');
} else if (player1 == wordPaper && player2 == wordScissor) {
    alert ('Гравець #2 Переміг!!! Гравці Обрали #1 Папір - #2 Ножиці');
} else if (player1 == wordScissor && player2 == wordStone) {
    alert ('Гравець #2 Переміг!!! Гравці Обрали #1 Ножиці - #2 Камінь');
} else {
    alert ('Упс,хтось з гравців некоректно ввів ігрове слово,повторіть спробу =)');
}