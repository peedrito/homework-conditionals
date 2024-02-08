//valor do produto comprado.
const valorDoProduto = 5000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 400 ;

const saberParcelas = valorDoProduto / quantidadeDoParcelamento;

if (valorPago >= saberParcelas) {
    const valorRestante = valorDoProduto - valorPago;
    const saberRestante = valorRestante / (valorDoProduto / quantidadeDoParcelamento);
    console.log(`O valor pago é de ${valorPago}, restam ${saberRestante.toFixed()}`);
} else {
    console.log(`Não há parcelas pagas, o parcelamento é de ${quantidadeDoParcelamento}.`)
}

console.log(saberParcelas)