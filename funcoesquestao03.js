
function encontrarMaiorEMenor(numeros) {
 
    if (numeros.length !== 10) {
        return "A lista deve conter exatamente 10 números.";
    }

    let maior = numeros[0];
    let menor = numeros[0];

    for (let numero of numeros) {
        if (numero > maior) {
            maior = numero; 
        }
        if (numero < menor) {
            menor = numero; 
        }
    }

    return {
        maior: maior,
        menor: menor
    };
}

const listaNumeros = [45, 12, 78, 4, 23, 89, 15, 67, 3, 56];
const resultado = encontrarMaiorEMenor(listaNumeros);

console.log(`Maior valor: ${resultado.maior}, Menor valor: ${resultado.menor}`);
