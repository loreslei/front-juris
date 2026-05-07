import FifthStep from "@/components/Steps/FifthStep/FifthStep";
import FirstStep from "@/components/Steps/FirstStep/FirstStep";
import FourthStep from "@/components/Steps/FourthStep/FourthStep";
import SecondStepManager from "@/components/Steps/SecondStep/SecondStepManager";
import SixthStep from "@/components/Steps/SixthStep/SixthStep";
import ThirdStepManager from "@/components/Steps/ThirdStep/ThirdStepManager";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

export default function Processual() {
  const [mobileStepView, setMobileStepView] = useState(1);
  const [passoAtual, setPassoAtual] = useState(1);

  const passos = [
    "Ação Sem Advogado",
    "Reclamante(s)",
    "Reclamado(s)",
    "Relato",
    "Anexos",
    "Declaração",
  ];

  const isLastStep = passoAtual === passos.length;
  const textoBotao = isLastStep ? "Concluir" : "Próximo";

  const avancarPasso = () => {
    if (passoAtual < passos.length) {
      const novoPasso = passoAtual + 1;

      setPassoAtual(novoPasso);
      setMobileStepView(novoPasso);
    }
  };

  const recuarPasso = () => {
    if (passoAtual > 1) {
      const novoPasso = passoAtual - 1;

      setPassoAtual(novoPasso);
      setMobileStepView(novoPasso);
    }
  };

  const renderStepContent = () => {
    switch (passoAtual) {
      case 1:
        return <FirstStep />;
      case 2:
        return <SecondStepManager />;
      case 3:
        return <ThirdStepManager />;
      case 4:
        return <FourthStep />;
      case 5:
        return <FifthStep />;
      case 6:
        return <SixthStep />;
    }
  };

  return (
    <div className="max-w-90/100 lg:max-w-5/6 mx-auto px-12 py-8 m-5 rounded-xl bg-slate-100 text-gray-700 font-sans">
      <p className="mb-8 text-sm">
        Preencha os dados abaixo e clique no botão Próximo ou Salvar. Os campos
        marcados com * são obrigatórios.
      </p>

      {/* MOBILE */}
      <div className="flex md:hidden items-center justify-center gap-4 mb-8">
        <button
          onClick={() => {
            if (mobileStepView > 1) {
              setMobileStepView(mobileStepView - 1);
            }
          }}
          className="cursor-pointer"
        >
          <ChevronLeft
            className={`size-6 transition-all ${
              mobileStepView === 1 ? "text-gray-300" : "text-teal-500"
            }`}
          />
        </button>

        <div className="flex flex-col items-center min-w-45">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold border-4 transition-all
      ${
        passoAtual === mobileStepView
          ? "border-teal-500 bg-teal-500 text-white opacity-100"
          : passoAtual > mobileStepView
            ? "border-teal-500 bg-teal-500 text-white opacity-50"
            : "border-gray-200 bg-white text-gray-400 opacity-100"
      }`}
          >
            {mobileStepView}
          </div>

          <span
            className={`mt-2 text-sm text-center transition-all
      ${
        passoAtual === mobileStepView
          ? "text-teal-600 font-semibold opacity-100"
          : passoAtual > mobileStepView
            ? "text-teal-500 opacity-50"
            : "text-gray-400 opacity-100"
      }`}
          >
            {passos[mobileStepView - 1]}
          </span>
        </div>

        <button
          onClick={() => {
            if (mobileStepView < passos.length) {
              setMobileStepView(mobileStepView + 1);
            }
          }}
          className="cursor-pointer"
        >
          <ChevronRight
            className={`size-6 transition-all ${
              mobileStepView === passos.length
                ? "text-gray-300"
                : "text-teal-500"
            }`}
          />
        </button>
      </div>

      {/* TABLET/DESKTOP */}
      <div className="hidden md:flex items-start mb-8 relative w-full">
        {/* Linha cinza */}
        <div className="absolute top-6 left-6 right-6 h-0.75 bg-gray-200"></div>

        {/* Linha teal */}
        <div
          className="absolute top-6 left-6 h-0.75 bg-teal-500 transition-all duration-300"
          style={{
             width:
    typeof window !== "undefined" && window.innerWidth >= 1280
      ? `calc(
          (100% - 48px) * ${
            (passoAtual - 1) / (passos.length - 1)
          }
          ${
            passoAtual === 2
              ? "+ 1.5vw"
              : passoAtual === 5
              ? "- 1.5vw"
              : "+ 0vw"
          }
        )`
      : `calc(
          (100% - 48px) * ${
            (passoAtual - 1) / (passos.length - 1)
          }
        )`,
          }}
        />

        {passos.map((nomePasso, index) => {
          const numeroPasso = index + 1;

          const ativo = passoAtual === numeroPasso;
          const concluido = passoAtual > numeroPasso;

          return (
            <div
              key={index}
              className="flex-1 flex flex-col items-center relative z-10"
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold border-4 transition-all shrink-0
          ${
            ativo
              ? "border-teal-500 bg-teal-500 text-white opacity-100"
              : concluido
                ? "border-teal-300 bg-teal-300 text-white/70"
                : "border-gray-200 bg-white text-gray-400 opacity-100"
          }`}
              >
                {numeroPasso}
              </div>

              <span
                className={`mt-3 text-sm text-center transition-all w-full max-w-[120px] min-h-[40px] flex items-start justify-center
          ${
            ativo
              ? "text-teal-600 font-semibold opacity-100"
              : concluido
                ? "text-teal-500 opacity-50"
                : "text-gray-400 opacity-100"
          }`}
              >
                {nomePasso}
              </span>
            </div>
          );
        })}
      </div>

      {/* Container do Conteúdo Dinâmico */}
      <div className="bg-gray-50 w-[120%] -ml-[10%] md:ml-0 md:w-full border border-gray-100 rounded-lg shadow-sm">
        {/* Cabeçalho da Seção */}
        <div className="bg-teal-500 text-white p-3 font-semibold rounded-t-lg">
          {passos[passoAtual - 1]}
        </div>

        {/* Corpo da Seção */}
        <div className="w-full md:max-w-7xl p-8">{renderStepContent()}</div>
      </div>

      {/* Rodapé com Botões */}
      <div className="flex justify-between mt-6">
        <button
          onClick={recuarPasso}
          disabled={passoAtual === 1}
          className={`py-2 px-8 rounded font-medium transition-all
            ${
              passoAtual === 1
                ? "bg-teal-500/40 text-white/60 cursor-not-allowed opacity-50"
                : "bg-teal-500 text-white hover:bg-teal-600 cursor-pointer"
            }`}
        >
          Voltar
        </button>

        <button
          onClick={avancarPasso}
          disabled={passoAtual === passos.length}
          className={`py-2 px-8 rounded font-medium transition-all
            ${
              passoAtual === passos.length
                ? "bg-teal-500/40 text-white/60 cursor-not-allowed opacity-50"
                : "bg-teal-500 text-white hover:bg-teal-600 cursor-pointer"
            }`}
        >
          {textoBotao}
        </button>
      </div>
    </div>
  );
}
