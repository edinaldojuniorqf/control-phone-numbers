const langs = {
  USD: 'en',
  BRL: 'pt-BR',
}

export const moneyFormat = (value, currency) =>
  Intl.NumberFormat(langs[currency], { style: 'currency', currency }).format(
    value,
  )
