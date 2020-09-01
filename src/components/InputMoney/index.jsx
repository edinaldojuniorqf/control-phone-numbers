import React, { useRef, useEffect, forwardRef } from 'react'
import IMask from 'imask'
import { moneyMask } from '../../utils/masks'

const InputMoney =  ({onSetMask, onChange, ...props}, ref) => {
  let el = useRef(null)

  useEffect(() => {
    const mask = IMask(el.current, moneyMask)
    onSetMask && onSetMask(mask)
  })

  return (
    <input
      {...props}
      ref={node => {
        el.current = node
        ref && ref(node)
      }}
    />
  )
}

export default forwardRef(InputMoney)
