
function obterNomeDiaSemana(diaSemana) {
    const diasSemana = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
    return diasSemana[diaSemana];
}


function formatarHora(hora, minutos, segundos) {
    return (hora < 10 ? "0" + hora : hora) + ":" +
           (minutos < 10 ? "0" + minutos : minutos) + ":" +
           (segundos < 10 ? "0" + segundos : segundos);
}

function exibirDataHora() {
    const agora = new Date();
    
    const diaSemana = obterNomeDiaSemana(agora.getDay());
    const horaAtual = formatarHora(agora.getHours(), agora.getMinutes(), agora.getSeconds());

    console.log(`Hoje é: ${diaSemana}.`);
    console.log(`A hora atual é: ${horaAtual}.`);
}

exibirDataHora();
