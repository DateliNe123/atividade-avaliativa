function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitParaCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

const tempCelsius = 25;
const tempFahrenheit = celsiusParaFahrenheit(tempCelsius);
console.log(`${tempCelsius}°C é igual a ${tempFahrenheit.toFixed(2)}°F`);

const tempF = 77;
const tempC = fahrenheitParaCelsius(tempF);
console.log(`${tempF}°F é igual a ${tempC.toFixed(2)}°C`);
