// Definindo um array de strings
const strings = [
    "): agav asse atieja em ,eaE",
    "): atsiugnemalf,eaE"
];

// Função para selecionar uma string aleatória
function selecionarStringAleatoria(arr) {
    const indiceAleatorio = Math.floor(Math.random() * arr.length); // Gera um índice aleatório
    return arr[indiceAleatorio]; // Retorna a string no índice aleatório
}

// Função para inverter uma string manualmente
function inverterString(str) {
    let stringInvertida = ""; // Variável para armazenar a string invertida
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i]; // Adiciona cada caractere de trás para frente
    }
    return stringInvertida; // Retorna a string invertida
}

// Exibindo todas as strings no array
console.log("Strings no array:", strings);

// Selecionando uma string aleatória
const stringAleatoria = selecionarStringAleatoria(strings);
console.log("String aleatória selecionada:", stringAleatoria);

// Invertendo a string selecionada
const stringInvertida = inverterString(stringAleatoria);
console.log("String invertida:", stringInvertida);
