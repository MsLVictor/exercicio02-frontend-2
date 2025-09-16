function calcularTotal() {
    let valorUnitario = parseFloat(prompt("Qual o preço do produto?"))
    let qtdProduto = parseFloat(prompt("Qual a quantidade que você deseja? "));

    return valorUnitario * qtdProduto;
}

function aplicarDesconto(valorTotal){
    if (valorTotal > 100){
        let desconto = valorTotal * 0.10;
        return {totalComDesconto: valorTotal - desconto, desconto: desconto};        
    } else {
        return { totalComDesconto: valorTotal, desconto: 0};
    }
    
}

function exibirResumo(total, resultado){
    console.log("Valor total R$ " + total);

    if (resultado.desconto > 0){
        console.log("valor total do desconto R$ " + resultado.desconto);
        console.log("valor final com desconto R$ " + resultado.totalComDesconto);
    }  
}

let total = calcularTotal();

let resultado = aplicarDesconto(total);

exibirResumo(total, resultado);




