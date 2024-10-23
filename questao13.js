function somarCubos(listaDeNumeros) {
    const soma = listaDeNumeros.reduce((total, numero) => total + Math.pow(numero, 3), 0);
    return soma;
}

const numeros = [2, 3, 4]; // Lista de números
const resultado = somarCubos(numeros);

console.log(`A soma dos cubos dos números é: ${resultado}`);
