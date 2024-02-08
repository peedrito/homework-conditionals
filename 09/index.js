// Exercício (09) - Transferência de  nota

// Inicia importação do módulo readline

// Dado antigo da nota escolar.
const nota = 8;
/*
| Nota        | Conceito |
| ----------- | -------- |
| 9 a 10      | A        |
| 8 a 8,9     | B        |
| 6 a 7,9     | C        |
| 4 a 5,9     | D        |
| menos que 4 | E        |
*/

// Transferência de dado novo.
let notaNova;

// Condições
if (nota >= 9 && nota <= 10) {
  notaNova = "A";
} else if (nota >= 8 && nota <= 8.9) {
  notaNova = "B";
} else if (nota >= 6 && nota <= 7.9) {
  notaNova = "C";
} else if (nota >= 4 && nota <= 5.9) {
  notaNova = "D";
} else if (nota < 4) {
  notaNova = "E";
} else {
  notaNova = "Formato da nota inválido.";
}

// Imprime no console
console.log(notaNova);
