import React, { PureComponent } from 'react'
import SearchCep from './search-cep'
import ajax from '@fdaciuk/ajax'

class SearchCepContainer extends PureComponent {
  state = {
    cep: '',
    logradouro: '',
    bairro: '',
    localidade: '',
    uf: '',
    erro: false,
    isFetching: false,
  }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ isFetching: true })

    const cep = e.target.cep.value ? e.target.cep.value : '90000000'
    const response = await ajax().get(`https://viacep.com.br/ws/${cep}/json/`)

    setTimeout(() => {
      this.setState({ isFetching: false })
      this.setState(response)
      console.log(response)
    }, 1000)
  }

  render() {
    return <SearchCep {...this.state} handleSubmit={this.handleSubmit} />
  }
}

export default SearchCepContainer
