import React, { useState, useCallback, useEffect } from 'react'
import iziToast from 'izitoast'
import { Container } from 'react-bootstrap'
import phoneApi from '../../../api/phone'
import { useHistory, useParams } from 'react-router-dom'
import Form from '../Create/Form'
import Cta from './Cta'

const PhonesEdit = () => {
  const history = useHistory()
  const params = useParams()
  const [phone, setPhone] = useState(null)


  const handleSubmit = useCallback(data => {
    async function update() {
      try {
        await phoneApi.update({ id: params.id, ...data })
        history.push('/')
        iziToast.success({
          title: 'Success',
          message: 'Updated successfully',
          position: 'topCenter',
        })
      } catch (e) {
        console.error(e)
        iziToast.error({
          title: 'Error',
          message: 'Error updating',
          position: 'topCenter',
        })
      }
    }

    update()
  }, [history, params.id])

  useEffect(() => {
    async function getPhone() {
      const response = await phoneApi.get(params.id)
      const phone = response.data
      setPhone(phone)
    }

    getPhone()
  }, [params.id])

  return (
    <Container>
      <h1>Phone Update</h1>
      { phone &&
        <Form
          phone={phone}
          cta={<Cta />}
          onSubmit={handleSubmit}
        />
      }
    </Container>
  )
}

export default PhonesEdit
