function verificaNumeros(num1, num2) {
    return num1 === 30 || num2 === 30 || (num1 + num2) === 30;
}

const numero1 = 20;
const numero2 = 10;

const resultado = verificaNumeros(numero1, numero2);
console.log(resultado); 
