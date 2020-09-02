import React from 'react'
import propTypes from 'prop-types'
import clsx from 'clsx'
import { useForm } from 'react-hook-form'
import { Form } from 'react-bootstrap'
import InputPhone from '../../../components/InputPhone'
import InputMoney from '../../../components/InputMoney'

const FormPhone = ({
  phone = {},
  cta,
  onSubmit = () => {}
}) => {
  let inputMonthyPriceMask, inputSetupPriceMask
    
  const { register, handleSubmit, errors } = useForm()

  const _onSubmit = data => {
    data.monthyPrice = inputMonthyPriceMask.unmaskedValue
    data.setupPrice = inputSetupPriceMask.unmaskedValue

    onSubmit(data)
  }
  
  return (
    <Form onSubmit={handleSubmit(_onSubmit)} noValidate>
      <Form.Group>
        <Form.Label>Number</Form.Label>
        <InputPhone
          ref={node => register(node, { required: 'Enter your phone' })}
          type="text"
          name="value"
          className={clsx('form-control', {
            'is-invalid': errors.value
          })}
          placeholder="Your phone"
          defaultValue={phone.value}
        />
        <div className="invalid-feedback">{ errors.value && errors.value.message }</div>
      </Form.Group>

      <Form.Group>
        <Form.Label>Monthy Price</Form.Label>
        <InputMoney
          ref={register({ required: 'Enter the monthly price' })}
          type="text"
          name="monthyPrice"
          className={clsx('form-control', {
            'is-invalid': errors.monthyPrice
          })}
          placeholder="Enter Monthy Price"
          defaultValue={phone.monthyPrice}
          onSetMask={mask => inputMonthyPriceMask = mask}
        />
        <div className="invalid-feedback">{ errors.monthyPrice && errors.monthyPrice.message }</div>
      </Form.Group>

      <Form.Group>
        <Form.Label>Setup Price</Form.Label>
        <InputMoney
          ref={register({ required: 'Enter the setup price' })}
          type="text"
          name="setupPrice"
          className={clsx('form-control', {
            'is-invalid': errors.setupPrice
          })}
          placeholder="Enter Setup Price"
          defaultValue={phone.setupPrice}
          onSetMask={mask => { inputSetupPriceMask = mask }}
        />
        <div className="invalid-feedback">{ errors.setupPrice && errors.setupPrice.message }</div>
      </Form.Group>

      <Form.Group>
        <Form.Label>Currency</Form.Label>
        <Form.Control
          ref={register()}
          as="select"
          name="currency"
          defaultValue={phone.currency}
        >
          <option>USD</option>
          <option>BRL</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Check
          ref={register()}
          id="phone-available"
          type="switch"
          name="available"
          label="Available"
          defaultChecked={phone.available}
        />
      </Form.Group>

      { cta }
    </Form>
  )
}

FormPhone.propTypes = {
  cta: propTypes.element
}

export default FormPhone