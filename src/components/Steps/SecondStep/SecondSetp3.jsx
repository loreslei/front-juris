import Table from '@/components/ui/Table';
import React from 'react'

export default function SecondSetp3() {
  return (
    <div className='flex flex-col'>
      <Table />
      <button className="cursor-pointer flex self-center md:self-end items-center transition-all 1s text-white rounded-lg bg-blue-500 hover:bg-blue-600 px-8 md:px-4 py-2 gap-2">
        Adicionar Reclamante
      </button>
    </div>
  )
}
