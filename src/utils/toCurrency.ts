export default function toCurrency(
  price: number | null | undefined,
  withoutCurrencyName = false
) {
  return price
    ? `${withoutCurrencyName ? "" : "£"}${price.toLocaleString()}`
    : "Free";
}
