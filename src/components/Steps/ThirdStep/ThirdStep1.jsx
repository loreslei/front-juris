import React from 'react'

export default function ThirdStep1({onNext}) {
  return (
    <div className='flex flex-col space-y-5'>
      <h1 className='text-lg font-semibold'>
        Contra quem você está pedindo?
      </h1>

      <p className='text-sm'>
        Nesta etapa, você vai informar os dados da pessoa ou da empresa reclamada.
      </p>

      <p className='text-sm'>*A pessoa ou a empresa contra quem o pedido é feito é chamada de <p className='font-semibold inline'>Reclamada</p>, ou seja, quem responde à ação.</p>

      <button 
      onClick={onNext}
      className='md:self-start py-2 px-8 rounded-lg font-medium transition-all bg-teal-500 text-white hover:bg-teal-600 cursor-pointer'>
        Adicionar meus dados 
      </button>
    </div>
  )
}
