"use client";
import React, { useRef, useState } from "react";
import { Upload, Trash2 } from "lucide-react";

export default function SelectPicture({ label, maxFiles = 2 }) {
  const inputRef = useRef(null);
  const [files, setFiles] = useState([]);

  function handleSelectFiles(e) {
    if (files.length >= maxFiles) return;

    const selectedFiles = Array.from(e.target.files);

    if (files.length + selectedFiles.length > maxFiles) {
      alert(`Você pode anexar no máximo ${maxFiles} arquivos`);
      return;
    }

    setFiles((prev) => [...prev, ...selectedFiles]);
  }

  function handleRemove(index) {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
  }

  return (
    <div className="flex flex-col gap-3 w-full">
      <p className="font-semibold">{label}</p>

      {/* Lista de arquivos */}
      {files.map((file, index) => (
        <div key={index} className="gap-3 flex flex-col lg:flex-row justify-between items-center">
          
          <span className="text-sm w-full break-all">{file.name}</span>

          <button
            onClick={() => handleRemove(index)}
            className="cursor-pointer font-semibold transition-all 1s bg-rose-600 hover:bg-rose-700 text-sm text-white px-3 py-2 rounded-lg flex items-center gap-1"
          >
            Excluir <Trash2 size={16} />
          </button>
        </div>
      ))}

      {/* Input escondido */}
      <input
        type="file"
        accept=".pdf,.jpg,.jpeg,.png"
        ref={inputRef}
        className="hidden"
        onChange={handleSelectFiles}
        disabled={files.length >= maxFiles}
      />

      {/* Ações */}
      <div className="flex flex-col lg:flex-row gap-7 items-center">
        {files.length < maxFiles && (
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="cursor-pointer font-semibold text-white transition-all 1s bg-indigo-500 hover:bg-indigo-600 px-4 text-sm py-2 rounded-lg flex items-center gap-2"
          >
            Escolher Arquivo <Upload size={16} />
          </button>
          
        )}

        {files.length === 0 && (
            <span className="text-sm text-gray-500">
              Nenhum arquivo escolhido ainda
            </span>
          )}
      </div>
    </div>
  );
}
