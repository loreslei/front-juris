import Radio from "@/components/ui/Radio";
import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import { Save, TriangleAlert } from "lucide-react";
import React from "react";
import SelectPicture from "@/components/ui/SelectPicture";

export default function SecondStep2() {
  const header = "p-2.5 bg-teal-500 text-white font-semibold w-full rounded-lg";
  const section = "flex m-auto w-full flex-col gap-5";

  return (
    <div className="flex m-auto w-full flex-col gap-10">
      <section className={section}>
        <div className={header}>Adicionar Reclamante</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          <Input input_text="nome completo" />
          <Input input_text="CPF/CNPJ" />
        </div>
      </section>

      <section className={section}>
        <div className={header}>Endereço do(a) Reclamante</div>
        <p className="text-sm">
          O endereço é requisito do sistema PJE para o cadastro do processo. Se
          atente para que o endereço indicado esteja correto, porque os dados
          informados, mesmo na atermação presencial, são de responsabilidade de
          quem quer entrar com o processo.
        </p>
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">
          <Input input_text="CEP" />
          <Input input_text="logradouro" label_text="Rua/Avenida/Travessa" />
          <Input input_text="número (casa ou apartamento)" />
          <Input
            input_text="complemento do endereço (opcional)"
            label_text="complemento do endereço"
            optional={true}
          />
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-5 gap-5 w-full">
          <Input className="md:col-span-2" input_text="bairro" />
          <Dropdown className="md:col-span-2" dropdown_text="um município" />
          <Dropdown
            className="md:col-span-2 xl:col-span-1"
            dropdown_text="um estado"
          />
        </div>
      </section>

      <section className={section}>
        <div className={header}>Informações Adicionais</div>
        <div className="flex gap-2 items-center">
          <TriangleAlert className="ml-1 inline text-yellow-600" size={18} />
          <p className="inline text-sm">
            Vamos nos comunicar com você por Whatsapp! Tenha atenção às
            mensagens. O TJCE pode enviar intimações por WhatsApp ou ligar pra
            você, se necessário
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
          <Input
            input_text="telefone"
            label_text="Número de telefone para contato"
          />
          <Input input_text="e-mail" />
        </div>
        <p className="font-semibold text-sm">
          * Você tem algum direito de prioridade para que seu pedido seja
          analisado mais rápido?
        </p>
        <p className="text-xs">
          (Ex.: pessoas com mais de 60 anos, doenças graves, pessoas com
          deficiência)
        </p>
        <Radio />
      </section>

      <section className={section}>
        <div className={header}>Documentos Pessoais</div>

        <ul className="text-sm list-disc pl-10">
          <li>O documento deve ter foto e CPF visíveis</li>
          <li>Anexe até 2 arquivos</li>
          <li>Formatos aceitos: PDF, JPG, JPEG, PNG</li>
          <li>Tamanho máximo: 10 MB por arquivo</li>
        </ul>

        <SelectPicture />
      </section>

      <section className={section}>
        <div className={header}>Comprovante de Endereço</div>

        <ul className="text-sm list-disc pl-10">
          <li>É importante que o comprovante esteja no seu nome, e seja recente (até 3 meses)</li>
          <li>Anexe até 2 arquivos</li>
          <li>Formatos aceitos: PDF, JPG, JPEG, PNG</li>
          <li>Tamanho máximo: 10 MB por arquivo</li>
        </ul>

        <SelectPicture />
      </section>

      <button className="cursor-pointer flex self-center md:self-end items-center transition-all 1s text-white rounded-lg bg-blue-500 hover:bg-blue-600 px-8 md:px-4 py-2 gap-2">
        <Save className="inline" size={18} />
        Salvar
      </button>
    </div>
  );
}
