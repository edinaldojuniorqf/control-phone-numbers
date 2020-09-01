import React, { useState, useCallback } from 'react'
import phoneApi from '../../../api/phone'
import Form from 'react-bootstrap/Form'

const CustomAvaliable = ({ row }) => {
  const [checked, setChecked] = useState(row.available)

  const handleAvailableClick = useCallback(() => {
    async function updateAvailable() {
      await phoneApi.updateAvailable({ id: row.id, available: !checked })
      setChecked(!checked)
    }

    updateAvailable()
  }, [row, checked])

  return (
    <Form.Check
      id={`available-${row.id}`}
      type="switch"
      label=""
      checked={checked}
      onChange={handleAvailableClick}
    />
  )
}

export default CustomAvaliable
