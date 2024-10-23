
function modificarFrase(frase) {
  
    const palavras = frase.split(" ");

    const palavrasModificadas = palavras.map(palavra => {
        if (palavra.length < 5) {
            return palavra.toUpperCase();
        } else if (palavra.length > 5) {
            return palavra.toLowerCase();
        } else {
            return palavra; 
        }
    });

   
    return palavrasModificadas.join(" ");
}
const fraseOriginal = "Hoje está um lindo dia para programar em JavaScript";
const fraseModificada = modificarFrase(fraseOriginal);

console.log("Frase original: " + fraseOriginal);
console.log("Frase modificada: " + fraseModificada);
