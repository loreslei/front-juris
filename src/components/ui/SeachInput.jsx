import { Search } from "lucide-react"
const SearchInput = () => {
  return (
    <div className="relative">
      
        <Search  size={18} className="absolute text-gray-400 top-2.5 left-2.5"/>

        <input
            className="rounded-lg w-48 border pl-9 text-slate-600 border-slate-200 bg-transparent py-2 pr-3 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-slate-300 focus:border-slate-300 disabled:cursor-not-allowed disabled:opacity-50"
            id="input"
            type="text"
            placeholder="Iniciar Busca"
          ></input> 
    </div>
  )
}

export default SearchInput
