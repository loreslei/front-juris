export async function getEstados() {
  try {
    const response = await fetch(
      "https://brasilapi.com.br/api/ibge/uf/v1"
    );

    const data = await response.json();

    return data.map((estado) => estado.sigla);
  } catch (error) {
    console.log(error);

    return [];
  }
}

export async function getCidades(estado) {
  try {
    const response = await fetch(
      `https://brasilapi.com.br/api/ibge/municipios/v1/${estado}`
    );

    const data = await response.json();

    return data.map((cidade) => cidade.nome);
  } catch (error) {
    console.log(error);

    return [];
  }
}

export async function getCEP(cep) {
  try {
    const cepLimpo = cep.replace(/\D/g, "");

    if (cepLimpo.length !== 8) {
      return {
        error: "CEP inválido",
      };
    }

    const response = await fetch(
      `https://viacep.com.br/ws/${cepLimpo}/json/`
    );

    const data = await response.json();

    if (data.erro) {
      return {
        error: "CEP não encontrado",
      };
    }

    return {
      data,
    };
  } catch (error) {
    console.log(error);

    return {
      error: "Erro ao buscar CEP",
    };
  }
}