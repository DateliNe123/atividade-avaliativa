function somaTamanhosPalavras(frase) {
    const palavras = frase.split(" ");
    
    const soma = palavras.reduce((total, palavra) => total + palavra.length, 0);

    return soma;
}

const frase = "Programar é uma atividade muito divertida";
const somaTamanhos = somaTamanhosPalavras(frase);

console.log(`A soma dos tamanhos das palavras na frase é: ${somaTamanhos}`);
