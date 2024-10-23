
function calcularAreaTriangulo(lados) {
    const [a, b, c] = lados;
    const semiperimetro = (a + b + c) / 2;

    const area = Math.sqrt(semiperimetro * (semiperimetro - a) * (semiperimetro - b) * (semiperimetro - c));

    return area;
}


const ladosTriangulo = [20, 12, 21]; 
const area = calcularAreaTriangulo(ladosTriangulo);

console.log(`A área do triângulo é: ${area.toFixed(2)}`);
