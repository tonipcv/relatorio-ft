'use client'
import { useState } from 'react';
import Image from 'next/image';
import React from 'react';

export default function AdminLoginPage() {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password === '123456') {
      localStorage.setItem('isAdmin', 'true');
      window.location.href = '/upload';
    } else {
      setError('Senha incorreta');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
      <div className="max-w-sm w-full">
        <div className="flex justify-center mb-8">
          <Image
            src="/logo.png"
            alt="Logo Futuros Tech"
            width={200}
            height={50}
            className="object-contain w-auto h-8"
            priority
          />
        </div>

        <form onSubmit={handleSubmit} className="bg-gray-800/50 backdrop-blur-xl rounded-xl p-8 border border-gray-700/30">
          <h1 className="text-xl font-semibold text-white mb-6 text-center">Área Administrativa</h1>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md bg-gray-700 border-gray-600 text-white px-4 py-2 text-sm focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="Digite sua senha"
                autoComplete="off"
              />
            </div>

            {error && (
              <p className="text-sm text-red-400">
                {error}
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-md px-4 py-2 text-sm font-medium transition-colors"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
} 