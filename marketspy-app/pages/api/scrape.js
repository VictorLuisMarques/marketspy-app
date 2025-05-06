export default async function handler(req, res) {
  const { term } = req.query;
  // Aqui é onde você integraria com Apify para scraping real
  res.status(200).json({
    termo: term,
    concorrentes: [
      { nome: "Produto A", preco: "R$49,90", vendedor: "Loja A", vendas: 120, reputacao: "verde", frete: "grátis" },
      { nome: "Produto B", preco: "R$55,00", vendedor: "Loja B", vendas: 98, reputacao: "amarela", frete: "pago" }
    ]
  });
}