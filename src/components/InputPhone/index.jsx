import React, { useRef, useEffect, forwardRef } from 'react'
import IMask from 'imask'
import { phoneMasks } from '../../utils/masks'

const InputPhone =  ({onSetMask, ...props}, ref) => {
  const el = useRef(null)

  useEffect(() => {
    const mask = IMask(el.current, {
      mask: phoneMasks
    })
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

export default forwardRef(InputPhone)
