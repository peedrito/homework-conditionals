// Exercício (01) - Jogo: Pedra, papel, tesoura

// Importação do módulo 'readline';
const readline = require('readline');

// Criação da Interface de Leitura (rl)
const rl = readline.createInterface({
    // Configuração da entrada como o fluxo padrão de entrada (teclado);
    input: process.stdin,
    // Configuração da saída como o fluxo padrão de saída (console);
    output: process.stdout,
})

// Objeto com números correspondente a cada dia da semana.
const diaDaSemana = {
    1: "Segunda-feira",
    2: "Terça-feira",
    3: "Quarta-feira",
    4: "Quinta-feira",
    5: "Sexta-feira",
    6: "Sábado",
    7: "Domingo",
}

// Pega resposta do user, verifica se é um number e se está entre 1 e 7, se sim, retorna o dia correspondente ao number.
function iniciarForm () {
    rl.question('Pergunta 1/1: Qual dia da semana você quer saber? (digite apenas number | 1-7) ', (response) => {
        response = Number(response);
        if (response && response >= 1 && response <= 7) {
            console.log(`Pesquisou por dia: ${response}\nDia encontrado: ${diaDaSemana[response]}`);
            rl.close();
        } else {
            console.log(`\n\nVocê precisa digitar apenas números entre 1 e 7.\n\n`);
            iniciarForm();
        }
    })
}

iniciarForm();