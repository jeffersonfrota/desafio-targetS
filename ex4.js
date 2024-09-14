// Definindo o faturamento de cada estado
const faturamento = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53
  };
  
  // Calculando o valor total de faturamento
  const faturamentoTotal = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);
  
  // Calculando e exibindo o percentual de cada estado
  for (const estado in faturamento) {
    const percentual = (faturamento[estado] / faturamentoTotal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
  }
  