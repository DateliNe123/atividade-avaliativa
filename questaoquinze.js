function ordenarNumeros(lista) {
    return lista.sort((a, b) => a - b); 
}

const numeros = [45, 12, 78, 4, 23, 89, 15];
const numerosOrdenados = ordenarNumeros(numeros);

console.log("Números originais:", numeros);
console.log("Números ordenados:", numerosOrdenados);
