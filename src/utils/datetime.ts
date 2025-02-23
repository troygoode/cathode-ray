export function formatDate(date: Date) {
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(date.getDate()).padStart(2, "0")}`;
}

export function subtractDays(date: Date, days: number) {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() - days);
  return newDate;
}
