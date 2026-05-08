import React from "react";

import {
  cepMask,
  cpfCnpjMask,
  phoneMask,
  numberMask,
} from "@/utils/masks";

const Input = ({
  error,
  label_text,
  optional,
  input_text,
  className,

  value,
  onChange,
  name,

  mask,
}) => {
  function handleInputChange(e) {
    let value = e.target.value;

    // =========================
    // MÁSCARAS
    // =========================

    if (mask === "cep") {
      value = cepMask(value);
    }

    if (mask === "cpfCnpj") {
      value = cpfCnpjMask(value);
    }

    if (mask === "phone") {
      value = phoneMask(value);
    }

    if (mask === "number") {
      value = numberMask(value);
    }

    onChange({
      target: {
        name,
        value,
      },
    });
  }

  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>
      <label className="capitalize text-sm font-semibold">
        <span>{optional ? "" : "* "}</span>

        {label_text ? label_text : input_text}
      </label>

      <input
        name={name}
        required={optional? false: true}
        value={value}
        onChange={handleInputChange}
        className="rounded-lg border text-slate-600 border-slate-200 bg-white px-4 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-slate-300 focus:border-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder={`Informe o ${input_text}`}
        inputMode={
          mask === "number" ||
          mask === "phone" ||
          mask === "cep" ||
          mask === "cpfCnpj"
            ? "numeric"
            : "text"
        }
      />

      {
  error && (
    <p className="text-red-500 text-xs">
      {error}
    </p>
  )
}
    </div>
  );
};

export default Input;