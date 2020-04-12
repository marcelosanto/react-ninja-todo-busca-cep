import { expect } from 'chai'
import deepFreeze from 'deep-freeze'

import address from './index'
import { UPDATE_ADDRESS } from './actions'

it('should action UPDATE_ADDRESS update address', () => {
  const before = deepFreeze({
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: '',
    erro: false,
  })

  const action = deepFreeze({
    type: UPDATE_ADDRESS,
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
  }

  expect(address(before, action)).to.be.deep.equal(after)
})
