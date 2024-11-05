import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    // Testa a conexão
    await prisma.$connect()
    console.log('✅ Conexão bem sucedida')

    // Lista todas as tabelas
    const tables = await prisma.$queryRaw`
      SELECT tablename 
      FROM pg_tables 
      WHERE schemaname = 'public'
    `
    console.log('📋 Tabelas encontradas:', tables)

    // Conta registros na tabela trade
    const count = await prisma.trade.count()
    console.log('🔢 Número de trades:', count)

    // Busca primeiro registro
    const firstTrade = await prisma.trade.findFirst()
    console.log('📝 Primeiro trade:', firstTrade)

  } catch (error) {
    console.error('❌ Erro:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main() 