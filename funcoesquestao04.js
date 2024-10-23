
function verificarPalavraNaFrase(frase, palavra) {
    const fraseMinuscula = frase.toLowerCase();
    const palavraMinuscula = palavra.toLowerCase();

    return fraseMinuscula.includes(palavraMinuscula);
}

const frase = "Olá, como você está?";
const palavra = "você";
const resultado = verificarPalavraNaFrase(frase, palavra);

if (resultado) {
    console.log(`A palavra "${palavra}" está presente na frase.`);
} else {
    console.log(`A palavra "${palavra}" não está presente na frase.`);
}
