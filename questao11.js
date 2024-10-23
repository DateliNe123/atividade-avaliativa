function ultimosElementos(lista, n) {
    return lista.slice(-n);
}
const numeros = [10, 58, 68, 88, 25, 45];
const n = 3;
const ultimos = ultimosElementos(numeros, n);

console.log(`Os últimos ${n} elementos são:`, ultimos);
