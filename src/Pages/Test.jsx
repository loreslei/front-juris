import SecondStep3 from "@/components/Steps/SecondStep/SecondStep3";
import ThirdStep3 from "@/components/Steps/ThirdStep/ThirdStep3";

import React from "react";

export default function Test() {

  function handleAddMore() {
    console.log("Adicionar");
  }

  return (
    <div className="flex flex-col gap-10">

      <ThirdStep3 />

      <SecondStep3
        onAddMore={handleAddMore}
      />

    </div>
  );
}