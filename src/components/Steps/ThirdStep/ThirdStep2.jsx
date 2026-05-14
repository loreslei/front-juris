import React from "react";
import PersonForm from "@/components/forms/PersonForm";
import { useProcessoContext } from "@/context/ProcessoContext";

export default function ThirdStep2({ onSave }) {
  const { formData, updateFormData } = useProcessoContext();

  const handleSave = (data) => {
    const reclamado = {
      nome_completo: data.nome,
      cpf_cnpj: data.documento.replace(/\D/g, ""),
      email: data.email || "",
      prioridade: data.prioridade || "NENHUMA",
      descricao_prioridade: data.outraPrioridade || null,
      endereco: {
        cep: data.cep,
        logradouro: data.logradouro,
        numero_residencia: data.numero,
        complemento: data.complemento || "",
        bairro: data.bairro,
        municipio: data.cidade,
        estado: data.estado,
      },
      telefones: data.telefone ? [{ numero: data.telefone.replace(/\D/g, "") }] : [],
    };

    const updatedReclamados = [...formData.reclamados];
    updatedReclamados.push({ ...reclamado, temp_id: Date.now() });

    updateFormData('reclamados', updatedReclamados);

    if (onSave) {
      onSave();
    }
  };

  return (
    <PersonForm
      title="Reclamado(a)"
      showPriority={false}
      showUploads={false}
      telOptional={true}
      emailOptional={true}
      initialData={null}
      onSubmit={handleSave}
    />
  );
}
