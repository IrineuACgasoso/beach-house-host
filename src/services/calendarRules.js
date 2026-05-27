import { dateToIsoString } from './dateUtils';

export const verificarDiaDesabilitado = ({ date, view }, datasReservadas, periodoSelecionado) => {
  if (view !== 'month') return false;

  const dataFormatada = dateToIsoString(date);
  const dataHoje = new Date();
  dataHoje.setHours(0, 0, 0, 0);

  const dAtual = new Date(date);
  dAtual.setHours(0, 0, 0, 0);
  const tAtual = dAtual.getTime();

  // 1. Bloqueio Base: Passado ou já reservado
  if (tAtual < dataHoje.getTime() || datasReservadas.includes(dataFormatada)) {
    return true;
  }

  // 2. Trava de Segurança Contra Pulo de Reserva
  const [dataInicio, dataFim] = periodoSelecionado || [null, null];
  
  if (dataInicio && !dataFim) {
    const dInicio = new Date(dataInicio);
    dInicio.setHours(0, 0, 0, 0);
    const tInicio = dInicio.getTime();

    // REGRA DE OURO: Nunca desabilite o próprio dia do check-in! 
    // Isso garante que ele permaneça clicável para resetar o calendário.
    if (tAtual === tInicio) return false;

    // Checkout não pode ser anterior ao check-in
    if (tAtual < tInicio) return true;

    // Encontra a primeira reserva futura após o check-in
    const reservasFuturas = datasReservadas
      .map(d => {
        const [ano, mes, dia] = d.split('-').map(Number);
        return new Date(ano, mes - 1, dia).setHours(0, 0, 0, 0);
      })
      .filter(t => t > tInicio)
      .sort((a, b) => a - b);

    if (reservasFuturas.length > 0) {
      const primeiraReservaInvalida = reservasFuturas[0];
      if (tAtual >= primeiraReservaInvalida) return true;
    }
  }

  return false;
};

export const obterClasseDoAzulejo = ({ date, view }, datasReservadas, periodoSelecionado) => {
  if (view !== 'month') return '';

  const dataFormatada = dateToIsoString(date);
  
  // Se está reservado, aplica nossa classe customizada forte
  if (datasReservadas.includes(dataFormatada)) {
    return 'tile-reservado';
  }

  const [dataInicio, dataFim] = periodoSelecionado || [null, null];
  let classes = '';

  if (dataInicio) {
    const dAtual = new Date(date);
    dAtual.setHours(0, 0, 0, 0);
    const tAtual = dAtual.getTime();

    const dInicio = new Date(dataInicio);
    dInicio.setHours(0, 0, 0, 0);
    const tInicio = dInicio.getTime();

    const tFim = dataFim ? new Date(dataFim).setHours(0, 0, 0, 0) : null;

    if (tAtual === tInicio) {
      classes = 'react-calendar__tile--rangeStart';
    } else if (tFim && tAtual === tFim) {
      classes = 'react-calendar__tile--rangeEnd';
    } else if (tFim && tAtual > tInicio && tAtual < tFim) {
      classes = 'react-calendar__tile--range';
    }
  }

  return classes;
};