import React, { useEffect, useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setListAsync, setPage, setLimit } from '../../../store/ducks/phoneSlice'
import { moneyFormat } from '../../../utils/format'
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import DataTable from 'react-data-table-component'
import Button from 'react-bootstrap/Button'
import CustomAvaliable from './CustomAvaliable'
import CustomEdit from './CustomEdit'
import CustomDelete from './CustomDelete'
import { Header } from './styles'

const columns = [
  {
    name: 'Number',
    selector: 'value',
    sortable: true,
  },
  {
    name: 'Monthy Price',
    selector: 'monthyPrice',
    sortable: true,
    cell: row => moneyFormat(row.monthyPrice, row.currency)
  },
  {
    name: 'Setup Price',
    selector: 'setupPrice',
    sortable: true,
    cell: row => moneyFormat(row.setupPrice, row.currency)
  },
  {
    name: 'Available',
    selector: 'available',
    sortable: false,
    maxWidth: '1px',
    cell: row => <CustomAvaliable row={row} />
  },
  {
    name: '',
    maxWidth: '1px',
    cell: row => <CustomEdit row={row} />
  },
  {
    name: '',
    maxWidth: '1px',
    cell: row => <CustomDelete row={row} />
  }
]

const Phones = () => {
  const dispatch = useDispatch()
  const phones = useSelector(state => state.phone.data)
  const isFetching = useSelector(state => state.phone.isFetching)
  const total = useSelector(state => state.phone.total)
  const page = useSelector(state => state.phone.page)

  const handlePageChange = useCallback(page => {
    dispatch(setPage(page))
    dispatch(setListAsync())
  }, [dispatch])

  const handlePerRowsChange = useCallback((limit, page) => {
    dispatch(setPage(page))
    dispatch(setLimit(limit))
    dispatch(setListAsync())
  }, [dispatch])

  useEffect(() => {
    dispatch(setListAsync())
  }, [dispatch])

  return (
    <Container>
      <Header>
        <Button variant="success" as={Link} to="/phone/new">New</Button>
      </Header>
      <DataTable
        title="List Phones"
        columns={columns}
        data={phones}
        progressPending={isFetching}
        pagination
        paginationDefaultPage={page}
        paginationServer
        paginationTotalRows={total}
        onChangeRowsPerPage={handlePerRowsChange}
        onChangePage={handlePageChange}
      />
    </Container>
  )
}

export default Phones
