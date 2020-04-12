import createReducer from '../create-reducer'
import { UPDATE_ADDRESS } from './actions'

const initialState = {
  cep: '',
  logradouro: '',
  bairro: '',
  localidade: '',
  uf: '',
  erro: false,
}

const address = createReducer(initialState, {
  [UPDATE_ADDRESS]: (state, action) => action.payload,
})

export default address
