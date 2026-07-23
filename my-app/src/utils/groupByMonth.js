const groupByMonth = (transactions) => {
  if (!Array.isArray(transactions) || transactions.length === 0) {
    return [];
  }

  const monthNames = [
    'Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень',
    'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень'
  ];

  const grouped = transactions.reduce((acc, item) => {
    if (!item.date || typeof item.amount !== 'number') return acc;

    const dateParts = item.date.split('.');
    if (dateParts.length !== 3) return acc;

    const monthIndex = parseInt(dateParts[1], 10) - 1;
    const year = dateParts[2];

    if (monthIndex < 0 || monthIndex > 11) return acc;

    const monthKey = `${monthNames[monthIndex]} ${year}`;
    const amountValue = item.type === 'income' ? item.amount : -item.amount;

    if (!acc[monthKey]) {
      acc[monthKey] = {
        month: monthNames[monthIndex],
        year: parseInt(year, 10),
        monthIndex: monthIndex,
        amount: 0
      };
    }

    acc[monthKey].amount += amountValue;
    return acc;
  }, {});

  return Object.values(grouped).sort((a, b) => {
    if (a.year !== b.year) {
      return b.year - a.year;
    }
    return b.monthIndex - a.monthIndex;
  });
};

export default groupByMonth;
