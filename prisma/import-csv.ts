import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import { parse } from 'csv-parse'

const prisma = new PrismaClient()

async function importCsv() {
  try {
    // Primeiro limpa a tabela
    await prisma.trade.deleteMany({})
    console.log('Tabela limpa com sucesso')

    // Lê o arquivo CSV
    const csvFilePath = './data/Data (1).csv'
    const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' })

    // Parse do CSV
    parse(fileContent, {
      columns: true,
      delimiter: ',',
    }, async (error, records) => {
      if (error) {
        console.error('Erro ao ler CSV:', error)
        return
      }

      try {
        for (const record of records) {
          const trade = await prisma.trade.create({
            data: {
              data: new Date(record.data),
              ativo: record.ativo,
              direcao: record.direcao,
              percentual: parseFloat(record.percentual),
              alvo: record.alvo,
              createdat: new Date(),
              updatedat: new Date()
            }
          })
          console.log('Trade importado:', trade)
        }
        
        const count = await prisma.trade.count()
        console.log(`Importação concluída. Total de trades: ${count}`)
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