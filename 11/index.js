// Exercício (11) - Qual o valor da minha parcela?

//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 40;

// Valor já pago pelo o aluno.
const totalJaPagoPeloAluno = 1800000;

// Condição para saber se paga
if (rendaMensalEmCentavos >= 200000) {
    const valorDaParcela = ((rendaMensalEmCentavos * 0.20) / 100);
    if (totalJaPagoPeloAluno < 1800000) {
        if (mesesDecorridos <= 60) {
            console.log(`O valor da parcela a pagar é de R$${valorDaParcela.toFixed(2)}`)
        } else {
            console.log('Não encontramos parcelas, seu contrato venceu.')
        }
    } else {
        console.log('Voê já quitou sua dívida com a Cubos Academt.')
    } 
} else {
    console.log(`Não há registros de parcela a pagar, sua renda é menor que R$2.000`);
}
