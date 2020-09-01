import React, { useCallback } from 'react'
import iziToast from 'izitoast'
import { useDispatch } from 'react-redux'
import { setListAsync } from '../../../store/ducks/phoneSlice'
import phoneApi from '../../../api/phone'
import { FaTrash } from 'react-icons/fa'
import Button from 'react-bootstrap/Button'

const CustomDelete = ({ row }) => {
  const dispatch = useDispatch()

  const handleClick = useCallback(() => {
    iziToast.question({
      position: 'center',
      message: 'Are you sure you want to delete?',
      buttons: [
        [
          '<button>Yes</button>',
          async (instance, toast) => {
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
            try {
              await phoneApi.delete(row.id)
              dispatch(setListAsync())
              iziToast.success({
                title: 'Success',
                message: 'Successfully deleted',
                position: 'topCenter'
              })
            } catch (e) {
              console.error(e)
              iziToast.error({
                title: 'Error',
                message: `Error while deleting phone ${row.value}`,
                position: 'topCenter'
              })
            }
          },
          true
        ],
        [
          '<button>No</button>',
          (instance, toast) => {
            instance.hide({ transitionOut: 'fadeOut' }, toast, 'button')
          }
        ]
      ]
    })
  }, [row, dispatch])

  return (
    <Button
      variant="danger"
      size="sm"
      onClick={handleClick}
    >
      <FaTrash />
    </Button>
  )
}

export default CustomDelete
