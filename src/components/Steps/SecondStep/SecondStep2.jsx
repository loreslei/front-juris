import React from "react";

import PersonForm from "@/components/ui/PersonForm";
import SecondStep2Copy from "./SecondStep2-copy";

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
    
        {/* <SecondStep2Copy /> */}
    </div>
    
  );
}