'use client'
import { useState } from 'react';

export default function CsvUploader() {
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
        // Recarrega a página após 2 segundos para atualizar os dados
        setTimeout(() => window.location.reload(), 2000);
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
    <div className="flex flex-col items-start gap-4">
      <label className="relative inline-flex items-center gap-2">
        <input
          type="file"
          accept=".csv"
          onChange={handleUpload}
          disabled={isUploading}
          className="hidden"
        />
        <span className={`
          px-4 py-2 rounded-md text-sm font-medium
          ${isUploading 
            ? 'bg-gray-600 cursor-not-allowed' 
            : 'bg-indigo-600 hover:bg-indigo-700 cursor-pointer'
          }
          text-white transition-colors
        `}>
          {isUploading ? 'Importando...' : 'Importar CSV'}
        </span>
      </label>
      {message && (
        <p className={`text-sm ${
          message.startsWith('Erro') ? 'text-red-400' : 'text-green-400'
        }`}>
          {message}
        </p>
      )}
    </div>
  );
} 