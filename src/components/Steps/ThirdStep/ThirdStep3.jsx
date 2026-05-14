import React from "react";
import Table from "@/components/ui/Table";
import { useProcessoContext } from "@/context/ProcessoContext";

export default function ThirdStep3({ onAddMore }) {
  const { formData, updateFormData } = useProcessoContext();

  const data = formData.reclamados || [];

  function handleDelete(index) {
    const confirmDelete = window.confirm("Tem certeza que deseja remover este reclamado?");
    if (confirmDelete) {
      const updatedReclamados = [...formData.reclamados];
      updatedReclamados.splice(index, 1);
      updateFormData('reclamados', updatedReclamados);
    }
  }

  return (
    <div className='flex flex-col w-full'>
      <Table data={data} onDelete={handleDelete} />
      <button
        onClick={onAddMore}
        className="cursor-pointer flex self-center md:self-end items-center transition-all duration-300 text-white rounded-lg bg-blue-500 hover:bg-blue-600 px-8 md:px-4 py-2 gap-2 mt-4"
      >
        Adicionar Reclamado
      </button>
    </div>
  )
}
