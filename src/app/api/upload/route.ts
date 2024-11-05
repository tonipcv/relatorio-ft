import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { Direcao } from '@prisma/client';

interface ParsedTrade {
  data: Date;
  ativo: string;
  direcao: Direcao;
  percentual: number;
  alvo: string;
}

export async function POST(request: NextRequest) {
  try {
    const data = await request.formData();
    const file: File | null = data.get('file') as unknown as File;

    if (!file) {
      return NextResponse.json({ error: 'Nenhum arquivo foi enviado' }, { status: 400 });
    }

    const textContent = await file.text();
    // Pula a primeira linha se for cabeçalho
    const lines = textContent.split('\n')
      .filter(line => line.trim())
      .filter(line => !line.includes('Ordem Data')); // Ignora linha de cabeçalho

    const formattedTrades: ParsedTrade[] = lines.map((line, index) => {
      const processedLine = line.replace(/\s+/g, ' ').trim();
      
      try {
        // Encontra a data no formato DD/MM/YYYY
        const dateMatch = processedLine.match(/\d{2}\/\d{2}\/\d{4}/);
        if (!dateMatch) {
          throw new Error('Formato de data não encontrado');
        }
        const dataStr = dateMatch[0];
        
        // Extrai o ativo (procura entre a data e LONG/SHORT)
        const afterDate = processedLine.substring(processedLine.indexOf(dataStr) + dataStr.length);
        const ativo = afterDate.split(/LONG|SHORT/)[0].trim();
        
        // Determina a direção
        const direcao = processedLine.includes('LONG') ? Direcao.LONG : Direcao.SHORT;
        
        // Extrai o percentual (procura por número seguido de %)
        const percentualMatch = processedLine.match(/-?\d+(?:,\d+)?%/);
        if (!percentualMatch) {
          throw new Error('Percentual não encontrado');
        }
        const percentualStr = percentualMatch[0].replace('%', '').replace(',', '.');
        const percentual = parseFloat(percentualStr);
        
        // Extrai o alvo (último número da linha ou '-')
        const alvo = processedLine.match(/\s(\d+|-)\s*$/)?.[1] || '-';

        // Formata a data
        const [dia, mes, ano] = dataStr.split('/');
        const dataFormatada = new Date(parseInt(ano), parseInt(mes) - 1, parseInt(dia));

        if (isNaN(dataFormatada.getTime())) {
          throw new Error(`Data inválida: ${dataStr}`);
        }

        return {
          data: dataFormatada,
          ativo,
          direcao,
          percentual,
          alvo: alvo.toString()
        };
      } catch (err) {
        console.error(`Erro processando linha ${index + 1}:`, processedLine);
        const errorMessage = err instanceof Error ? err.message : 'Erro desconhecido';
        throw new Error(`Erro na linha ${index + 1}: ${errorMessage}`);
      }
    });

    await prisma.trade.createMany({
      data: formattedTrades,
      skipDuplicates: true,
    });

    return NextResponse.json({ 
      success: true, 
      message: `${formattedTrades.length} trades importados com sucesso` 
    });

  } catch (error) {
    console.error('Upload error:', error);
    
    return NextResponse.json(
      { 
        error: error instanceof Error ? error.message : 'Erro ao processar o arquivo'
      }, 
      { status: 500 }
    );
  }
} 