"use client";

import axios from "axios";
import { useState } from "react";

// Componente do formulário para nome e sobrenome, estilizado com Tailwind CSS.
const NameForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [message, setMessage] = useState('');

  // Função para lidar com o envio do formulário.
  //const handleSubmit = (e) => {
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (firstName && lastName) {
      // Aqui você pode adicionar a lógica para enviar os dados para um banco de dados ou API.
      console.log('Dados enviados:', { firstName, lastName });
  

      const URL = process.env.NEXT_PUBLIC_ENDPOINT_HOST;

 
      try {
          const response = await axios.post(`${URL}/register`, {
            name: firstName,
            token: lastName,
          });


          //const response = await axios.get(`${URL}/health`)
          //const response = await axios.get('http://153.92.214.57/health')
          //setMessage(JSON.stringify(response, null, 2));
          setMessage(response.data.status)

          // setMessage(response.data);
           setFirstName('ok');
           setLastName('');
        } catch (error) {
          setMessage('ROOOOOOO Formulário enviado com sucesso!');
        }



    } else {
      setMessage('Por favor, preencha todos os campos.');
    }
  };

  return (
    <div className="w-full max-w-md p-8 mx-auto mt-8 bg-white rounded-xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Registro de Presença</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Nome</label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"

            placeholder="Nome completo"
            required
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Token de Acesso</label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm text-gray-900"

            placeholder="Token"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Enviar
          </button>
        </div>
      </form>
      {message && (
        <p className={`mt-4 text-center text-sm font-medium ${message.includes('sucesso') ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}
    </div>
  );
};

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/*
          O componente 'next/image' foi removido para evitar erros de compilação
          em ambientes que não o suportam. O logo e os ícones foram substituídos por texto.
        */}
        <div className="text-4xl font-extrabold text-gray-800 dark:text-white">Quero Quero JUDO</div>
        
        {/* Adiciona o componente do formulário aqui */}
        <NameForm />

      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a>@2025 - QJA version 25.9</a>
       
     
      </footer>
    </div>
  );
}
