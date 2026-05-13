import React from "react";
import {
  ShieldCheck,
  Lock,
  FileText,
  Mail,
  Trash2,
  Database,
  Scale,
  User2,
  ClipboardCheck,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function PrivatePolicy() {
  return (
    <div className="min-h-screen bg-slate-100 py-10 px-4">
      <div className="max-w-7xl mx-auto bg-white rounded-3xl shadow-xl border border-slate-200 overflow-hidden">
        
        {/* HEADER */}
        <div className="bg-slate-900 text-white p-8 md:p-12">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-white/10 p-3 rounded-2xl">
              <ShieldCheck size={34} />
            </div>

            <div>
              <h1 className="text-3xl md:text-5xl font-bold">
                Política de Privacidade
              </h1>

              <p className="text-slate-300 mt-2 text-sm md:text-base">
                Plataforma JURIS
              </p>
            </div>
          </div>

          <p className="text-slate-300 leading-relaxed max-w-3xl">
            Esta Política de Privacidade explica como os dados pessoais são
            coletados, utilizados, armazenados e protegidos pela plataforma
            JURIS durante o processo de solicitação de audiência
            pré-processual.
          </p>
        </div>

        {/* CONTENT */}
        <div className="p-6 md:p-10 space-y-10 text-slate-700">

          {/* INTRO */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <ClipboardCheck className="text-slate-900" />
              <h2 className="text-2xl font-bold text-slate-900">
                1. Sobre a Plataforma
              </h2>
            </div>

            <p className="leading-relaxed">
              A plataforma JURIS foi desenvolvida com o objetivo de facilitar o
              envio de solicitações pré-processuais de forma digital,
              responsiva e acessível, permitindo que o cidadão encaminhe
              informações e documentos diretamente para a unidade judicial
              responsável.
            </p>

            <p className="leading-relaxed">
              O sistema atua exclusivamente como intermediador para coleta,
              organização e encaminhamento das informações fornecidas pelo
              usuário.
            </p>
          </section>

          {/* DADOS */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Database className="text-slate-900" />
              <h2 className="text-2xl font-bold text-slate-900">
                2. Dados Coletados
              </h2>
            </div>

            <p className="leading-relaxed">
              Durante a utilização da plataforma, os seguintes dados poderão
              ser coletados:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Nome completo;</li>
              <li>CPF ou CNPJ;</li>
              <li>Telefone e e-mail;</li>
              <li>Endereço residencial;</li>
              <li>Informações da parte reclamada;</li>
              <li>Relato da demanda;</li>
              <li>Documentos anexados pelo usuário.</li>
            </ul>
          </section>

          {/* FINALIDADE */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <FileText className="text-slate-900" />
              <h2 className="text-2xl font-bold text-slate-900">
                3. Finalidade do Uso dos Dados
              </h2>
            </div>

            <p className="leading-relaxed">
              Os dados informados possuem como única finalidade:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Registrar a solicitação de audiência pré-processual;
              </li>

              <li>
                Encaminhar as informações para a unidade judicial selecionada;
              </li>

              <li>
                Permitir o contato entre a instituição e o solicitante;
              </li>

              <li>
                Garantir conformidade com procedimentos legais e
                administrativos.
              </li>
            </ul>
          </section>

          {/* LGPD */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Scale className="text-slate-900" />
              <h2 className="text-2xl font-bold text-slate-900">
                4. Conformidade com a LGPD
              </h2>
            </div>

            <p className="leading-relaxed">
              A plataforma busca seguir os princípios da{" "}
              <span className="font-semibold">
                Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018)
              </span>
              , garantindo transparência, segurança e utilização adequada das
              informações fornecidas pelos usuários.
            </p>

            <p className="leading-relaxed">
              Os dados coletados não são comercializados, compartilhados com
              terceiros indevidamente ou utilizados para fins publicitários.
            </p>
          </section>

          {/* SEGURANÇA */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Lock className="text-slate-900" />
              <h2 className="text-2xl font-bold text-slate-900">
                5. Segurança das Informações
              </h2>
            </div>

            <p className="leading-relaxed">
              A plataforma adota medidas técnicas e organizacionais para
              proteger os dados contra acesso não autorizado, perda,
              modificação ou divulgação indevida.
            </p>

            <p className="leading-relaxed">
              Os documentos enviados são utilizados apenas durante o fluxo de
              processamento da solicitação.
            </p>
          </section>

          {/* DESCARTE */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Trash2 className="text-slate-900" />
              <h2 className="text-2xl font-bold text-slate-900">
                6. Armazenamento e Descarte
              </h2>
            </div>

            <p className="leading-relaxed">
              Os dados poderão ser armazenados temporariamente apenas pelo
              período necessário para o envio e processamento da solicitação.
            </p>

            <p className="leading-relaxed">
              Após a conclusão do fluxo transacional, as informações poderão
              ser removidas do armazenamento temporário conforme as diretrizes
              internas do sistema.
            </p>
          </section>

          {/* DIREITOS */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <User2 className="text-slate-900" />
              <h2 className="text-2xl font-bold text-slate-900">
                7. Direitos do Usuário
              </h2>
            </div>

            <p className="leading-relaxed">
              O usuário poderá solicitar informações relacionadas ao tratamento
              de seus dados pessoais, observadas as limitações legais e
              administrativas aplicáveis.
            </p>
          </section>

          {/* CONTATO */}
          <section className="space-y-4">
            <div className="flex items-center gap-3">
              <Mail className="text-slate-900" />
              <h2 className="text-2xl font-bold text-slate-900">
                8. Contato
              </h2>
            </div>

            <p className="leading-relaxed">
              Em caso de dúvidas sobre esta Política de Privacidade, entre em
              contato com a equipe responsável pela plataforma.
            </p>

            <div className="bg-slate-100 border border-slate-200 rounded-2xl p-5">
              <p className="font-medium">E-mail:</p>
              <p className="text-slate-600">
                juris2026@gmail.com
              </p>
            </div>
          </section>

          <div className="w-full flex justify-center">
          <Link className="py-2 px-8 rounded-lg font-medium transition-all bg-teal-500 text-white hover:bg-teal-600 cursor-pointer" to={-1}>
          Retornar
          </Link>
          </div>

          

          {/* FOOTER */}
          <div className="pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-500 text-center leading-relaxed">
              Última atualização: Maio de 2026.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}