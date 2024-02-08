// Exercício (10) - Consoante ou Vogal?

// Variavel que define entrada do user;
const caractere = "C";
// Definindo vogais para a verificação.
const vogais = ["A", "E", "I", "O", "U"];
// Informar no console se é uma vogal ou não;
let vogalOuConsoante = "consoante";

// Repetição para percorrer array vogalOuCosoante;
for (let i = 0; i < vogais.length; i++) {
    if (caractere.toLocaleUpperCase() == vogais[i]) { // Se encontrar uma vogal...
        vogalOuConsoante = "vogal"; // Define vogalOuVConsoante para "vogal"
        break // Em sequência para a repetição.
    };
}

if (caractere === caractere.toLocaleUpperCase()) { // Se caractere for estritamente igual ao mesmo maisuculo...
    console.log(`A letra: ${caractere} é uma ${vogalOuConsoante} maiúscula.`)
} else {
    console.log(`A letra: ${caractere} é uma ${vogalOuConsoante} minúscula.`)
}