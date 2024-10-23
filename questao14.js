function palavraPresente(frase, palavra) {
    const fraseMinuscula = frase.toLowerCase();
    const palavraMinuscula = palavra.toLowerCase();

    return fraseMinuscula.includes(palavraMinuscula);
}

const frase = "JavaScript é uma linguagem de programação incrível.";
const palavra = "linguagem";

const resultado = palavraPresente(frase, palavra);

if (resultado) {
    console.log(`A palavra "${palavra}" está presente na frase.`);
} else {
    console.log(`A palavra "${palavra}" não está presente na frase.`);
}
