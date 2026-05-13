import React from "react";

import PersonForm from "@/components/forms/PersonForm";

export default function SecondStep2({
  onSave,
}) {
  return (
    <div>

        <PersonForm
          title="Reclamante"
          showPriority={true}
          showUploads={true}
          onSubmit={onSave}
        />
    
    </div>
    
  );
}