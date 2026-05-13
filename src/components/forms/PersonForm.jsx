"use client";

import React, { useEffect, useState } from "react";

import Radio from "@/components/ui/Radio";
import Dropdown from "@/components/ui/Dropdown";
import Input from "@/components/ui/Input";
import SelectFile from "@/components/ui/SelectFile";

import { Save, TriangleAlert } from "lucide-react";

import {
  getEstados,
  getCidades,
  getCEP,
} from "@/utils/api";

import {
  validateDocument,
  validateEmail,
  validatePhone,
} from "@/utils/validations";

export default function PersonForm({
  title,
  submitText = "Salvar",

  showPriority = false,
  showUploads = false,

  onSubmit,
}) {
  const header =
    "p-2.5 bg-teal-500 text-white font-semibold w-full rounded-lg";

  const section =
    "flex m-auto w-full flex-col gap-5";

  // =========================
  // STATES
  // =========================

  const [estados, setEstados] = useState([]);
  const [cidades, setCidades] = useState([]);

  const [priority, setPriority] =
    useState("");

  const [otherPriority, setOtherPriority] =
    useState("");

  const [documentFiles, setDocumentFiles] =
    useState([]);

  const [addressFiles, setAddressFiles] =
    useState([]);

  // =========================
  // FORM
  // =========================

  const [formData, setFormData] = useState({
    nome: "",
    documento: "",

    cep: "",
    logradouro: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",

    telefone: "",
    email: "",
  });

  // =========================
  // ERRORS
  // =========================

  const [errors, setErrors] = useState({
    nome: "",
    documento: "",

    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",

    telefone: "",
    email: "",

    prioridade: "",
    otherPriority: "",

    documentos: "",
    comprovante: "",
  });

  // =========================
  // HANDLE CHANGE
  // =========================

  function handleChange(e) {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // =========================
  // LOAD ESTADOS
  // =========================

  useEffect(() => {
    async function loadEstados() {
      const data = await getEstados();

      setEstados(data);
    }

    loadEstados();
  }, []);

  // =========================
  // LOAD CIDADES
  // =========================

  useEffect(() => {
    if (!formData.estado) return;

    async function loadCidades() {
      const data = await getCidades(
        formData.estado
      );

      setCidades(data);
    }

    loadCidades();
  }, [formData.estado]);

  // =========================
  // CEP
  // =========================

  async function buscarCEP(cep) {
    const response = await getCEP(cep);

    if (response.error) {
      setErrors((prev) => ({
        ...prev,
        cep: response.error,
      }));

      return;
    }

    setErrors((prev) => ({
      ...prev,
      cep: "",
    }));

    const data = response.data;

    setFormData((prev) => ({
      ...prev,
      logradouro: data.logradouro,
      bairro: data.bairro,
      cidade: data.localidade,
      estado: data.uf,
    }));
  }

  // =========================
  // VALIDATE
  // =========================

  function validateForm() {
    let valid = true;

    const newErrors = {
      nome: "",
      documento: "",

      cep: "",
      logradouro: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",

      telefone: "",
      email: "",

      prioridade: "",
      otherPriority: "",

      documentos: "",
      comprovante: "",
    };

    // =========================
    // REQUIRED
    // =========================

    const requiredFields = [
      "nome",
      "documento",
      "cep",
      "logradouro",
      "numero",
      "bairro",
      "cidade",
      "estado",
    ];

    requiredFields.forEach((field) => {
      if (!formData[field]?.trim()) {
        newErrors[field] =
          "Campo obrigatório";

        valid = false;
      }
    });

    // =========================
    // VALIDATIONS
    // =========================

    if (
      formData.documento &&
      !validateDocument(formData.documento)
    ) {
      newErrors.documento =
        "CPF/CNPJ inválido";

      valid = false;
    }

    if (
      formData.telefone &&
      !validatePhone(formData.telefone)
    ) {
      newErrors.telefone =
        "Telefone inválido";

      valid = false;
    }

    if (
      formData.email &&
      !validateEmail(formData.email)
    ) {
      newErrors.email =
        "E-mail inválido";

      valid = false;
    }

    // =========================
    // PRIORIDADE
    // =========================

    if (showPriority) {
      if (!priority) {
        newErrors.prioridade =
          "Selecione uma opção";

        valid = false;
      }

      if (
        priority === "Outros" &&
        !otherPriority.trim()
      ) {
        newErrors.otherPriority =
          "Descreva a prioridade";

        valid = false;
      }
    }

    // =========================
    // UPLOADS
    // =========================

    if (showUploads) {
      if (documentFiles.length === 0) {
        newErrors.documentos =
          "Envie pelo menos 1 documento";

        valid = false;
      }

      if (addressFiles.length === 0) {
        newErrors.comprovante =
          "Envie pelo menos 1 comprovante";

        valid = false;
      }
    }

    setErrors(newErrors);

    return valid;
  }

  // =========================
  // SAVE
  // =========================

  function handleSubmit() {
    const valid = validateForm();

    if (!valid) return;

    onSubmit({
      ...formData,

      prioridade: priority,
      outraPrioridade: otherPriority,

      documentos: documentFiles,
      comprovantes: addressFiles,
    });
  }

  return (
    <div className="flex text-justify flex-col gap-10">

      {/* RECLAMANTE */}

      <section className={section}>
        <div className={header}>
          Adicionar {title}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <Input
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            input_text="nome completo"
            error={errors.nome}
          />

          <Input
            name="documento"
            value={formData.documento}
            onChange={handleChange}
            input_text="CPF/CNPJ"
            mask="cpfCnpj"
            error={errors.documento}
          />

        </div>
      </section>

      {/* ENDEREÇO */}

      <section className={section}>

        <div className={header}>
          Endereço do(a) {title}
        </div>

        <p className="text-sm">
          O endereço é requisito do sistema PJE para o cadastro do processo. Se
          atente para que o endereço indicado esteja correto, porque os dados
          informados, mesmo na atermação presencial, são de responsabilidade de
          quem quer entrar com o processo.
        </p>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-5">

          <Input
            name="cep"
            value={formData.cep}
            onChange={(e) => {
              handleChange(e);
              buscarCEP(e.target.value);
            }}
            input_text="CEP"
            mask="cep"
            error={errors.cep}
          />

          <Input
            name="logradouro"
            value={formData.logradouro}
            onChange={handleChange}
            input_text="logradouro"
            label_text="Rua/Avenida/Travessa"
            error={errors.logradouro}
          />

          <Input
            name="numero"
            value={formData.numero}
            onChange={handleChange}
            input_text="número"
            mask="number"
            error={errors.numero}
          />

          <Input
            optional
            name="complemento"
            value={formData.complemento}
            onChange={handleChange}
            input_text="complemento"
          />

        </div>

        <div className="grid grid-cols-1 xl:grid-cols-5 gap-5">

          <Input
            className="md:col-span-2"
            name="bairro"
            value={formData.bairro}
            onChange={handleChange}
            input_text="bairro"
            error={errors.bairro}
          />

          <Dropdown
            className="md:col-span-2"
            dropdown_text="um município"
            options={cidades}
            value={formData.cidade}
            error={errors.cidade}
            emptyMessage="Selecione primeiro um estado"
            onChange={(cidade) =>
              setFormData((prev) => ({
                ...prev,
                cidade,
              }))
            }
          />

          <Dropdown
            className="md:col-span-2 xl:col-span-1"
            dropdown_text="um estado"
            options={estados}
            value={formData.estado}
            error={errors.estado}
            onChange={(estado) =>
              setFormData((prev) => ({
                ...prev,
                estado,
                cidade: "",
              }))
            }
          />

        </div>

      </section>

      {/* INFO */}

      <section className={section}>

        <div className={header}>
          Informações Adicionais
        </div>

        <div className="flex gap-2 items-center">

          <TriangleAlert className="hidden md:inline text-yellow-600" />

          <p className="inline text-sm">
            Vamos nos comunicar com você por Whatsapp! Tenha atenção às
            mensagens. O TJCE pode enviar intimações por WhatsApp ou ligar pra
            você, se necessário
          </p>

        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          <Input
            optional
            name="telefone"
            value={formData.telefone}
            onChange={handleChange}
            input_text="telefone"
            mask="phone"
            error={errors.telefone}
          />

          <Input
            optional
            name="email"
            value={formData.email}
            onChange={handleChange}
            input_text="e-mail"
            error={errors.email}
          />

        </div>

          <p className="mt-3 font-semibold text-sm"> * Você tem algum direito de prioridade para que seu pedido seja analisado mais rápido? </p> 
          <p className="text-xs block"> (Ex.: pessoas com mais de 60 anos, doenças graves, pessoas com deficiência) </p>
        

        {showPriority && (
          <>
            <Radio
              value={priority}
              onChange={setPriority}
              otherValue={otherPriority}
              setOtherValue={setOtherPriority}
              error={errors.prioridade}
              otherError={errors.otherPriority}
            />
          </>
        )}

      </section>

      {/* UPLOADS */}

      {showUploads && (
        <>
          <section className={section}>

            <div className={header}>
              Documentos Pessoais
            </div>

            <ul className="text-sm list-disc pl-10">
          <li>O documento deve ter foto e CPF visíveis</li>

          <li>Anexe até 2 arquivos</li>

          <li>Formatos aceitos: PDF, JPG, JPEG, PNG</li>

          <li>Tamanho máximo: 10 MB por arquivo</li>
        </ul>

            <SelectFile
              files={documentFiles}
              setFiles={setDocumentFiles}
              error={errors.documentos}
            />

          </section>

          <section className={section}>

            <div className={header}>
              Comprovante de Endereço
            </div>

            <ul className="text-sm list-disc pl-10">
          <li>
            É importante que o comprovante esteja no seu nome, e seja recente
            (até 3 meses)
          </li>

          <li>Anexe até 2 arquivos</li>

          <li>Formatos aceitos: PDF, JPG, JPEG, PNG</li>

          <li>Tamanho máximo: 10 MB por arquivo</li>
        </ul>

            <SelectFile
              files={addressFiles}
              setFiles={setAddressFiles}
              error={errors.comprovante}
            />

          </section>
        </>
      )}

      <button
        onClick={handleSubmit}
        className="cursor-pointer flex self-center md:self-end items-center text-white rounded-lg bg-blue-500 hover:bg-blue-600 px-6 md:px-4 py-2 gap-2 transition-all duration-300"
      >
        <Save className="inline" size={18} />
        {submitText}
      </button>

    </div>
  );
}