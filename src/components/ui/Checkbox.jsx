import React, { useState, useEffect } from "react";
import Input from "./Input";
import InputArea from "./InputArea";

export default function Checkbox({ onChange }) {
  const [selected, setSelected] = useState([]);
  const [outrosText, setOutrosText] = useState("");

  useEffect(() => {
    if (onChange) {
      onChange(selected, outrosText);
    }
  }, [selected, outrosText]);

  const handleChange = (value) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value) // remove
        : [...prev, value] // adiciona
    );
  };
  
  const checkbox = `
shrink-0
appearance-none
w-4 h-4
rounded
border border-teal-600
bg-transparent

checked:bg-teal-600
checked:border-teal-600

relative
checked:after:content-['✓']
checked:after:absolute
checked:after:text-white
checked:after:text-[10px]
checked:after:font-bold
checked:after:top-1/2
checked:after:left-1/2
checked:after:-translate-x-1/2
checked:after:-translate-y-1/2

focus:outline-none
focus-visible:ring-2
focus-visible:ring-teal-400
focus-visible:ring-offset-2

transition-all
cursor-pointer
`;

  const opcoes = [
    "Manter ou restabelecer serviço essencial",
    "Remover seu nome dos cadastros de crédito (SPC, SERASA)",
    "Suspender cobrança ou débito",
    "Outros",
  ];

  return (
    <div>
      {opcoes.map((opt_name, index) => {
        return (
          <div key={index} className="flex items-center mb-4">
            <input
              type="checkbox"
              name="opcoes"
              value={opt_name}
              checked={selected.includes(opt_name)}
              onChange={() => handleChange(opt_name)}
              className={checkbox}
            />
            <label className="select-none ms-2 text-sm">{opt_name}</label>
          </div>
        );
      })}

      {selected.includes("Outros") && (
        <InputArea
          label_text="Outros pedidos? Descreva"
          input_text="o(s) pedido(s)"
          className="mt-2"
          value={outrosText}
          onChange={(e) => setOutrosText(e.target.value)}
        />
      )}
    </div>
  );
}
