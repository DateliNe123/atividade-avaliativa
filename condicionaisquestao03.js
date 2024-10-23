function somarParesEImpares() {
    let somaPares = 0;
    let somaImpares = 0;

    for (let i = 0; i < 100; i++) {
        if (i % 2 === 0) {
            somaPares += i; 
        } else {
            somaImpares += i;
        }
    }

    console.log(`A soma dos números pares é: ${somaPares}`);
    console.log(`A soma dos números ímpares é: ${somaImpares}`);
}

somarParesEImpares();
