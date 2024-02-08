// Exercício (02) - Jogo: Ímpar ou par?

// Importação do módulo 'readline';
const readline = require('readline');

// Criação da Interface de Leitura (rl)
const rl = readline.createInterface({
    // Configuração da entrada como o fluxo padrão de entrada (teclado);
    input: process.stdin,
    // Configuração da saída como o fluxo padrão de saída (console);
    output: process.stdout,
});

// Variaveis dos numeros dos jogadores;
let jogada1;
let jogada2;

//seu código aqui...
async function comecarJogo () { 
    await rl.question('Qual o primeiro número? ', (numero) => {
        jogada1 = parseInt(numero); // Armazena jogada um;
        perguntaNumero2(); // Chama a prox. function;
    });
}

function perguntaNumero2 () {
    rl.question('Qual o segundo número? ', (numero) => {
        jogada2 = parseInt(numero); // Armazena jogada dois;
        informarResultado(); // Chama a prox. function;
    });
}

function informarResultado () {
    const soma = jogada1 + jogada2; // Soma os dois valores;
    if (soma % 2 === 0) { // Condição para saber se é par;
        console.log(`\n\nA soma dos dois números é: ${soma}\nO vencedor é: PAR`);
    } else { // Else para resultado ímpar;
        console.log(`\n\nA soma dos dois números é: ${soma}\nO vencedor é: IMPAR`);
    };
    rl.close();
}

comecarJogo();