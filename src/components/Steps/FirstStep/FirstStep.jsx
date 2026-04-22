import React from "react";
import SearchInput from "../../ui/SeachInput";
import Input from "../../ui/Input";
import Dropdown from "../../ui/Dropdown";

const FirstStep = () => {
  return (
    <div className="space-y-6 text-sm">
      <h2 className="text-lg font-bold text-gray-800">
        Antes de começar, leia com atenção
      </h2>

      <div>
        <p>
          Para dar entrada no seu pedido, você vai precisar{" "}
          <strong>enviar</strong>:
        </p>
        <ul className="list-disc pl-6 mt-2 space-y-1">
          <li>Documento oficial com foto (como RG ou CNH)</li>
          <li>CPF</li>
          <li>Comprovante de endereço atualizado, no seu nome</li>
          <li>Outros documentos que ajudem a provar o que aconteceu</li>
        </ul>
      </div>

      <div>
        <p>
          <strong>Formatos aceitos:</strong> PDF, JPG, JPEG ou PNG
        </p>
        <p>
          <strong>Tamanho máximo:</strong> 10 MB por arquivo.
        </p>
      </div>

      <div className="space-y-1">
        <p>
          Depois de enviar, nossa equipe vai analisar as informações e entrar em
          contato.
        </p>
        <p>
          <strong>Preencha</strong> todos os campos marcados com * (são
          obrigatórios).
        </p>
        <p>
          Depois, <strong>clique em "Próximo"</strong> para seguir.
        </p>
        <p>
          <strong>Quanto mais completas forem as suas informações</strong>, mais
          rápido e preciso será o atendimento.
        </p>
        <p>Se faltar algum dado importante, entraremos em contato.</p>
        <p>O pedido só segue se todos os dados forem confirmados.</p>
      </div>

      <p>
        Quer saber qual é o <strong>Juizado Especial mais próximo?</strong>{" "}
        <a
          href="https://sbje.tjce.jus.br/sbje-web/pages/localiza_juizado.jsf"
          className="text-blue-500 hover:underline"
        >
          Clique aqui.
        </a>
      </p>

      {/* Input de Seleção da Unidade */}
      <div className="mt-8">
        <Dropdown dropdown_text='uma Unidade Judicial'/>
      </div>
    </div>
  );
};

export default FirstStep;
