// src/services/dateUtils.js

/**
 * Formata um objeto Date para o formato ISO 'AAAA-MM-DD' para comparação
 */
export const dateToIsoString = (date) => {
  if (!date || !(date instanceof Date)) return '';
  const ano = date.getFullYear();
  const mes = String(date.getMonth() + 1).padStart(2, '0');
  const dia = String(date.getDate()).padStart(2, '0');
  return `${ano}-${mes}-${dia}`;
};

/**
 * Formata um objeto Date para o formato visual brasileiro 'DD/MM/AAAA'
 */
export const dateToBrazilianString = (date) => {
  if (!date || !(date instanceof Date)) return '';
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
};