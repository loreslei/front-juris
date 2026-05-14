import React, { createContext, useState, useContext } from 'react';

const ProcessoContext = createContext();

export function ProcessoProvider({ children }) {
  const [formData, setFormData] = useState({
    unidade_judicial: "Juizado Especial Cível de Fortaleza", // Default
    reclamantes: [],
    reclamados: [],
    motivo_acao: "",
    resumo_pedido: "",
    valor_causa: "",
    urgente: false,
    anexos_extras: [], // Will be merged into reclamantes[0].documentos com tipo EXTRA
    rawAnexosExtras: [], // Stores native File objects
    aceitou_termos: false,
  });

  const updateFormData = (key, value) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <ProcessoContext.Provider value={{ formData, updateFormData, setFormData }}>
      {children}
    </ProcessoContext.Provider>
  );
}

export function useProcessoContext() {
  return useContext(ProcessoContext);
}
