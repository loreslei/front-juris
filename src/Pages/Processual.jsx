import FirstStep from '@/components/FirstStep';
import React, { useState } from 'react';

export default function Processual() {
  const [passoAtual, setPassoAtual] = useState(1);

  const passos = [
    'Ação Sem Advogado',
    'Reclamante(s)',
    'Reclamado(s)',
    'Relato',
    'Anexos',
    'Declaração',
  ];

  const avancarPasso = () => {
    if (passoAtual < passos.length) setPassoAtual(passoAtual + 1);
  };

  return (
    <div className="max-w-5/6 mx-auto px-12 py-8 m-5 rounded-xl bg-slate-100 text-gray-700 font-sans">
      <p className="mb-8 text-sm">
        Preencha os dados abaixo e clique no botão Confirmar. Os campos marcados com * são obrigatórios.
      </p>

      {/* Stepper (Barra de Progresso) */}
      <div className="flex justify-between items-center mb-8 relative">
        {/* Linha de fundo do stepper */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -z-10 transform -translate-y-1/2"></div>
        
        {passos.map((nomePasso, index) => {
          const numeroPasso = index + 1;
          const ativo = passoAtual === numeroPasso;
          const concluido = passoAtual > numeroPasso;

          return (
            <div key={index} className="flex flex-col items-center bg-slate-100 px-2">
              <div 
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold border-4 
                ${ativo || concluido 
                  ? 'border-teal-500 bg-teal-500 text-white' 
                  : 'border-gray-200 bg-white text-gray-400'}`}
              >
                {numeroPasso}
              </div>
              <span className={`mt-2 text-sm ${ativo ? 'text-teal-600 font-medium' : 'text-gray-400'}`}>
                {nomePasso}
              </span>
            </div>
          );
        })}
      </div>

      {/* Container do Conteúdo Dinâmico */}
      <div className="bg-gray-50 border border-gray-100 rounded-lg shadow-sm">
        {/* Cabeçalho da Seção */}
        <div className="bg-teal-500 text-white p-3 font-semibold rounded-t-lg">
          {passos[passoAtual - 1]}
        </div>

        {/* Corpo da Seção */}
        <div className="max-w-5xl p-8">
          {passoAtual === 1 && <FirstStep />}
          {passoAtual === 2 && <div>Formulário de Reclamante em construção...</div>}
          {/* Adicione os outros passos aqui */}
        </div>
      </div>

      {/* Rodapé com Botões */}
      <div className="flex justify-end mt-6">
        <button
          onClick={avancarPasso}
          className="bg-teal-500 hover:bg-teal-600 text-white font-medium py-2 px-8 rounded transition-colors"
        >
          Próximo
        </button>
      </div>
    </div>
  );
}