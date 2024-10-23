function converterNome(nomeCompleto) {
    const partesNome = nomeCompleto.split(" ");
    const sobrenome = partesNome.pop();
    const iniciais = partesNome.map(nome => nome.charAt(0).toUpperCase() + ".").join(" ");

    return `${sobrenome}. ${iniciais} ${partesNome[0]}`;
}

const nomeOriginal = "Alan Mathison Turing";
const nomeConvertido = converterNome(nomeOriginal);

console.log(`Nome convertido: ${nomeConvertido}`);
