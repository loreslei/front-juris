import comarcas from '@/utils/data';
import { ChevronDown } from 'lucide-react'
import React, { useState } from 'react'

export default function Dropdown(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [isChanged, setIsChanged] = useState(`Selecione ${props.dropdown_text}`)

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  function changeName(place){
    setIsChanged(place)
  };

  return (

    
    <div className='flex flex-col gap-2 max-w-3xl'>

      <label className="capitalize text-sm font-semibold">{props.label_text?  `* ${props.label_text}` : `* ${props.dropdown_text.slice(3)}`}</label>
      
      <div 
        onClick={toggleDropdown} 
        className='flex justify-between items-center border text-slate-600 border-slate-200 text-sm shadow-sm rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-teal-500 bg-white cursor-pointer select-none'
      >
        <p className='truncate'>{isChanged}</p>
        <div className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
          <ChevronDown size={18} />
        </div>
      </div>

      {isOpen && (
        <div className='rounded-lg border border-slate-200 text-sm text-slate-600 bg-white p-2 shadow-sm animate-in fade-in zoom-in duration-150'>
        {comarcas.map((place)=>{
            return <div onClick={()=>{
                changeName(place.name);
                setIsOpen(false);
            }} className='hover:bg-slate-200 p-2 rounded-md cursor-pointer'>{place.name}</div>
        })}
        </div>
      )}
    </div>
  )
}