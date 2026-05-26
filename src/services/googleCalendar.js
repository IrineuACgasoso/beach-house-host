// O Vite usa import.meta.env em vez de process.env do Node clássico
const API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;
const CALENDAR_ID = import.meta.env.VITE_GOOGLE_CALENDAR_ID;

export async function buscarDatasReservadas() {
  const anoAtual = new Date().getFullYear();
  const timeMin = new Date(`${anoAtual}-01-01T00:00:00Z`).toISOString();
  const timeMax = new Date(`${anoAtual + 1}-12-31T23:59:59Z`).toISOString();

  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(
    CALENDAR_ID
  )}/events?key=${API_KEY}&timeMin=${timeMin}&timeMax=${timeMax}&singleEvents=true&orderBy=startTime`;

  try {
    const resposta = await fetch(url);
    if (!resposta.ok) throw new Error('Erro ao buscar dados do Google Agenda');
    
    const dados = await resposta.json();
    const datasBloqueadas = [];

    dados.items.forEach((evento) => {
      const inicioStr = evento.start.date || evento.start.dateTime;
      const fimStr = evento.end.date || evento.end.dateTime;

      if (inicioStr && fimStr) {
        // Quebramos a string 'AAAA-MM-DD' manualmente para evitar que o JS mude o fuso horário
        const [anoI, mesI, diaI] = inicioStr.substring(0, 10).split('-').map(Number);
        const [anoF, mesF, diaF] = fimStr.substring(0, 10).split('-').map(Number);

        // Criamos as datas usando o construtor local puro (meses no JS vão de 0 a 11, por isso o -1)
        let dataAtual = new Date(anoI, mesI - 1, diaI);
        const dataFim = new Date(anoF, mesF - 1, diaF);

        // Se o evento veio com horário (dateTime) e não dia inteiro, o dia de fim do Google é o último dia real.
        // Se veio como dia inteiro (date), o Google joga 1 dia para frente, então usamos < dataFim.
        const ehDiaInteiro = evento.start.date ? true : false;

        while (dataAtual < dataFim) {
          const ano = dataAtual.getFullYear();
          const mes = String(dataAtual.getMonth() + 1).padStart(2, '0');
          const dia = String(dataAtual.getDate()).padStart(2, '0');
          
          datasBloqueadas.push(`${ano}-${mes}-${dia}`);
          
          dataAtual.setDate(dataAtual.getDate() + 1);
        }
        
        // Ajuste caso o evento NÃO seja de dia inteiro (para cobrir o último dia da reserva se necessário)
        if (!ehDiaInteiro) {
          const ano = dataFim.getFullYear();
          const mes = String(dataFim.getMonth() + 1).padStart(2, '0');
          const dia = String(dataFim.getDate()).padStart(2, '0');
          const dataFimFormatada = `${ano}-${mes}-${dia}`;
          if (!datasBloqueadas.includes(dataFimFormatada)) {
            datasBloqueadas.push(dataFimFormatada);
          }
        }
      }
    });

    return datasBloqueadas;
  } catch (erro) {
    console.error('Erro na integração com a agenda:', erro);
    return [];
  }
}