const formatMoney = (amount) => {
  if (typeof amount !== 'number' || isNaN(amount)) {
    return '0.00';
  }

  return new Intl.NumberFormat('uk-UA', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
    .replace(',', '.')
    .replace(/\u00A0/g, ' ');
};

export default formatMoney;
