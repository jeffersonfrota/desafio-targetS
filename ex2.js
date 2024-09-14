// Função que gera um número inteiro aleatório até o maximo - max - definido
function getRandomInt(max) {
    // Retorna o número aleatório gerado 
    return Math.floor(Math.random() * max);
  }
  
  // Função que verifica se um número faz parte da série de Fibonacci
  function isFibonacci(num) {
    // Variáveis iniciais da série de Fibonacci
    let a = 0, b = 1;
    
    // Caso o número seja 0 ou 1, ele, obrigatoriamente, já é parte da série
    if (num === 0 || num === 1) {
      return true;
    }
  
    // laço while para gerar os números da série de Fibonacci até que o número seja encontrado ou ultrapassado
    while (b <= num) {
      let temp = a + b;
      a = b;
      b = temp;
  
      if (b === num) {
        return true;
      }
    }
  
    // Se a sequência foi ultrapassada e o número não foi encontrado,logo, o numero não faz parte da série
    return false;
  }
  
  // Gerar um número aleatório para testar (limite de 100, pode ser ajustado)
  let randomNum = getRandomInt(100);
  console.log(`Número gerado: ${randomNum}`);
  
  // Verificar se o número gerado faz parte da série de Fibonacci
  if (isFibonacci(randomNum)) {
    console.log(`${randomNum} faz parte da série de Fibonacci.   :)`);
  } else {
    console.log(`${randomNum} não faz parte da série de Fibonacci.   :(`);
  }
  