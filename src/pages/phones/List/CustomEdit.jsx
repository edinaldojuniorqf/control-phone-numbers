import React, { useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { FaEdit } from 'react-icons/fa'
import Button from 'react-bootstrap/Button'

const CustomEdit = ({ row }) => {
  const history = useHistory()

  const handleClick = useCallback(() => {
    history.push(`/phone/edit/${row.id}`)
  }, [row, history])

  return (
    <Button
      variant="primary"
      size="sm"
      onClick={handleClick}
    >
      <FaEdit />
    </Button>
  )
}

export default CustomEdit
