const API =
  "http://localhost:8000/api/pre_processual";

// =========================
// GET
// =========================

export async function getProcessos() {

  try {

    const response =
      await fetch(API);

    console.log(
      "GET RESPONSE:",
      response
    );

    if (!response.ok) {
      throw new Error(
        `Erro GET: ${response.status}`
      );
    }

    const data =
      await response.json();

    console.log(
      "GET DATA:",
      data
    );

    return data;

  } catch (error) {

    console.error(
      "ERRO GET PROCESSOS:",
      error
    );

    throw error;
  }
}

// =========================
// DELETE
// =========================

export async function deleteProcesso(
  id
) {

  try {

    const response =
      await fetch(
        `${API}${id}/`,
        {
          method: "DELETE",
        }
      );

    console.log(
      "DELETE RESPONSE:",
      response
    );

    if (!response.ok) {
      throw new Error(
        `Erro DELETE: ${response.status}`
      );
    }

    return true;

  } catch (error) {

    console.error(
      "ERRO DELETE:",
      error
    );

    throw error;
  }
}