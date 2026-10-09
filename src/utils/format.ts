const currency = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const shortDate = new Intl.DateTimeFormat('en-US', { dateStyle: 'medium' });

export function formatCurrency(amount: number): string {
  return currency.format(amount);
}

export function formatDate(d: Date): string {
  return shortDate.format(d);
}
