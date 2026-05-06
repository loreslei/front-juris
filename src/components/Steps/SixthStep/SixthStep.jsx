import Radio from "@/components/ui/Radio";
import React from "react";

export default function SixthStep() {

  
  return (
    <div className="flex flex-col gap-8 text-justify">
      <section className="flex flex-col gap-5">
        <p className="font-semibold">Confirmação das informações</p>

        <ul className="text-sm list-disc pl-10">
          <li>
            Declaro que as informações e os documentos que enviei neste pedido
            são verdadeiros e de minha responsabilidade.
          </li>
          <li>
            Estou ciente de que, se faltar à audiência sem justificar, posso
            perder a causa ou ter que pagar os custos do processo.
          </li>
          <li>
            Também entendo que o TJCE pode usar os meios de contato informados
            aqui (telefone, e-mail ou WhatsApp) para se comunicar comigo sobre
            este pedido.
          </li>
        </ul>
      </section>

      <section className="flex flex-col gap-5">
        <p className="font-semibold">Declaração de Ciência e Consentimento</p>
        <p className="text-sm">
          Os atendimentos deste canal são registrados e tratados com
          confidencialidade, em conformidade com a Lei Geral de Proteção de
          Dados (LGPD). Nossa política de privacidade está disponível para
          consulta através do link abaixo:
          https://vercel.juris.com.br/politica-de-privacidade/ 
        </p>
        <p className="text-sm">Ao clicar no
          botão abaixo, você declara estar ciente e de acordo com os termos
          apresentados acima.</p>

        <Radio final />
          
      </section>
    </div>
  );
}
