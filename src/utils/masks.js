export const phoneMasks = [
  {
    mask: '(00) 0000-0000'
  },
  {
    mask: '(00) 00000-0000'
  }
]

export const moneyMask = {
  mask: '$num',
  blocks: {
    num: {
      mask: Number,
      thousandsSeparator: ' '
    }
  }
}
