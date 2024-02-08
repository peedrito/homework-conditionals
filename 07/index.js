// Exercício (07) - Pago imposto de renda?

// Importação do módulo 'readline';
const readline = require('readline');

// Criação da Interface de Leitura (rl)
const rl = readline.createInterface({
// Configuração da entrada como o fluxo padrão de entrada (teclado);
input: process.stdin,
// Configuração da saída como o fluxo padrão de saída (console);
output: process.stdout,
});

    // Objeto com informação pessoal;
    const dadosPessoa = {
        aposentado: false,
        portadoraDeDoenca: false,
        totalDeRendimentos: 0, // Valor em centavos
    }

    function inicioForm() {
        rl.question('Pergunta 1/4: Você é aposentado?\n1 - Sim | 2 - Não\nEu escolho a opção: ', (resposta) => {
            if (!isNaN(resposta) && (resposta == 1 || resposta == 2)) {
                if (resposta == 1) {
                    dadosPessoa.aposentado = true;
                } else {
                    dadosPessoa.aposentado = false;
                }
                perguntaDois();
            } else {
                console.log('\n\n--- ATENÇÃO: Você precisa digitar "1" ou "2". ---\n\n');
                inicioForm();
            };
        });
    }

    function perguntaDois() {
        rl.question('Pergunta 2/4: Você é portador de doença?\n1 - Sim | 2 - Não\nEu escolho a opção: ', (resposta) => {
            if (!isNaN(resposta) && (resposta == 1 || resposta == 2)) {
                if (resposta == 1) {
                    dadosPessoa.portadoraDeDoenca = true;
                } else {
                    dadosPessoa.portadoraDeDoenca = false;
                }
                perguntaTres();
            } else {
                console.log('\n\n--- ATENÇÃO: Você precisa digitar "1" ou "2". ---\n\n');
                perguntaDois();
            };
        });
    }

    function perguntaTres() {
        rl.question('Pergunta 3/4: Qual seu rendimento?\n1 - Digite apenas números, sem pontuações.\nMeu rendimento é: ', (resposta) => {
            if (!isNaN(resposta)) {
                dadosPessoa.totalDeRendimentos = resposta;
                dadosPessoa.rendimentosConvertidos = dadosPessoa.totalDeRendimentos * 100;
            } else {
                console.log('Você precisa digitar apenas números.');
            }
            perguntaQuatro();
        });
    }


    function perguntaQuatro() {
        rl.question('Pergunta 4/4: Você confirma suas informações?\n1 - Sim | 2 - Não\nEu escolho a opção: ', (resposta) => {
            if (!isNaN(resposta) && (resposta == 1 || resposta == 2)) {
                if (resposta == 1) {
                    console.log('Aguarde alguns instantes enquanto verificamos no sistema...');
                    // Usando setTimeout em vez de setInterval
                    setTimeout(informarResultado, 5000);
                } else {
                    console.log('\n\nCOMEÇANDO DO INÍCIO----\n');
                    inicioForm();
                }
            } else {
                console.log('\n\n--- ATENÇÃO: Você precisa digitar "1" ou "2". ---\n\n');
            }
        });
    }


    function informarResultado () {
            if (dadosPessoa.aposentado) {
                console.log('VAZA LEAO! JA TA DIFICIL SEM VOCE!');
            } else if (dadosPessoa.portadoraDeDoenca) {
                console.log('VAZA LEAO! JA TA DIFICIL SEM VOCE');
            } else if (dadosPessoa.rendimentosConvertidos >=28559) {
                console.log('PEGA LEAO');
            } 
            rl.close();
    }

    inicioForm();