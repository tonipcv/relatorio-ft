import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    // Limpa a tabela
    await prisma.trade.deleteMany({})

    const now = new Date()

    // Dados de teste
    const trades = [
      {
        data: new Date('2024-10-01'),
        ativo: 'ELIGEN/USDT',
        direcao: 'LONG',
        percentual: 60.20,
        alvo: '4',
        createdAt: now,
        updatedAt: now
      },
      {
        data: new Date('2024-10-01'),
        ativo: 'REEF/USDT',
        direcao: 'LONG',
        percentual: -90.00,
        alvo: '1',
        createdAt: now,
        updatedAt: now
      }
    ]

    // Insere os dados
    for (const trade of trades) {
      const result = await prisma.trade.create({
        data: trade
      })
      console.log('Trade inserido:', result)
    }

    console.log('Dados de teste inseridos com sucesso!')

    // Verifica os dados inseridos
    const count = await prisma.trade.count()
    console.log(`Total de trades no banco: ${count}`)

  } catch (error) {
    console.error('Erro ao inserir dados:', error)
    process.exit(1)
  } finally {
    await prisma.$disconnect()
  }
}

main() 