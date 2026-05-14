import SelectPicture from '@/components/ui/SelectFile';
import { Check } from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { useProcessoContext } from '@/context/ProcessoContext';
import { fileToBase64 } from '@/utils/fileToBase64';

export default function FifthStep() {
    const passos = ['Conversas, e-mails, prints de tela', 'Notas fiscais, contratos, boletos', 'Fotos ou comprovantes'];
    const { formData, updateFormData } = useProcessoContext();
    const [documentFiles, setDocumentFiles] = useState(formData.rawAnexosExtras || []);

    useEffect(() => {
      const convertFiles = async () => {
        updateFormData('rawAnexosExtras', documentFiles);
        if (documentFiles.length > 0) {
          const base64Files = await Promise.all(
            documentFiles.map(async (file) => ({
              tipo: "EXTRA",
              arquivo: await fileToBase64(file),
            }))
          );
          updateFormData('anexos_extras', base64Files);
        } else {
          updateFormData('anexos_extras', []);
        }
      };

      convertFiles();
    }, [documentFiles]);

  return (
    <div className='flex flex-col gap-5  text-justify'>
        <ul className="text-sm list-disc pl-10">
          <li>Você pode anexar até 5 arquivos</li>
          <li>Formatos aceitos: PDF, JPG, JPEG, PNG</li>
          <li>Tamanho máximo: 10 MB por arquivo</li>
          <li>Envie documentos que ajudem a provar o que aconteceu, como:
          </li>
        <ul className='pl-6'>
            {passos.map((list_item, index) => {
                return <p key={index} className='flex items-center gap-2'><Check className='text-teal-600'size={18}/> <li>{list_item}</li> </p>
            })}
        </ul>
        </ul>

        <SelectPicture
          maxFiles={5}
          files={documentFiles}
          setFiles={setDocumentFiles}
        />
      
    </div>
  )
}
