const { PrismaClient } = require('@prisma/client')
const fs = require('fs')
const { parse } = require('csv-parse')

const prisma = new PrismaClient()

// Função para converter a data do formato DD/MM/YYYY para YYYY-MM-DD
function convertDate(dateStr) {
  const [day, month, year] = dateStr.split('/');
  return new Date(`${year}-${month}-${day}`);
}

async function importCsv() {
  try {
    console.log('Iniciando importação...')

    const csvFilePath = './data/agostodata.csv'
    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' })

    // Buscar trades existentes para verificar duplicatas
    const existingTrades = await prisma.trade.findMany({
      select: {
        data: true,
        ativo: true,
        direcao: true,
        percentual: true,
        alvo: true
      }
    })

    const existingTradeKeys = new Set(
      existingTrades.map(trade => 
        `${trade.data}-${trade.ativo}-${trade.direcao}-${trade.percentual}-${trade.alvo}`
      )
    )

    parse(fileContent, {
      columns: true,
      delimiter: ',',
      skip_empty_lines: true
    }, async (error, records) => {
      if (error) {
        console.error('Erro ao ler CSV:', error)
        return
      }

      try {
        let newTradesCount = 0
        let skippedCount = 0

        for (const record of records) {
          try {
            const tradeKey = `${record.data}-${record.ativo}-${record.direcao}-${record.percentual}-${record.alvo}`
            
            if (existingTradeKeys.has(tradeKey)) {
              console.log('Trade já existe, pulando:', record)
              skippedCount++
              continue
            }

            const now = new Date()
            const trade = await prisma.trade.create({
              data: {
                data: convertDate(record.data),
                ativo: record.ativo.trim(),
                direcao: record.direcao.trim(),
                percentual: parseFloat(record.percentual),
                alvo: record.alvo.toString().trim(),
                updatedat: now,
                createdat: now
              }
            })
            console.log('Novo trade importado:', trade)
            newTradesCount++
          } catch (recordError) {
            console.error('Erro ao processar registro:', record, recordError)
          }
        }
        
        const totalCount = await prisma.trade.count()
        console.log(`
          Importação concluída:
          - Novos trades importados: ${newTradesCount}
          - Trades pulados (duplicados): ${skippedCount}
          - Total de trades no banco: ${totalCount}
        `)
      } catch (error) {
        console.error('Erro ao importar dados:', error)
      }
    })
  } catch (error) {
    console.error('Erro:', error)
  } finally {
    await prisma.$disconnect()
  }
}

importCsv()