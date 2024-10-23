
function contarVogaisEConsoantes(frase) {

    const fraseMinuscula = frase.toLowerCase();
    
 
    let contadorVogais = 0;
    let contadorConsoantes = 0;


    const vogais = 'aeiou';


    for (let char of fraseMinuscula) {
   
        if (char >= 'a' && char <= 'z') {
            if (vogais.includes(char)) {
                contadorVogais++;
            } else {
                contadorConsoantes++;
            }
        }
    }

    return {
        vogais: contadorVogais,
        consoantes: contadorConsoantes
    };
}


const frase = "Olá, como você está?";
const resultado = contarVogaisEConsoantes(frase);

console.log(`Vogais: ${resultado.vogais}, Consoantes: ${resultado.consoantes}`);
