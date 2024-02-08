// Exercício (08) - Posso entrar no parque?

// Inicia importação do módulo readline
const readline = require('readline');

// Cria uma interface de leitura.
const rl = readline.createInterface({
    // Lê as info. com base no método de entrada (teclado).
    input: process.stdin,
    // Armazena as info. com base no método de sáida (console).
    output: process.stdout,
})

// Object com os dados pessoais da pessoa;
const people = {
    years: null,
    hasPathology: false,
    height: null,
    isStudent: null,
}


function iniciarForm () {
    rl.question('Pergunta 1/4: Qual sua idade? ', (response) => {
        response = Number(response);
        if (!isNaN(response)) {
            people.years = (response);
            questionPatholy();
        } else {
            console.log('\n\n--- Você precisa informar uma idade válida! Ex: 69! ---\n\n');
            iniciarForm();
        }
    })
}

function questionPatholy() {
    rl.question('Pergunta 2/4: Possui alguma patologia?\n1 - SIM | 2 - NAO ', (response) => {
        response = Number(response);
        if (!isNaN(response) && (response === 1 || response === 2)) {
            if (response === 1) {
                people.hasPathology = true;
            }
            questionHeight();
        } else {
            console.log('\n\n--- Você precisa escolher 1 para SIM ou 2 para NAO! ---\n\n');
            questionPatholy();
        }
    })
}

function questionHeight () {
    rl.question('Pergunta 3/4: Qual sua altura?\nInforme altura em cm: ', (response) => {
        response = Number(response);
        if (!isNaN(response)) {
            people.height = response;
            questionIsStudent();
        } else {
            console,log('Você precisa digitar sua altura (apenas numeros).')
            questionHeight();
        }
    })
}

function questionIsStudent () {
    rl.question('Pergunta 4/4: Você é estudante?\n1 - SIM | 2 - NAO ', (response) => {
        response = Number(response);
        if (!isNaN(response) && (response === 1 || response === 2)) {
            if (response === 1) {
                people.isStudent = true;
            }
            result();
        } else {
            console.log('\n\n--- Você precisa escolher 1 para SIM ou 2 para NAO! ---\n\n');
            questionIsStudent();
        }
    })
}

function result () {
    console.log('\n\n--- VERIFICANDO SISTEMA ---\n\n');
    setTimeout(() => {
        if (!people.hasPathology) {
            if (people.height > 150) {
                if (people.years > 12 && people.years < 65) {
                    console.log('Acesso permitido! Se divirta.')
                    if (people.isStudent === true|| people.years < 18) {
                        console.log('Valor da entrada: R$10,00')
                    } else {
                        console.log('Valor da entrada: R$20,00')
                    }
                } else {
                    console.log('Acesso negado! Sua idade não atende os requisitos.')
                }
            } else {
                console.log('Acesso negado! Altura não atende requisitos.')
            }
        } else {
            console.log('Entrada negada! Você possui alguma patologia.')
        }
        rl.close()
    }, 3000);
}

iniciarForm();