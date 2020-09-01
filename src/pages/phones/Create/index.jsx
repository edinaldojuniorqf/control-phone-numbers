import React, { useCallback } from 'react'
import iziToast from 'izitoast'
import phoneApi from '../../../api/phone'
import { useHistory } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Form from './Form'
import Cta from './Cta'

const PhonesCreate = () => {
  const history = useHistory()

  const handleSubmit = useCallback(data => {
    console.log('ookkkkkk')
    async function save() {
      try {
        await phoneApi.save(data)
        history.push('/')
        iziToast.success({
          title: 'Success',
          message: 'Successfully registered',
          position: 'topCenter',
        })
      } catch (e) {
        console.error(e)
        iziToast.error({
          title: 'Error',
          message: 'Error when registering',
          position: 'topCenter',
        })
      }
    }

    save()
  }, [history])

  return (
    <Container>
      <h1>Phone register</h1>
      <Form
        cta={<Cta />}
        onSubmit={handleSubmit}
      />
    </Container>
  )
}

export default PhonesCreate
