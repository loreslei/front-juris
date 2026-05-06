import React from 'react'
const Input = ({label_text, optional, input_text, className}) => {
  return (
    <div className={`flex flex-col gap-2 w-full ${className}`}>

      <label className="capitalize text-sm font-semibold"><span>{optional? '' : '* '}</span>{label_text?  `${label_text}` : `${input_text}`}</label>
        <input
            className="rounded-lg border text-slate-600 border-slate-200 bg-white px-4 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-slate-300 focus:border-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
            id="input"
            type="text"
            placeholder={`Informe o ${input_text}`}
          ></input> 
    </div>
  )
}

export default Input
