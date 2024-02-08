// Exercício (14) - Estou 

// cariavel criado pela a escola;
const quantidadeDeAguaIngerida = 1.4;

// Sistema de condições;
if (quantidadeDeAguaIngerida > 3) {
    console.log('Risco Baixo - Você está ingerindo uma boa quantidade de água, parabéns!');
} else if (quantidadeDeAguaIngerida >= 1.5 && quantidadeDeAguaIngerida <= 3) {
    console.log('Risco Moderado - Você está ingerindo pouca água, beba mais!');
} else if (quantidadeDeAguaIngerida < 1.5) {
    console.log('Risco Alto - Você está ingerindo pouquissima água, beba mais água!');
}