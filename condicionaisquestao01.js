function compararNumeros(num1, num2) {
    if (num1 > num2) {
        return `O maior número é: ${num1}`;
    } else if (num2 > num1) {
        return `O maior número é: ${num2}`;
    } else {
        return "Os números são iguais.";
    }
}

const numero1 = 10;
const numero2 = 20;
const resultado = compararNumeros(numero1, numero2);

console.log(resultado);
