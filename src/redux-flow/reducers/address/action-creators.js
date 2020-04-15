import { FETCHING, SUCCESS } from './actions'
import ajax from '@fdaciuk/ajax'

export const fetchAddress = (cep) => async (dispatch, getState) => {
  dispatch({ type: FETCHING })

  const response = await ajax().get(`https://viacep.com.br/ws/${cep}/json/`)

  dispatch({
    type: SUCCESS,
    payload: response,
  })
}
