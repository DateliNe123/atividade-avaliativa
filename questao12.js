function unirElementos(lista) {
    return lista.join("#");
}

const listaDeElementos = ['maçã', 'banana', 'laranja', 'uva'];
const resultado = unirElementos(listaDeElementos);

console.log(`Resultado: ${resultado}`);
