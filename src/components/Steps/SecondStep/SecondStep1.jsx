import React from 'react'

export default function SecondStep1({onNext}) {
  return (
    <div className='flex flex-col space-y-5'>
      <h1 className='text-lg font-semibold'>
        Quem está fazendo o pedido?
      </h1>

      <p className='text-sm'>
        Nesta etapa, você vai informar seus próprios dados.
      </p>

      <p className='text-sm'>*A pessoa que faz o pedido é chamada de <span className='font-semibold inline'>Reclamante</span>, ou seja, quem entra com a ação.</p>

      <button 
      onClick={onNext}
      className='md:self-start py-2 px-8 rounded-lg font-medium transition-all bg-teal-500 text-white hover:bg-teal-600 cursor-pointer'>
        Adicionar meus dados 
      </button>
    </div>
  )
}
