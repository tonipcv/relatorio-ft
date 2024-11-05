'use client'
import { useState } from 'react';
import Image from 'next/image';

export default function UploadPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    setIsUploading(true);
    setMessage('');

    try {
      const formData = new FormData();
      formData.append('file', file);

      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const result = await response.json();

      if (response.ok) {
        setMessage(`Sucesso: ${result.message}`);
      } else {
        setMessage(`Erro: ${result.error}`);
      }
    } catch (error) {
      setMessage('Erro ao fazer upload do arquivo');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <Image
            src="/logo.png"
            alt="Logo Futuros Tech"
            width={200}
            height={50}
            className="object-contain w-auto h-8"
            priority
          />
        </div>

        <div className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-8 border border-gray-700/30">
          <h1 className="text-xl font-semibold text-white mb-4">Upload de Dados</h1>
          
          <div className="space-y-4">
            <div className="bg-gray-900/50 p-4 rounded-lg border border-gray-700/30">
              <h2 className="text-sm font-medium text-gray-300 mb-2">Formato do CSV</h2>
              <code className="text-xs text-gray-400 block">
                DATA,ATIVO,DIREÇÃO DO ATIVO,%,alvo<br/>
                01/10/2024,ELIGEN/USDT,LONG,60.20,4
              </code>
            </div>

            <div className="flex flex-col gap-4">
              <label className="relative inline-flex items-center gap-2">
                <input
                  type="file"
                  accept=".csv"
                  onChange={handleUpload}
                  disabled={isUploading}
                  className="hidden"
                />
                <span className={`
                  px-4 py-2 rounded-md text-sm font-medium w-full text-center
                  ${isUploading 
                    ? 'bg-gray-600 cursor-not-allowed' 
                    : 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer'
                  }
                  text-white transition-colors
                `}>
                  {isUploading ? 'Importando...' : 'Selecionar arquivo CSV'}
                </span>
              </label>

              {message && (
                <div className={`p-4 rounded-md text-sm ${
                  message.startsWith('Erro') 
                    ? 'bg-red-900/20 text-red-400 border border-red-900/30' 
                    : 'bg-green-900/20 text-green-400 border border-green-900/30'
                }`}>
                  {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 