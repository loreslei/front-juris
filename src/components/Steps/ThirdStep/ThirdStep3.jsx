import Table from '@/components/ui/Table';
import React from 'react'

export default function ThirdStep3({onAddMore}) {
  const nomes = ["Jennifer", "Luana", "claudia"]
  return (
    <div className='flex flex-col'>
      <Table lista_cpfCnpj={nomes}/>
      <button
        onClick={onAddMore}
       className="cursor-pointer flex self-center md:self-end items-center transition-all 1s text-white rounded-lg bg-blue-500 hover:bg-blue-600 px-8 md:px-4 py-2 gap-2">
        Adicionar Reclamado
      </button>
    </div>
  )
}
