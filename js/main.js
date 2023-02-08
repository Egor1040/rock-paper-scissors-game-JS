let player1 = prompt('Гра починається!Гравець #1 Введіть свій варіант з даних: Камінь, Ножиці, Папір');
let player2 = prompt('Гра починається!Гравець #2 Введіть свій варіант з даних: Камінь, Ножиці, Папір');

let wordGame1 = 'Камінь';
let wordGame2 = 'Ножиці';
let wordGame3 = 'Папір';

if (player1 == wordGame1 && player2 == wordGame1 || player1 == wordGame2 && player2 == wordGame2 || player1 == wordGame3 && player2 == wordGame3) {
    alert ('Ніхто не переміг, нічия');
} else if (player1 == wordGame1 && player2 == wordGame2 || player1 == wordGame1 && player2 == wordGame3) {
    alert ('Переміг гравець #1');
} else if (player1 == wordGame2 && player2 == wordGame3) {
    alert ('Переміг гравець #1');
} else if (player1 == wordGame3 && player2 == wordGame2 || player1 == wordGame3 && player2 == wordGame1 || player1 == wordGame2 && player2 == wordGame1 ) {
    alert ('Переміг гравець #2');
} else {
    alert ('Ви ввели невірно ігрове слово,повторіть спробу = )');
}