import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import address from './index'
import { FETCHING, SUCCESS } from './actions'

it('should action SUCCESS update address', () => {
  const before = deepFreeze({
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: '',
    erro: false,
    isFetching: true,
  })

  const action = deepFreeze({
    type: SUCCESS,
    payload: {
      cep: '29055-340',
      logradouro: 'Rua Elesbão Linhares',
      bairro: 'Praia do Canto',
      localidade: 'Vitória',
      uf: 'ES',
      erro: false,
    },
  })

  const after = {
    cep: '29055-340',
    logradouro: 'Rua Elesbão Linhares',
    bairro: 'Praia do Canto',
    localidade: 'Vitória',
    uf: 'ES',
    erro: false,
    isFetching: false,
  }

  expect(address(before, action)).to.be.deep.equal(after)
})
