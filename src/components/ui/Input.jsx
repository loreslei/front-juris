
const Input = (props) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="capitalize text-sm font-semibold">{props.label_text?  `* ${props.label_text}` : `* ${props.input_text}`}</label>
        <input
            className="rounded-lg border text-slate-600 border-slate-200 bg-white px-4 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-slate-300 focus:border-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
            id="input"
            type="text"
            placeholder={`Informe o ${props.input_text}`}
          ></input> 
    </div>
  )
}

export default Input
