
import React from "react";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <div className="h-screen w-full flex bg-zinc-900 justify-center items-center">
      <div className="relative px-5 w-full h-screen flex flex-col gap-y-30 items-center justify-center overflow-hidden">
      
      <img
        src="/imagem-fundo.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover blur-xs brightness-40"
        />

      {/* conteúdo */}

      <div>

      </div>
      <div className="absolute top-15 md:top-5 md:left-5 bg-white shadow-lg rounded-xl py-2.5 px-5">
        <img  className="w-40" src="/image.png" alt="" />
      </div>
      <h1 className="relative z-10 text-3xl md:text-6xl flex flex-col gap-y-4.5 text-center font-semibold text-white">
        
        <span>Agendar Audiência</span>
        <span>Pré-Processual On-line</span>
        
      </h1>

      <Link
        className="relative transition-all ease-in 1s lg:hover:-translate-y-1 text-slate-900 text-lg md:text-2xl font-semibold px-8 py-3.5 bg-white rounded-xl z-10"
        to={"/processual/new"}
      >
        Agendar
      </Link>
    </div>
    </div>
    
  );
}
