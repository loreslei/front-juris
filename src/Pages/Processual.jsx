import FifthStep from "@/components/Steps/FifthStep/FifthStep";
import FirstStep from "@/components/Steps/FirstStep/FirstStep";
import FourthStep from "@/components/Steps/FourthStep/FourthStep";
import SecondStepManager from "@/components/Steps/SecondStep/SecondStepManager";
import SixthStep from "@/components/Steps/SixthStep/SixthStep";
import ThirdStepManager from "@/components/Steps/ThirdStep/ThirdStepManager";
import { ChevronLeft, ChevronRight, DownloadCloud, SquarePen } from "lucide-react";
import React, { useState } from "react";
import { ProcessoProvider, useProcessoContext } from "@/context/ProcessoContext";

function ProcessualContent() {
  const [mobileStepView, setMobileStepView] = useState(1);
  const [passoAtual, setPassoAtual] = useState(1);
  const { formData } = useProcessoContext();
  const [loading, setLoading] = useState(false);

  const passos = [
    "Ação Sem Advogado",
    "Reclamante(s)",
    "Reclamado(s)",
    "Relato",
    "Anexos",
    "Declaração",
  ];

  const isLastStep = passoAtual === passos.length;

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

  const handleConcluir = async () => {
    if (!formData.aceitou_termos) {
      alert("Você precisa concordar com os termos antes de concluir.");
      return;
    }

    setLoading(true);

    try {
      const payload = { ...formData };
      
      const extras = payload.anexos_extras || [];
      delete payload.anexos_extras; 
      
      if (payload.reclamantes && payload.reclamantes.length > 0) {
        if (!payload.reclamantes[0].documentos) {
            payload.reclamantes[0].documentos = [];
        }
        payload.reclamantes[0].documentos = [
            ...payload.reclamantes[0].documentos,
            ...extras
        ];
      }

      // Tratar valor_causa vazio para evitar erro 400 no DecimalField
      if (!payload.valor_causa || payload.valor_causa.trim() === "") {
        payload.valor_causa = null;
      } else {
        // Remover R$, espaços e trocar vírgula por ponto se necessário
        let val = payload.valor_causa.toString().replace(/[R$\s]/g, "").replace(",", ".");
        payload.valor_causa = val;
      }

      const response = await fetch("http://localhost:8000/api/pre_processual/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("ERRO DA API:", errorData);
        alert(`Erro de validação: ${JSON.stringify(errorData)}`);
        throw new Error("Erro ao enviar o formulário.");
      }

      const result = await response.json();
      console.log(result);
      alert("Processo enviado com sucesso!");
    } catch (error) {
      console.error(error);
      if (error.message !== "Erro ao enviar o formulário.") {
        alert("Erro ao enviar processo.");
      }
    } finally {
      setLoading(false);
    }
  };

  const renderStepContent = () => {
    switch (passoAtual) {
      case 1:
        return <FirstStep onNext={avancarPasso} />;
      case 2:
        return <SecondStepManager onNext={avancarPasso} />;
      case 3:
        return <ThirdStepManager onNext={avancarPasso} />;
      case 4:
        return <FourthStep />;
      case 5:
        return <FifthStep />;
      case 6:
        return <SixthStep />;
    }
  };

  return (
    <div className="max-w-90/100 mb-10 text-slate-900 flex flex-col items-center justify-center md:my-0 md:h-screen lg:my-10 lg:h-auto lg:max-w-5/6 mx-auto">
      <div className="self-start my-2.5 w-50 rounded-xl py-2.5 px-5">
        <img className="w-40" src="/image.png" alt="" />
      </div>
      <div className="flex gap-2 w-full p-4 border-2 border-slate-200 rounded-t-xl">
        <SquarePen />
        <p>Pré-Processual</p>
      </div>  
      <div className="w-full px-12 py-8 rounded-xl rounded-t-none bg-white border-x-2 border-b-2 border-slate-200 text-gray-700 font-sans">
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
                ? "+ 2vw"
                : passoAtual === 5
                ? "- 2vw"
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
                  className={`mt-3 text-sm text-center transition-all w-full max-w-30 min-h-10 flex items-start justify-center
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
        <div className="flex justify-center flex-col items-center bg-gray-50 w-[120%] -ml-[10%] md:ml-0 md:w-full rounded-lg shadow-sm">
          {/* Cabeçalho da Seção */}
          <div className="bg-teal-500 w-full text-white p-3 font-semibold rounded-t-lg">
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
            className={`py-2 px-8 rounded-lg font-medium transition-all
              ${
                passoAtual === 1
                  ? "bg-teal-500/40 text-white/60 cursor-not-allowed opacity-50"
                  : "bg-teal-500 text-white hover:bg-teal-600 cursor-pointer"
              }`}
          >
            Voltar
          </button>

          {!isLastStep ? (
            <button
              onClick={avancarPasso}
              className={`py-2 px-8 rounded-lg font-medium transition-all bg-teal-500 text-white hover:bg-teal-600 cursor-pointer`}
            >
              Próximo
            </button>
          ) : (
            <button
              onClick={handleConcluir}
              disabled={!formData.aceitou_termos || loading}
              className={`py-2 px-8 rounded-lg font-medium transition-all
                ${
                  !formData.aceitou_termos || loading
                    ? "bg-teal-500/40 text-white/60 cursor-not-allowed opacity-50"
                    : "bg-teal-500 text-white hover:bg-teal-600 cursor-pointer"
                }`}
            >
              {loading ? "Enviando..." : "Concluir"}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Processual() {
  return (
    <ProcessoProvider>
      <ProcessualContent />
    </ProcessoProvider>
  );
}
