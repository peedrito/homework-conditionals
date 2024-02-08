// Exercício (01) - Jogo: Pedra, papel, tesoura

// Importação do módulo 'readline';
const readline = require('readline');

// Criação da Interface de Leitura (rl)
const rl = readline.createInterface({
    // Configuração da entrada como o fluxo padrão de entrada (teclado);
    input: process.stdin,
    // Configuração da saída como o fluxo padrão de saída (console);
    output: process.stdout,
});

// Variaveis definindo jogadas
let jogada1;
let jogada2;

function comecarJogo () {
  console.log('SEJA BEM-VINDO (A)! POR FAVOR, RESPOSTAS EM MINUSCULO.')
    rl.question('Qual a jogada do jogador 1? ', (jogada) => {
      jogada1 = jogada;
      informarJogada();
    });
}

function informarJogada () {
  rl.question('Qual a jogada do jogador 2? ', (jogada) => {
    jogada2 = jogada;
    informarGanhador();
  });
}

function informarGanhador () {
  if (jogada1 == jogada2) {
    console.log('\nNão há vendedores, EMPATE!');
  } else if (jogada1 == "pedra" && jogada2 == "papel") {
    console.log('Jogador 2 VENCEU! Jogada vencedora: PAPEL');
  } else if (jogada1 == "papel" && jogada2 == "pedra") {
    console.log('Jogador 1 VENCEU! Jogada vencedora: PAPEL');
  } else if (jogada1 == "pedra" && jogada2 == "tesoura") {
    console.log('Jogador 1 VENCEU! Jogada vencedora: PEDRA');
  } else if (jogada1 == "tesoura" && jogada2 == "pedra") {
    console.log('Jogador 2 VENCEU! Jogada vencedora: PEDRA');
  } else if (jogada1 == "tesoura" && jogada2 == "papel") {
    console.log('Jogador 1 VENCEU! Jogada vencedora: TESOURA');
  } else if (jogada1 == "papel" && jogada2 == "tesoura") {
    console.log('Jogador 2 VENCEU! Jogada vencedora: TESOURA');
  };
  rl.close();
}

comecarJogo();