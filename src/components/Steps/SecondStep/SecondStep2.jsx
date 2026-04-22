import Dropdown from '@/components/ui/Dropdown'
import Input from '@/components/ui/Input'
import React from 'react'

export default function SecondStep2() {
  const header = 'p-2.5 bg-teal-500 text-white font-semibold w-full rounded-lg'

  return (
    <div className='flex m-auto w-full flex-col gap-5'>
      <div className={header}>Adicionar Reclamante</div>
      <div className='flex flex-row w-full gap-5 justify-between'>
        <Input input_text='nome completo' />
        <Input input_text='CPF/CNPJ' />
      </div>
      <div className={header}>Endereço do(a) Reclamante</div>
      <p  className='text-sm'>O endereço é requisito do sistema PJE para o cadastro do processo. Se atente para que o endereço indicado esteja correto, porque os dados informados, mesmo na atermação presencial, são de responsabilidade de quem quer entrar com o processo.</p>
      <div className='flex flex-row w-full gap-5 justify-between'>
        <Input input_text='CEP' />
        <Input input_text='logradouro' label_text='Rua/Avenida/Travessa'/>
        <Input input_text='número (casa ou apartamento)' />
        <Input input_text='complemento do endereço (opcional)' label_text='complemento do endereço' />
      </div>
      <div className='flex flex-row w-full gap-5 justify-between'>
        <Input input_text='bairro' />
        <Dropdown dropdown_text='um município' />
        <Dropdown dropdown_text='um estado'/>
      </div>


    </div>
  )
}
