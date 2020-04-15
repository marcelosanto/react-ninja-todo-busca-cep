import createReducer from '../create-reducer'
import { FETCHING, SUCCESS } from './actions'

const initialState = {
  cep: '',
  logradouro: '',
  bairro: '',
  localidade: '',
  uf: '',
  erro: false,
  isFetching: false
}

const address = createReducer(initialState, {
  [FETCHING]: (state, action) => ({
    ...state,
    isFetching: true
  }),

  [SUCCESS]: (state, action) => ({
    ...action.payload,
    isFetching: false
  }),
})

export default address
