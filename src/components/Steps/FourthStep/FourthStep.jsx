import Checkbox from '@/components/ui/Checkbox';
import InputArea from '@/components/ui/InputArea';
import React from 'react'

export default function FourthStep() {
  return (
    <div className='flex flex-col gap-5'>
      
      <InputArea input_text={'o motivo (máximo 30.000 caracteres)'} label_text={'Conte o que aconteceu (motivo para entrar com a ação)'} />
      <InputArea input_text={'o resumo (máximo 30.000 caracteres)'} label_text={'Faça o resumo do seu pedido contra a pessoa ou empresa reclamada. O que quer da pessoa reclamada?'} />
      <InputArea input_text={'o valor (máximo 30.000 caracteres)'} label_text={'Se seu pedido envolve dinheiro, informe o valor total: (ex.: danos morais, materiais, ressarcimento ou cobrança)'} />
      <p className='text-sm font-semibold'>Você tem algum pedido urgente? Se sim, marque uma ou mais opções</p>
      <Checkbox />
    </div>
  )
}
