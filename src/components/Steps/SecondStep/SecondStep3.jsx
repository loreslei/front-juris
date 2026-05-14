import React from "react";
import Table from "@/components/ui/Table";
import { useProcessoContext } from "@/context/ProcessoContext";

export default function SecondStep3({ onAddMore }) {
  const { formData, updateFormData } = useProcessoContext();

  const data = formData.reclamantes || [];

  function handleDelete(index) {
    const confirmDelete = window.confirm("Tem certeza que deseja remover este reclamante?");
    if (confirmDelete) {
      const updatedReclamantes = [...formData.reclamantes];
      updatedReclamantes.splice(index, 1);
      updateFormData('reclamantes', updatedReclamantes);
    }
  }

  return (
    <div className="flex flex-col w-full">
      <Table data={data} onDelete={handleDelete} />

      <button
        onClick={onAddMore}
        className="cursor-pointer flex self-center md:self-end items-center transition-all duration-300 text-white rounded-lg bg-blue-500 hover:bg-blue-600 px-8 md:px-4 py-2 gap-2 mt-4"
      >
        Adicionar Mais Reclamantes
      </button>
    </div>
  );
}