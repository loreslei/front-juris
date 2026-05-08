import { ChevronDown } from "lucide-react";
import React, { useState } from "react";

export default function Dropdown({
  className,
  dropdown_text,
  label_text,
  options = [],
  value,
  onChange,
  error,
}) {
  const [isOpen, setIsOpen] = useState(false);

  function selectOption(option) {
    onChange(option);
    setIsOpen(false);
  }

  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <label className="capitalize text-sm font-semibold">
        {label_text ? `* ${label_text}` : `* ${dropdown_text.slice(3)}`}
      </label>

      <div
        onClick={() => {
          if (dropdown_text.includes("município") && options.length === 0) {
            return;
          }

          setIsOpen(!isOpen);
        }}
        className="flex justify-between items-center border text-slate-600 border-slate-200 text-sm shadow-sm rounded-lg p-2 bg-white cursor-pointer"
      >
        <p className="truncate">
          {value
            ? value
            : options.length === 0 && dropdown_text.includes("município")
              ? "Selecione primeiro um estado"
              : `Selecione ${dropdown_text}`}
        </p>

        <div
          className={`transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <ChevronDown size={18} />
        </div>
      </div>

      {isOpen && (
        <div className="rounded-lg border border-slate-200 text-sm text-slate-600 bg-white p-2 shadow-sm max-h-60 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => selectOption(option)}
              className="hover:bg-slate-200 p-2 rounded-md cursor-pointer"
            >
              {option}
            </div>
          ))}
        </div>
      )}

      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
}
