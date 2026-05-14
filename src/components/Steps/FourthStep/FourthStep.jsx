import Checkbox from '@/components/ui/Checkbox';
import InputArea from '@/components/ui/InputArea';
import React from 'react'
import { useProcessoContext } from '@/context/ProcessoContext';

export default function FourthStep() {
  const { formData, updateFormData } = useProcessoContext();

  return (
    <div className='flex flex-col gap-5  text-justify'>
      
      <InputArea 
        input_text={'o motivo (máximo 30.000 caracteres)'} 
        label_text={'Conte o que aconteceu (motivo para entrar com a ação)'} 
        value={formData.motivo_acao}
        onChange={(e) => updateFormData('motivo_acao', e.target.value)}
      />
      <InputArea 
        input_text={'o resumo (máximo 30.000 caracteres)'} 
        label_text={'Faça o resumo do seu pedido contra a pessoa ou empresa reclamada. O que quer da pessoa reclamada?'} 
        value={formData.resumo_pedido}
        onChange={(e) => updateFormData('resumo_pedido', e.target.value)}
      />
      <InputArea 
        input_text={'o valor (máximo 30.000 caracteres)'} 
        label_text={'Se seu pedido envolve dinheiro, informe o valor total: (ex.: danos morais, materiais, ressarcimento ou cobrança)'} 
        value={formData.valor_causa}
        onChange={(e) => updateFormData('valor_causa', e.target.value)}
      />
      <p className='text-sm font-semibold'>Você tem algum pedido urgente? Se sim, marque uma ou mais opções</p>
      <Checkbox 
        onChange={(selected, outrosText) => {
          updateFormData('urgente', selected.length > 0);
          // If needed, we can append 'outrosText' or 'selected' options to 'resumo_pedido' 
          // or create a new field for it in the context.
        }}
      />
    </div>
  )
}
