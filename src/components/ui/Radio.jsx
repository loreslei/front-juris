import React, { useState } from "react";
import Input from "./Input";

export default function Radio() {
  const [selected, setSelected] = useState("");
  const radio = `
                shrink-0
                appearance-none
                w-4 h-4
                border border-teal-600
                rounded-full
                bg-transparent

                relative
                checked:after:content-['']
                checked:after:absolute
                checked:after:w-2
                checked:after:h-2
                checked:after:bg-teal-600
                checked:after:rounded-full
                checked:after:top-1/2
                checked:after:left-1/2
                checked:after:-translate-x-1/2
                checked:after:-translate-y-1/2

                focus:outline-none
                focus-visible:ring-2
                focus-visible:ring-teal-400
                focus-visible:ring-offset-2

                transition-all
                `;
                
  const opcoes = [
    "Não",
    "Idoso (mais de 60 anos) - art. 71 do Estatuto do Idoso",
    "Idoso (mais de 80 anos)",
    "Portador de Necessidades Especiais",
    "Outros",
  ];

  return (
    <div>
      {opcoes.map((opt_name) => {
        return (
          <div class="flex items-center mb-4">
            <input
              type="radio"
              name="prioridade"
              value={opt_name}
              checked={selected === opt_name}
              onChange={(e) => setSelected(e.target.value)}
              className={radio}
            />
            <label class="select-none ms-2 text-sm">{opt_name}</label>
          </div>
        );
      })}

      {selected === "Outros" && (
        <Input label_text="Outra prioridade legal" input_text="direito de prioridade" className="mt-2" />
      )}
    </div>
  );
}
