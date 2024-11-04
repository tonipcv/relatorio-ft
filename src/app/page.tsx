'use client'
import { useState } from 'react';

interface TradeData {
  data: string;
  ativo: string;
  direcao: 'LONG' | 'SHORT';
  percentual: number;
  alvo: string | number;
}

export default function Home() {
  const tradeData: TradeData[] = [
    {
      data: '01/10/2024',
      ativo: 'ELIGEN/USDT',
      direcao: 'LONG',
      percentual: 60.20,
      alvo: 4
    },
    {
      data: '01/10/2024',
      ativo: 'REEF/USDT',
      direcao: 'LONG',
      percentual: -90.00,
      alvo: 1
    },
    {
      data: '01/10/2024',
      ativo: 'SEI/USDT',
      direcao: 'LONG',
      percentual: -90.00,
      alvo: '-'
    },
    {
      data: '01/10/2024',
      ativo: 'STG/USDT',
      direcao: 'LONG',
      percentual: -90.00,
      alvo: '-'
    },
    {
      data: '01/10/2024',
      ativo: 'BADGER/USDT',
      direcao: 'LONG',
      percentual: 20.00,
      alvo: 2
    },
    {
      data: '01/10/2024',
      ativo: '1000BONK/USDT',
      direcao: 'LONG',
      percentual: 140.00,
      alvo: 8
    },
    {
      data: '02/10/2024',
      ativo: 'BB/USDT',
      direcao: 'LONG',
      percentual: 40.40,
      alvo: 3
    },
    {
      data: '02/10/2024',
      ativo: 'CATI/USDT',
      direcao: 'LONG',
      percentual: 100.00,
      alvo: 6
    },
    {
      data: '02/10/2024',
      ativo: 'SUI/USDT',
      direcao: 'LONG',
      percentual: 80.00,
      alvo: 5
    },
    {
      data: '02/10/2024',
      ativo: 'TAO/USDT',
      direcao: 'LONG',
      percentual: 120.00,
      alvo: 7
    },
    {
      data: '02/10/2024',
      ativo: 'CRV/USDT',
      direcao: 'LONG',
      percentual: 86.60,
      alvo: 5
    },
    {
      data: '03/10/2024',
      ativo: 'REEF/USDT',
      direcao: 'LONG',
      percentual: 200.00,
      alvo: 11
    },
    {
      data: '03/10/2024',
      ativo: 'REI/USDT',
      direcao: 'SHORT',
      percentual: 20.00,
      alvo: 2
    },
    {
      data: '03/10/2024',
      ativo: 'SKL/USDT',
      direcao: 'LONG',
      percentual: 160.00,
      alvo: 8
    },
    {
      data: '04/10/2024',
      ativo: 'NEIRO/USDT',
      direcao: 'LONG',
      percentual: 200.00,
      alvo: 11
    },
    {
      data: '04/10/2024',
      ativo: 'DAR/USDT',
      direcao: 'LONG',
      percentual: 60.40,
      alvo: 4
    },
    {
      data: '04/10/2024',
      ativo: '1MBABYDOGE/USDT',
      direcao: 'LONG',
      percentual: 80.00,
      alvo: 5
    },
    {
      data: '04/10/2024',
      ativo: 'UXLINK/USDT',
      direcao: 'LONG',
      percentual: 200.00,
      alvo: 11
    },
    {
      data: '05/10/2024',
      ativo: 'FIO/USDT',
      direcao: 'LONG',
      percentual: 40.20,
      alvo: 3
    },
    {
      data: '05/10/2024',
      ativo: 'CHZ/USDT',
      direcao: 'LONG',
      percentual: 200.00,
      alvo: 11
    },
    {
      data: '05/10/2024',
      ativo: 'CRV/USDT',
      direcao: 'LONG',
      percentual: 103.20,
      alvo: 6
    },
    {
      data: '06/10/2024',
      ativo: 'ORBS/USDT',
      direcao: 'SHORT',
      percentual: 101.00,
      alvo: 6
    },
    {
      data: '06/10/2024',
      ativo: 'BOND/USDT',
      direcao: 'LONG',
      percentual: 160.20,
      alvo: 9
    },
    {
      data: '30/10/2024',
      ativo: 'YFI/USDT',
      direcao: 'LONG',
      percentual: 20.00,
      alvo: 2
    },
    {
      data: '07/10/2024',
      ativo: 'ETHFI/USDT',
      direcao: 'LONG',
      percentual: 60.00,
      alvo: 4
    },
    {
      data: '07/10/2024',
      ativo: 'BANANA/USDT',
      direcao: 'LONG',
      percentual: 160.00,
      alvo: 9
    },
    {
      data: '07/10/2024',
      ativo: 'MEW/USDT',
      direcao: 'LONG',
      percentual: 60.00,
      alvo: 4
    },
    {
      data: '08/10/2024',
      ativo: '1000RATS/USDT',
      direcao: 'LONG',
      percentual: 20.00,
      alvo: 2
    },
    {
      data: '08/10/2024',
      ativo: 'SYN/USDT',
      direcao: 'LONG',
      percentual: 80.20,
      alvo: 5
    },
    {
      data: '08/10/2024',
      ativo: 'CRV/USDT',
      direcao: 'LONG',
      percentual: 200.00,
      alvo: 11
    },
    {
      data: '08/10/2024',
      ativo: 'ETHW/USDT',
      direcao: 'LONG',
      percentual: 200.00,
      alvo: 11
    },
    {
      data: '09/10/2024',
      ativo: 'AMB/USDT',
      direcao: 'LONG',
      percentual: -90.00,
      alvo: '-'
    },
    {
      data: '09/10/2024',
      ativo: 'REEF/USDT',
      direcao: 'LONG',
      percentual: -90.00,
      alvo: '-'
    },
    {
      data: '09/10/2024',
      ativo: 'MEW/USDT',
      direcao: 'LONG',
      percentual: 20.00,
      alvo: 2
    },
    {
      data: '09/10/2024',
      ativo: 'IOST/USDT',
      direcao: 'LONG',
      percentual: -90.00,
      alvo: '-'
    },
    {
      data: '09/10/2024',
      ativo: 'HOOK/USDT',
      direcao: 'LONG',
      percentual: 20.00,
      alvo: 2
    },
    {
      data: '09/10/2024',
      ativo: 'NEIRO/USDT',
      direcao: 'SHORT',
      percentual: 60.00,
      alvo: 4
    },
    {
      data: '10/10/2024',
      ativo: 'GAS/USDT',
      direcao: 'LONG',
      percentual: 20.20,
      alvo: 2
    },
    {
      data: '10/10/2024',
      ativo: 'LISTA/USDT',
      direcao: 'LONG',
      percentual: 200.00,
      alvo: 11
    },
    {
      data: '10/10/2024',
      ativo: '1000RATS/USDT',
      direcao: 'LONG',
      percentual: 200.00,
      alvo: 11
    },
    {
      data: '10/10/2024',
      ativo: 'NEIRO/USDT',
      direcao: 'LONG',
      percentual: 40.00,
      alvo: 3
    },
    {
      data: '11/10/2024',
      ativo: 'FIDA/USDT',
      direcao: 'LONG',
      percentual: 80.60,
      alvo: 5
    },
    {
      data: '11/10/2024',
      ativo: 'TAO/USDT',
      direcao: 'SHORT',
      percentual: 40.00,
      alvo: 3
    },
    {
      data: '11/10/2024',
      ativo: 'TURBO/USDT',
      direcao: 'LONG',
      percentual: 200.00,
      alvo: 11
    },
    {
      data: '12/10/2024',
      ativo: 'APT/USDT',
      direcao: 'LONG',
      percentual: 200.00,
      alvo: 11
    },
    {
      data: '12/10/2024',
      ativo: 'PEOPLE/USDT',
      direcao: 'LONG',
      percentual: 200.00,
      alvo: 11
    },
    {
      data: '13/10/2024',
      ativo: 'NEIRO/USDT',
      direcao: 'LONG',
      percentual: 200.00,
      alvo: 11
    },
    {
      data: '14/10/2024',
      ativo: 'ROSE/USDT',
      direcao: 'SHORT',
      percentual: 20.00,
      alvo: 2
    },
    {
      data: '14/10/2024',
      ativo: 'WIF/USDT',
      direcao: 'LONG',
      percentual: 80.00,
      alvo: 5
    },
    {
      data: '14/10/2024',
      ativo: 'CELO/USDT',
      direcao: 'LONG',
      percentual: 20.00,
      alvo: 2
    },
    {
      data: '14/10/2024',
      ativo: 'REEF/USDT',
      direcao: 'LONG',
      percentual: -90.00,
      alvo: '-'
    },
    {
      data: '14/10/2024',
      ativo: 'SPELL/USDT',
      direcao: 'LONG',
      percentual: 40.00,
      alvo: 3
    },
    {
      data: '15/10/2024',
      ativo: '1000FLOKI/USDT',
      direcao: 'LONG',
      percentual: 120.00,
      alvo: 7
    },
    {
      data: '15/10/2024',
      ativo: 'TURBO/USDT',
      direcao: 'LONG',
      percentual: 200.00,
      alvo: 11
    },
    {
      data: '15/10/2024',
      ativo: 'ALPHA/USDT',
      direcao: 'LONG',
      percentual: 60.00,
      alvo: 4
    },
    {
      data: '15/10/2024',
      ativo: 'PHB/USDT',
      direcao: 'LONG',
      percentual: 80.00,
      alvo: 5
    },
    {
      data: '16/10/2024',
      ativo: 'FTM/USDT',
      direcao: 'LONG',
      percentual: 20.00,
      alvo: 2
    },
    {
      data: '16/10/2024',
      ativo: 'MEW/USDT',
      direcao: 'LONG',
      percentual: 60.00,
      alvo: 4
    },
    {
      data: '16/10/2024',
      ativo: 'CHR/USDT',
      direcao: 'LONG',
      percentual: 40.60,
      alvo: 3
    },
    {
      data: '17/10/2024',
      ativo: 'DODOX/USDT',
      direcao: 'LONG',
      percentual: 180.00,
      alvo: 10
    },
    {
      data: '17/10/2024',
      ativo: 'SOL/USDT',
      direcao: 'LONG',
      percentual: 20.00,
      alvo: 2
    },
    {
      data: '18/10/2024',
      ativo: 'NFP/USDT',
      direcao: 'LONG',
      percentual: 40.60,
      alvo: 3
    },
    {
      data: '18/10/2024',
      ativo: 'SAGA/USDT',
      direcao: 'LONG',
      percentual: 100.00,
      alvo: 6
    },
    {
      data: '18/10/2024',
      ativo: 'ENA/USDT',
      direcao: 'SHORT',
      percentual: 20.00,
      alvo: 2
    },
    {
      data: '18/10/2024',
      ativo: 'LTC/USDT',
      direcao: 'LONG',
      percentual: -90.00,
      alvo: '-'
    },
    {
      data: '19/10/2024',
      ativo: 'VET/USDT',
      direcao: 'LONG',
      percentual: 20.00,
      alvo: 2
    },
    {
      data: '19/10/2024',
      ativo: 'MYRO/USDT',
      direcao: 'LONG',
      percentual: 40.00,
      alvo: 3
    },
    {
      data: '19/10/2024',
      ativo: '1MBABYDOGE/USDT',
      direcao: 'LONG',
      percentual: 20.00,
      alvo: 2
    },
    {
      data: '20/10/2024',
      ativo: 'DYDX/USDT',
      direcao: 'LONG',
      percentual: 160.40,
      alvo: 7
    },
    {
      data: '21/10/2024',
      ativo: 'RLC/USDT',
      direcao: 'LONG',
      percentual: 80.00,
      alvo: 5
    },
    {
      data: '21/10/2024',
      ativo: 'OM/USDT',
      direcao: 'LONG',
      percentual: 60.00,
      alvo: 4
    },
    {
      data: '21/10/2024',
      ativo: 'QUICK/USDT',
      direcao: 'LONG',
      percentual: 60.00,
      alvo: 4
    },
    {
      data: '22/10/2024',
      ativo: 'DUSK/USDT',
      direcao: 'LONG',
      percentual: -90.00,
      alvo: '-'
    },
    {
      data: '22/10/2024',
      ativo: 'AGLD/USDT',
      direcao: 'LONG',
      percentual: -90.00,
      alvo: '-'
    },
    {
      data: '22/10/2024',
      ativo: 'LUNA2/USDT',
      direcao: 'LONG',
      percentual: 40.40,
      alvo: 3
    },
    {
      data: '22/10/2024',
      ativo: 'VOXEL/USDT',
      direcao: 'LONG',
      percentual: 40.20,
      alvo: 3
    },
    {
      data: '23/10/2024',
      ativo: 'TRB/USDT',
      direcao: 'LONG',
      percentual: 40.00,
      alvo: 3
    },
    {
      data: '23/10/2024',
      ativo: 'C98/USDT',
      direcao: 'LONG',
      percentual: 20.20,
      alvo: 2
    },
    {
      data: '23/10/2024',
      ativo: 'JUP/USDT',
      direcao: 'LONG',
      percentual: 200.00,
      alvo: 11
    },
    {
      data: '23/10/2024',
      ativo: '1000CAT/USDT',
      direcao: 'LONG',
      percentual: 60.00,
      alvo: 4
    },
    {
      data: '23/10/2024',
      ativo: 'ALPHA/USDT',
      direcao: 'LONG',
      percentual: 60.00,
      alvo: 4
    },
    {
      data: '24/10/2024',
      ativo: 'DOGE/USDT',
      direcao: 'LONG',
      percentual: 60.00,
      alvo: 4
    },
    {
      data: '24/10/2024',
      ativo: 'HMSTR/USDT',
      direcao: 'LONG',
      percentual: 60.00,
      alvo: 4
    },
    {
      data: '24/10/2024',
      ativo: 'BOME/USDT',
      direcao: 'LONG',
      percentual: 180.00,
      alvo: 10
    },
    {
      data: '24/10/2024',
      ativo: 'CRV/USDT',
      direcao: 'LONG',
      percentual: 24.00,
      alvo: 2
    },
    {
      data: '25/10/2024',
      ativo: 'STORJ/USDT',
      direcao: 'LONG',
      percentual: 20.00,
      alvo: 2
    },
    {
      data: '25/10/2024',
      ativo: 'YGG/USDT',
      direcao: 'LONG',
      percentual: -90.00,
      alvo: 1
    },
    {
      data: '25/10/2024',
      ativo: 'TIA/USDT',
      direcao: 'LONG',
      percentual: 20.00,
      alvo: 2
    },
    {
      data: '26/10/2024',
      ativo: 'CRV/USDT',
      direcao: 'LONG',
      percentual: 185.00,
      alvo: 10
    },
    {
      data: '26/10/2024',
      ativo: 'ENS/USDT',
      direcao: 'SHORT',
      percentual: 60.00,
      alvo: 4
    },
    {
      data: '26/10/2024',
      ativo: 'IO/USDT',
      direcao: 'LONG',
      percentual: 120.60,
      alvo: 7
    },
    {
      data: '26/10/2024',
      ativo: 'SYN/USDT',
      direcao: 'LONG',
      percentual: 20.20,
      alvo: 2
    },
    {
      data: '26/10/2024',
      ativo: 'REZ/USDT',
      direcao: 'LONG',
      percentual: 200.00,
      alvo: 11
    },
    {
      data: '27/10/2024',
      ativo: 'NEIRO/USDT',
      direcao: 'LONG',
      percentual: 200.00,
      alvo: 11
    },
    {
      data: '27/10/2024',
      ativo: 'APE/USDT',
      direcao: 'LONG',
      percentual: 120.00,
      alvo: 7
    },
    {
      data: '28/10/2024',
      ativo: 'AXL/USDT',
      direcao: 'LONG',
      percentual: 200.00,
      alvo: 11
    },
    {
      data: '28/10/2024',
      ativo: 'DOT/USDT',
      direcao: 'LONG',
      percentual: 20.20,
      alvo: 2
    },
    {
      data: '28/10/2024',
      ativo: 'MOODENG/USDT',
      direcao: 'LONG',
      percentual: -90.00,
      alvo: '-'
    },
    {
      data: '28/10/2024',
      ativo: 'UNFI/USDT',
      direcao: 'LONG',
      percentual: -90.00,
      alvo: '-'
    },
    {
      data: '28/10/2024',
      ativo: 'WIF/USDT',
      direcao: 'LONG',
      percentual: 200.00,
      alvo: 11
    },
    {
      data: '28/10/2024',
      ativo: 'SANTOS/USDT',
      direcao: 'LONG',
      percentual: 40.00,
      alvo: 3
    },
    {
      data: '29/10/2024',
      ativo: 'XAI/USDT',
      direcao: 'LONG',
      percentual: 180.00,
      alvo: 10
    },
    {
      data: '29/10/2024',
      ativo: 'HMSTR/USDT',
      direcao: 'LONG',
      percentual: 80.00,
      alvo: 5
    },
    {
      data: '29/10/2024',
      ativo: 'CYBER/USDT',
      direcao: 'LONG',
      percentual: 180.20,
      alvo: 10
    },
    {
      data: '29/10/2024',
      ativo: 'SUI/USDT',
      direcao: 'LONG',
      percentual: 100.00,
      alvo: 6
    },
    {
      data: '30/10/2024',
      ativo: 'SPELL/USDT',
      direcao: 'LONG',
      percentual: 60.20,
      alvo: 4
    },
    {
      data: '30/10/2024',
      ativo: 'AXS/USDT',
      direcao: 'LONG',
      percentual: 40.00,
      alvo: 3
    },
    {
      data: '30/10/2024',
      ativo: 'ARB/USDT',
      direcao: 'LONG',
      percentual: 80.20,
      alvo: 5
    },
    {
      data: '30/10/2024',
      ativo: 'YFI/USDT',
      direcao: 'LONG',
      percentual: 20.00,
      alvo: 2
    }
  ];

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDirection, setSelectedDirection] = useState<'ALL' | 'LONG' | 'SHORT'>('ALL');
  const [selectedMonth, setSelectedMonth] = useState<number>(10);

  const months = [
    { number: 1, name: 'Janeiro' },
    { number: 2, name: 'Fevereiro' },
    { number: 3, name: 'Março' },
    { number: 4, name: 'Abril' },
    { number: 5, name: 'Maio' },
    { number: 6, name: 'Junho' },
    { number: 7, name: 'Julho' },
    { number: 8, name: 'Agosto' },
    { number: 9, name: 'Setembro' },
    { number: 10, name: 'Outubro' },
  ];

  // Filtra os dados por mês
  const getMonthFromDate = (date: string) => {
    return parseInt(date.split('/')[1]);
  };

  const filteredData = tradeData.filter(trade => {
    const matchesSearch = trade.ativo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDirection = selectedDirection === 'ALL' || trade.direcao === selectedDirection;
    const matchesMonth = getMonthFromDate(trade.data) === selectedMonth;
    return matchesSearch && matchesDirection && matchesMonth;
  });

  // Recalcula estatísticas baseado nos dados filtrados
  const totalOperacoes = filteredData.length;
  const operacoesLucrativas = filteredData.filter(t => t.percentual > 0).length;
  const taxaAcerto = totalOperacoes > 0 ? ((operacoesLucrativas / totalOperacoes) * 100) : 0;
  const valorizacaoTotal = filteredData.reduce((acc, curr) => acc + curr.percentual, 0);

  return (
    <div className="min-h-screen bg-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Transparência Futuros Tech 
            </h1>
            <p className="mt-2 text-sm text-gray-400">
              Análise detalhada de {tradeData.length} operações
            </p>
          </div>
          <div className="mt-4 sm:mt-0 sm:flex-none">
            <div className="flex space-x-4">
              <select
                className="rounded-md bg-gray-800 text-gray-200 px-4 py-2 text-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={selectedDirection}
                onChange={(e) => setSelectedDirection(e.target.value as 'ALL' | 'LONG' | 'SHORT')}
              >
                <option value="ALL">Todas Direções</option>
                <option value="LONG">LONG</option>
                <option value="SHORT">SHORT</option>
              </select>
              <input
                type="text"
                placeholder="Buscar ativo..."
                className="rounded-md bg-gray-800 text-gray-200 px-4 py-2 text-sm border border-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Abas dos meses */}
        <div className="mt-8 border-b border-gray-700">
          <nav className="-mb-px flex space-x-8 overflow-x-auto" aria-label="Months">
            {months.map((month) => (
              <button
                key={month.number}
                onClick={() => setSelectedMonth(month.number)}
                className={`
                  whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium transition-colors
                  ${selectedMonth === month.number
                    ? 'border-indigo-500 text-indigo-400'
                    : 'border-transparent text-gray-400 hover:border-gray-700 hover:text-gray-300'
                  }
                `}
              >
                {month.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Cards de estatísticas */}
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/30">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-indigo-400">📊</span>
                <span className="text-sm text-gray-400">Win Rate</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">
                  {taxaAcerto.toFixed(1)}%
                </span>
                <span className="text-xs text-gray-500">
                  {operacoesLucrativas}/{totalOperacoes}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/30">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-emerald-400">💰</span>
                <span className="text-sm text-gray-400">Resultado Total</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">
                  {valorizacaoTotal > 0 ? '+' : ''}{valorizacaoTotal.toFixed(1)}%
                </span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-6 border border-gray-700/30">
            <div className="flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-green-400">📈</span>
                <span className="text-sm text-gray-400">Total de Sinais</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl font-bold text-white">
                  {totalOperacoes}
                </span>
                <span className="text-xs text-gray-500">operações</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h2 className="text-base font-semibold leading-6 text-white">Operações</h2>
              <p className="mt-2 text-sm text-gray-400">
                Lista detalhada de todas as operações realizadas
              </p>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-200 sm:pl-0">
                        <div className="flex items-center gap-2">
                          <span>📅</span>
                          Data
                        </div>
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200">
                        <div className="flex items-center gap-2">
                          <span>💱</span>
                          Ativo
                        </div>
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200">Direção</th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200">
                        <div className="flex items-center gap-2">
                          <span>📊</span>
                          Resultado
                        </div>
                      </th>
                      <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-200">Alvo</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-700">
                    {filteredData.map((trade, index) => (
                      <tr key={index} className="hover:bg-gray-800/50">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm text-gray-300 sm:pl-0">{trade.data}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-300">{trade.ativo}</td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm">
                          <span className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${
                            trade.direcao === 'LONG'
                              ? 'bg-green-400/10 text-green-400 ring-green-400/20'
                              : 'bg-red-400/10 text-red-400 ring-red-400/20'
                          }`}>
                            {trade.direcao}
                          </span>
                        </td>
                        <td className={`whitespace-nowrap px-3 py-4 text-sm ${
                          trade.percentual >= 0 ? 'text-green-400' : 'text-red-400'
                        }`}>
                          {trade.percentual >= 0 ? '+' : ''}{trade.percentual}%
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-300">{trade.alvo}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
