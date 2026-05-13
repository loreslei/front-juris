import { ChevronLeft, ChevronRight, Trash2 } from "lucide-react";
import React, { useState } from "react";

const ROWS_PER_PAGE = 4;

export default function Table({ lista_nome, lista_cpfCnpj, lista_telefone, lista_email }) {
  const [currentPage, setCurrentPage] = useState(1);

  const header_titles = ["Nome Completo", "CPF/CNPJ", "Telefone", "E-mail", "Ações"];

  const rows = lista_cpfCnpj.map((_, i) => ({
    nome: lista_nome?.[i] ?? "-",
    cpfCnpj: lista_cpfCnpj?.[i] ?? "-",
    telefone: lista_telefone?.[i] ?? "-",
    email: lista_email?.[i] ?? "-",
  }));

  const totalPages = Math.ceil(rows.length / ROWS_PER_PAGE);
  const paginate = rows.length >= ROWS_PER_PAGE;

  const visibleRows = paginate
    ? rows.slice((currentPage - 1) * ROWS_PER_PAGE, currentPage * ROWS_PER_PAGE)
    : rows;

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <div className="overflow-x-auto w-full pt-5 px-4 mb-8 mx-auto">
        <table className="w-full bg-white shadow-md rounded-xl">
          <thead>
            <tr className="border-b border-gray-200 bg-blue-gray-100 capitalize text-gray-700">
              {header_titles.map((title) => (
                <th key={title} className="py-3 px-4 text-center text-sm">{title}</th>
              ))}
            </tr>
          </thead>
          <tbody className="text-blue-gray-900">
            {visibleRows.map((row, i) => (
              <tr key={i} className="border-b border-gray-200">
                <td className="py-3 px-4 text-center">{row.nome}</td>
                <td className="py-3 px-4 text-center">{row.cpfCnpj}</td>
                <td className="py-3 px-4 text-center">{row.telefone}</td>
                <td className="py-3 px-4 text-center">{row.email}</td>
                <td className="py-3 px-4 text-center align-middle">
                  <button className="cursor-pointer font-medium transition-all text-rose-600 hover:text-rose-800">
                    <Trash2 size={20} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

       {/* Paginação — só aparece se linhas >= 5 */}
        {paginate && (
          <div className="flex justify-center items-center gap-2 mt-4">
            <button
              onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
              disabled={currentPage === 1}
              className="cursor-pointer text-slate-900 px-3 py-1 disabled:opacity-40 hover:text-teal-600 transition-all"
            >
              <ChevronLeft size={18} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`cursor-pointer px-3 py-1 text-slate-900 rounded-md text-sm border transition-all ${
                  currentPage === page
                    ? "bg-teal-600 text-white border-teal-600"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
              disabled={currentPage === totalPages}
              className="cursor-pointer text-slate-900 px-3 py-1 disabled:opacity-40 hover:text-teal-600 transition-all"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
    </div>
  );
}