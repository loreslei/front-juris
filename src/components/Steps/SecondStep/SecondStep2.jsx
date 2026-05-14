"use client";

import React from "react";

import PersonForm from "@/components/forms/PersonForm";

import { fileToBase64 } from "@/utils/fileToBase64";
import { useProcessoContext } from "@/context/ProcessoContext";

export default function SecondStep2({ onSave }) {
  const { formData, updateFormData } = useProcessoContext();

  async function handleSave(data) {

    // =========================
    // CONVERTE DOCUMENTOS OU USA OS ANTIGOS
    // =========================

    let documentosPessoais = [];
    if (data.documentos && data.documentos.length > 0) {
      documentosPessoais = await Promise.all(
        data.documentos.map(async (file) => ({
          tipo: "PESSOAL",
          arquivo: await fileToBase64(file),
        }))
      );
    } else if (data.oldDocumentos) {
      documentosPessoais = data.oldDocumentos.filter(d => d.tipo === "PESSOAL");
    }

    let comprovantes = [];
    if (data.comprovantes && data.comprovantes.length > 0) {
      comprovantes = await Promise.all(
        data.comprovantes.map(async (file) => ({
          tipo: "RESIDENCIA",
          arquivo: await fileToBase64(file),
        }))
      );
    } else if (data.oldDocumentos) {
      comprovantes = data.oldDocumentos.filter(d => d.tipo === "RESIDENCIA");
    }

    // =========================
    // PAYLOAD
    // =========================

    const reclamante = {
      nome_completo: data.nome,

      cpf_cnpj:
        data.documento.replace(
          /\D/g,
          ""
        ),

      email: data.email,

      prioridade:
        data.prioridade || "NENHUMA",

      descricao_prioridade:
        data.outraPrioridade || null,

      endereco: {
        cep: data.cep,

        logradouro:
          data.logradouro,

        numero_residencia:
          data.numero,

        complemento:
          data.complemento,

        bairro: data.bairro,

        municipio: data.cidade,

        estado: data.estado,
      },

      telefones: [
        {
          numero:
            data.telefone.replace(
              /\D/g,
              ""
            ),
        },
      ],

      documentos: [
        ...documentosPessoais,
        ...comprovantes,
      ],
    };

    const updatedReclamantes = [...formData.reclamantes];
    updatedReclamantes.push({ ...reclamante, temp_id: Date.now() });

    updateFormData('reclamantes', updatedReclamantes);
    
    if (onSave) {
      onSave();
    }
  }

  return (
    <div>

      <PersonForm
        title="Reclamante"
        showPriority={true}
        showUploads={true}
        initialData={null}
        onSubmit={handleSave}
      />

    </div>
  );
}