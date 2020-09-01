import axios from './axios'
//import { uuid } from 'uuidv4'

export default {
  get: id => axios.get(`/phones/${id}`),

  list: ({ page, limit }) => axios.get(`/phones?_page=${page}&_limit=${limit}`),

  save: ({ value, monthyPrice, setupPrice, available, currency }) => 
    axios.post('/phones', { value, monthyPrice, setupPrice, available, currency }),

  update: ({ id, value, monthyPrice, setupPrice, available, currency }) => 
    axios.put(`/phones/${id}`, { id, value, monthyPrice, setupPrice, available, currency }),

  delete: id => axios.delete(`/phones/${id}`),

  updateAvailable: ({ id, available }) => axios.patch(`/phones/${id}`, { available }),
}
