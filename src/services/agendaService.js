export const enviarSolicitacaoReserva = async (dadosReserva) => {
  try {
    // Faz a chamada para a pasta /api que criamos
    const response = await fetch('/api/reservar', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dadosReserva),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.erro || 'Erro desconhecido ao reservar');
    }

    return data; // Retorna { sucesso: true, link: "..." }
  } catch (error) {
    console.error("Erro no serviço de agenda:", error);
    throw error; // Repassa o erro para o FormularioReserva.jsx exibir o alerta
  }
};