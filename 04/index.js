// Exercício (04) - Qual o nome da bucha? (dominó)

/*
| Bucha de | Nome   |
| -------- | ------ |
| 0        | Branco |
| 1        | Ás     |
| 2        | Duque  |
| 3        | Terno  |
| 4        | Quadra |
| 5        | Quina  |
| 6        | Sena   |
*/

// Variavel representando a peça;
const ladoA = 5
const ladoB = 6
let nomeBucha;

// Série de condições;
if (ladoA == ladoB) { // Verifica se é uma bucha ou não;
    const valorUnico = ladoA;
    if (valorUnico == 0) {
        nomeBucha = 'Branco';
    } else if (valorUnico == 1) {
        nomeBucha = 'Ás';
    } else if (valorUnico == 2) {
        nomeBucha = 'Duque';
    } else if (valorUnico == 3) {
        nomeBucha = 'Terno';
    } else if (valorUnico == 4) {
        nomeBucha = 'Quadra';
    } else if (valorUnico == 5) {
        nomeBucha = 'Quina';
    } else if (valorUnico == 6) {
        nomeBucha = 'Sena';
    }
    console.log(`Olá, sua peça é uma bucha, o nome dela é: ${nomeBucha}`)
} else { // Se não é uma bucha, imprime a frase abaixo;
    console.log('Não é uma bucha.')
}

