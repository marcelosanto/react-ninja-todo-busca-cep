import React from 'react'
import ajax from '@fdaciuk/ajax'

const SearchCep = ({
  cep,
  logradouro,
  bairro,
  localidade,
  uf,
  erro,
  isFetching,
  handleSubmit,
}) => (
  <div>
    <form onSubmit={handleSubmit}>
      <input type='text' name='cep' />
      <button disabled={isFetching} type='submit'>
        {isFetching ? 'Buscando endereço' : 'Buscar endereço'}
      </button>
    </form>

    {erro !== true && (
      <table>
        <thead>
          <tr>
            <td>CEP</td>
            <td>Endereço</td>
            <td>Bairro</td>
            <td>Cidade</td>
            <td>Estado</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{cep}</td>
            <td>{logradouro}</td>
            <td>{bairro}</td>
            <td>{localidade}</td>
            <td>{uf}</td>
          </tr>
        </tbody>
      </table>
    )}

    {erro === true && <p>CEP Não existe!!</p>}
  </div>
)

export default SearchCep
