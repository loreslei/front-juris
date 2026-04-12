
const Input = () => {
  return (
    <div>
        <input
            className="rounded-lg border text-slate-600 border-slate-200 bg-transparent px-4 py-2 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-slate-300 focus:border-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
            id="input"
            type="text"
            placeholder="Digite o nome"
          ></input> 
    </div>
  )
}

export default Input
