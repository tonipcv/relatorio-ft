import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  try {
    await prisma.$connect()
    console.log('✅ Conexão estabelecida')

    // Lista todas as tabelas
    const tables = await prisma.$queryRaw`
      SELECT tablename 
      FROM pg_tables 
      WHERE schemaname = 'public'
    `
    console.log('📊 Tabelas:', tables)

    // Verifica se a tabela trade existe
    const tradeTable = await prisma.$queryRaw`
      SELECT * FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name = 'trade'
    `
    console.log('📋 Tabela trade:', tradeTable)

    // Tenta contar os registros
    const count = await prisma.trade.count()
    console.log('🔢 Número de trades:', count)

    // Tenta buscar o primeiro registro
    const firstTrade = await prisma.trade.findFirst()
    console.log('📝 Primeiro trade:', firstTrade)

  } catch (error) {
    console.error('❌ Erro:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main() 