import { Trash2 } from "lucide-react";
import React from "react";

export default function Table() {
    const header_titles = ['Nome Completo', 'CPF/CNPJ', 'Telefone', 'E-mail', 'Ações']
    const actual_text = ['Company A', '$50.25', '100', '$5025.00']
  return (
      
    <div class="flex items-center justify-center">
    <div class="overflow-x-auto w-full">
        <table class="w-full bg-white shadow-md rounded-xl">
        <thead>
            <tr class="border-b border-gray-200 bg-blue-gray-100 capitalize text-gray-700">

            {header_titles.map((title) =>{
                return <th class="py-3 px-4 text-center text-sm">{title}</th>
            })}
            
            </tr>
        </thead>
        <tbody class="text-blue-gray-900">
            <tr class="border-b border-gray-200">
                {actual_text.map((name)=>{
                    return <td class="py-3 px-4 text-center">{name}</td>
                })}
                <td class="py-3 px-4 flex justify-center">  
                    <a href="#" class="font-medium transition-all 1s text-rose-600 hover:text-rose-800"><Trash2 size={20} /></a>
                </td>
            </tr>
           
        </tbody>
        </table>
        <div class="w-full pt-5 px-4 mb-8 mx-auto ">
      
        </div>
    </div>
    </div>
    
  );
}
