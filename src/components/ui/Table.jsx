"use client";

import React, {
  useState,
} from "react";

import {
  ChevronLeft,
  ChevronRight,
  Trash2,
} from "lucide-react";

const ROWS_PER_PAGE = 4;

export default function Table({
  data = [],
  onDelete,
}) {

  const [currentPage, setCurrentPage] =
    useState(1);

  // =========================
  // ROWS
  // =========================

  const rows = data.map(
    (pessoa, index) => ({
      id: pessoa.id || pessoa.temp_id || index,

      nome:
        pessoa.nome_completo || "-",

      cpfCnpj:
        pessoa.cpf_cnpj || "-",

      telefone:
        pessoa.telefones?.[0]?.numero || "-",

      email:
        pessoa.email || "-",

      originalIndex: index,
    })
  );

  // =========================
  // PAGINATION
  // =========================

  const totalPages = Math.ceil(
    rows.length / ROWS_PER_PAGE
  );

  const paginate =
    rows.length > ROWS_PER_PAGE;

  const visibleRows = paginate
    ? rows.slice(
        (currentPage - 1) *
          ROWS_PER_PAGE,

        currentPage *
          ROWS_PER_PAGE
      )
    : rows;

  return (
    <div className="flex flex-col items-center justify-center mb-8 w-full">

      <div className="overflow-x-auto w-full pt-5 px-4 mb-8 mx-auto">

        <table className="w-full bg-white shadow-md rounded-xl overflow-hidden">

          <thead>

            <tr className="border-b border-gray-200 bg-slate-100">

              <th className="py-3 px-4 text-center text-sm">
                Nome Completo
              </th>

              <th className="py-3 px-4 text-center text-sm">
                CPF/CNPJ
              </th>

              <th className="py-3 px-4 text-center text-sm">
                Telefone
              </th>

              <th className="py-3 px-4 text-center text-sm">
                E-mail
              </th>

              <th className="py-3 px-4 text-center text-sm">
                Ações
              </th>

            </tr>

          </thead>

          <tbody>

            {visibleRows.length > 0 ? (
              visibleRows.map((row) => (
                <tr
                  key={row.id}
                  className="border-b border-gray-200"
                >

                  <td className="py-3 px-4 text-center">
                    {row.nome}
                  </td>

                  <td className="py-3 px-4 text-center">
                    {row.cpfCnpj}
                  </td>

                  <td className="py-3 px-4 text-center">
                    {row.telefone}
                  </td>

                  <td className="py-3 px-4 text-center">
                    {row.email}
                  </td>

                  <td className="py-3 px-4 text-center flex items-center justify-center gap-3">
                    {onDelete && (
                      <button
                        onClick={() =>
                          onDelete(row.originalIndex)
                        }
                        className="cursor-pointer text-rose-600 hover:text-rose-800 transition-all"
                      >
                        <Trash2 size={20} />
                      </button>
                    )}

                  </td>

                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={5}
                  className="py-10 text-center text-gray-500"
                >
                  Nenhum processo encontrado
                </td>
              </tr>
            )}

          </tbody>

        </table>

      </div>

      {/* PAGINAÇÃO */}

      {paginate && (
        <div className="flex justify-center items-center gap-2 mt-4">

          <button
            onClick={() =>
              setCurrentPage((p) =>
                Math.max(p - 1, 1)
              )
            }
            disabled={currentPage === 1}
            className="cursor-pointer text-slate-900 px-3 py-1 disabled:opacity-40"
          >
            <ChevronLeft size={18} />
          </button>

          {Array.from(
            { length: totalPages },
            (_, i) => i + 1
          ).map((page) => (
            <button
              key={page}
              onClick={() =>
                setCurrentPage(page)
              }
              className={`cursor-pointer px-3 py-1 rounded-md text-sm border ${
                currentPage === page
                  ? "bg-teal-600 text-white border-teal-600"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((p) =>
                Math.min(
                  p + 1,
                  totalPages
                )
              )
            }
            disabled={
              currentPage === totalPages
            }
            className="cursor-pointer text-slate-900 px-3 py-1 disabled:opacity-40"
          >
            <ChevronRight size={18} />
          </button>

        </div>
      )}

    </div>
  );
}