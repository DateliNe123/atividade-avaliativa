function encontrarNumeroMaisFrequente(arr) {
    const contador = {};
    let maxContagem = 0;
    let numeroMaisFrequente = null;

    for (let num of arr) {
        if (contador[num]) {
            contador[num]++;
        } else {
            contador[num] = 1;
        }

        if (contador[num] > maxContagem) {
            maxContagem = contador[num];
            numeroMaisFrequente = num;
        }
    }

    return numeroMaisFrequente;
}

const numeros = [1, 3, 3, 7, 8, 3, 8, 8, 8, 1];
const resultado = encontrarNumeroMaisFrequente(numeros);

console.log(`O número mais frequente é: ${resultado}`);
