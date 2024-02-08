// Exercício (13) - Qual o meu desconto?

// Importação do módulo 'readline';
const readline = require('readline');

// Criação da Interface de Leitura (rl)
const rl = readline.createInterface({
    // Configuração da entrada como o fluxo padrão de entrada (teclado);
    input: process.stdin,
    // Configuração da saída como o fluxo padrão de saída (console);
    output: process.stdout,
})

//tipo de pagamento (dinheiro, credito, debito, cheque);
const metodosPamento = ["crédito", "dinheiro", "cheque"];

//valor da mercadoria (centavos);
const valorDoProduto = 13000 / 100;


function finalizarCompra () {
    rl.question('Pergunta 1/1: Qual o método de pagamento?\n1 - Crédito | 2 - Dinheiro | 3 - Cheque\n', (response) => {
        response = Number(response) ;
        if (response && response >= 1 && response <= 3) {
            let tipoDePagamento = metodosPamento[response - 1];
            if (tipoDePagamento === metodosPamento[0]) {
                console.log(`O valor a pagar será de R$${valorDoProduto - (5 * valorDoProduto ) / 100}.`);
            } if (tipoDePagamento === metodosPamento[1]) {
                console.log(`O valor a pagar será de R$${valorDoProduto - (10 * valorDoProduto ) / 100}..`);
            } if (tipoDePagamento === metodosPamento[2]) {
                console.log(`O valor a pagar será de R$${valorDoProduto - (3 * valorDoProduto ) / 100}..`);
            }
            rl.close();
        } else {
            console.log('\n\nVocê precisa escolher entre 1 e 3.\n\n');
            finalizarCompra()
        }
    })
}

finalizarCompra();