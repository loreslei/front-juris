import Input from "./ui/Input"
import SearchInput from "./ui/SeachInput"

const Block = () => {
  return (
    <div className="px-3 py-5 w-1/2 shadow-sm rounded-lg space-y-5 bg-slate-100">

        <h1 className="text-2xl">Pré-Processual</h1>

        <SearchInput />

        <Input />
      
    </div>
  )
}

export default Block
