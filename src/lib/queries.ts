import prisma from '@/lib/prisma'

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

export async function getTradeStats(month?: number) {
  const whereClause = month ? {
    data: {
      gte: new Date(2024, month - 1, 1),
      lt: new Date(2024, month, 1)
    }
  } : {}

  const trades = await prisma.trade.findMany({ where: whereClause })
  
  const totalOperacoes = trades.length
  const operacoesLucrativas = trades.filter(t => t.percentual > 0).length
  const taxaAcerto = totalOperacoes > 0 ? ((operacoesLucrativas / totalOperacoes) * 100) : 0
  const valorizacaoTotal = trades.reduce((acc, curr) => acc + curr.percentual, 0)

  return {
    totalOperacoes,
    operacoesLucrativas,
    taxaAcerto,
    valorizacaoTotal
  }
} 