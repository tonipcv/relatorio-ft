import prisma from '@/lib/prisma';
import ClientPage from '@/components/ClientPage';

// Função para formatar a data de maneira consistente
function formatDate(date: Date) {
  return date.toISOString(); // Retorna a data em formato ISO para garantir consistência
}

async function getTrades() {
  try {
    await prisma.$connect();
    
    const trades = await prisma.trade.findMany({
      select: {
        data: true,
        ativo: true,
        direcao: true,
        percentual: true,
        alvo: true
      },
      orderBy: {
        data: 'desc'
      }
    });

    // Formata os dados garantindo que não há valores nulos e datas consistentes
    const formattedTrades = trades.map(trade => ({
      data: trade.data ? new Date(formatDate(trade.data)) : new Date(),
      ativo: trade.ativo || '',
      direcao: trade.direcao || 'LONG',
      percentual: Number(trade.percentual) || 0,
      alvo: trade.alvo || ''
    }));

    return formattedTrades;
  } catch (error) {
    console.error('Erro ao buscar trades:', error);
    return [];
  } finally {
    await prisma.$disconnect();
  }
}

export default async function Page() {
  const trades = await getTrades();
  
  if (!trades || trades.length === 0) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-white text-center">
          <h1 className="text-2xl font-bold mb-4">Nenhum dado encontrado</h1>
          <p className="text-gray-400">Verifique a conexão com o banco de dados</p>
        </div>
      </div>
    );
  }
  
  return <ClientPage initialTrades={trades} />;
}
