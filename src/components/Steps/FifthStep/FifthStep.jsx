import SelectPicture from '@/components/ui/SelectFile';
import { Check } from 'lucide-react';
import React from 'react'

export default function FifthStep() {
    const passos = ['Conversas, e-mails, prints de tela', 'Notas fiscais, contratos, boletos', 'Fotos ou comprovantes']
  return (
    <div className='flex flex-col gap-5  text-justify'>
        <ul className="text-sm list-disc pl-10">
          <li>Você pode anexar até 5 arquivos</li>
          <li>Formatos aceitos: PDF, JPG, JPEG, PNG</li>
          <li>Tamanho máximo: 10 MB por arquivo</li>
          <li>Envie documentos que ajudem a provar o que aconteceu, como:
          </li>
        <ul className='pl-6'>
            {passos.map((list_item => {
                return <p className='flex items-center gap-2'><Check className='text-teal-600'size={18}/> <li>{list_item}</li> </p>
            }))}
            
            
        </ul>
        </ul>

        <SelectPicture />
      
    </div>
  )
}
