function estaNoIntervalo(num) {
    return num >= 50 && num <= 99;
}

function verificarTresNumeros(num1, num2, num3) {
    if (estaNoIntervalo(num1) && estaNoIntervalo(num2) && estaNoIntervalo(num3)) {
        console.log("Sucesso! Todos os números estão no intervalo de 50 a 99.");
    } else {
        console.log("Erro! Pelo menos um número não está no intervalo de 50 a 99.");
    }
}

const numero1 = 60;
const numero2 = 85;
const numero3 = 45;

verificarTresNumeros(numero1, numero2, numero3);
