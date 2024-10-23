function inverterNumero(numero) {
    const numeroInvertido = Number(numero.toString().split('').reverse().join(''));
    return numeroInvertido;
}
const numero = 12356;
const resultado = inverterNumero(numero);

console.log(`O número invertido é: ${resultado}`);
