
import React from "react";
import PersonForm from "@/components/forms/PersonForm";

export default function ThirdStep2({
  onSave,
}) {
  return (
    <PersonForm
      title="Reclamado(a)"
      showPriority={false}
      showUploads={false}
      onSubmit={onSave}
    />
  );
}
