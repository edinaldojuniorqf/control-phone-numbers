import { createSlice } from '@reduxjs/toolkit'
import phonesApi from '../../api/phone'

export const phoneSlice = createSlice({
  name: 'phone',
  initialState: {
    data: [],
    page: 1,
    limit: 10,
    total: 0,
    error: false,
    isFetching: false,
  },
  reducers: {
    setList: (state, { payload }) => {
      state.data = payload.data
      state.total = payload.total
    },
    setPage: (state, { payload }) => {
      state.page = payload
    },
    setLimit: (state, { payload }) => {
      state.limit = payload
    },
    setTotal: (state, { payload }) => {
      state.total = payload
    },
    setError: (state, { payload}) => {
      state.error = payload
    },
    setIsFetching: (state, { payload }) => {
      state.isFetching = payload
    },
  }
})

export const {
  setList,
  setTotal,
  setPage,
  setLimit,
  setError,
  setIsFetching,
} = phoneSlice.actions

export const setListAsync = () => async (dispatch, getState) => {
  try {
    dispatch(setIsFetching(true))

    const { page, limit } = getState().phone
    const response = await phonesApi.list({ page, limit })
    const { data, headers } = response
    const total = Number(headers['x-total-count'])

    dispatch(setList({ data, total }))
    dispatch(setTotal(total))
    dispatch(setError(false))
  } catch (err) {
    dispatch(setError(true))
  } finally {
    dispatch(setIsFetching(false))
  }
}

export default phoneSlice.reducer
