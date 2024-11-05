import prisma from './prisma'

interface Trade {
  data: Date;
  ativo: string;
  direcao: string;
  percentual: number | null;
  alvo: string;
}

export async function getTradesByMonth(month: number) {
  return await prisma.trade.findMany({
    where: {
      data: {
        gte: new Date(2024, month - 1, 1),
        lt: new Date(2024, month, 1)
      }
    },
    orderBy: {
      data: 'desc'
    }
  })
}

export async function getTradeStats(trades: Trade[]) {
  const totalOperacoes = trades.length
  
  // Garante que percentual não seja nulo
  const operacoesLucrativas = trades.filter(t => (t.percentual ?? 0) > 0).length
  
  const taxaAcerto = totalOperacoes > 0 ? ((operacoesLucrativas / totalOperacoes) * 100) : 0
  
  // Usa o operador nullish coalescing para garantir um valor padrão
  const valorizacaoTotal = trades.reduce((acc, curr) => acc + (curr.percentual ?? 0), 0)

  return {
    totalOperacoes,
    operacoesLucrativas,
    taxaAcerto,
    valorizacaoTotal
  }
} 