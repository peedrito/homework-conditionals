// Exercício (06) - Posição do time de basquete.

const alturaEmCm = 196; // Altura em cm

// Objeto com o nome de cada posição de acordo com altura.
const posicoesTime = {
    185: 'LÍBERO',
    195: 'PONTEIRO',
    205: 'OPOSTO',
    mais205: 'CENTRO',
};

// Condições
if (alturaEmCm < 180) {
    console.log('REPROVADO'); // Se a altura for menor que 180, imprime 'REPROVADO'
} else {
    // Se a altura for maior ou igual a 180, determina a posição no time
    if (alturaEmCm < 195) {
        console.log('Posição: ' + posicoesTime[185]);
    } else if (alturaEmCm < 205) {
        console.log('Posição: ' + posicoesTime[195]);
    } else if (alturaEmCm >= 205) {
        console.log('Posição: ' + posicoesTime.mais205);
    }
}