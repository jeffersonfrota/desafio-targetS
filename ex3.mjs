import fs from 'fs/promises'; 
// Importando o módulo 'fs' usando a versão Promises

// Leitura do arquivo JSON usando async/await
async function processFaturamento() {
  try {
    const data = await fs.readFile('dados.json', 'utf8');
    const faturamento = JSON.parse(data);
    
    // Filtros para ignorar dias sem faturamento
    const diasComFaturamento = faturamento.filter(dia => dia.valor > 0);

    // Cálculo do menor e maior valor de faturamento
    const menorFaturamento = Math.min(...diasComFaturamento.map(dia => dia.valor));
    const maiorFaturamento = Math.max(...diasComFaturamento.map(dia => dia.valor));

    // Cálculo da média de faturamento
    const somaFaturamento = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
    const mediaFaturamento = somaFaturamento / diasComFaturamento.length;

    // Número de dias com faturamento superior à média
    const diasAcimaDaMedia = diasComFaturamento.filter(dia => dia.valor > mediaFaturamento).length;

    // Resultados
    console.log("Menor valor de faturamento: R$", menorFaturamento.toFixed(2));
    console.log("Maior valor de faturamento: R$", maiorFaturamento.toFixed(2));
    console.log("Número de dias com faturamento superior à média mensal:", diasAcimaDaMedia);

  } catch (err) {
    console.error("Erro ao ler o arquivo:", err);
  }
}

processFaturamento();
