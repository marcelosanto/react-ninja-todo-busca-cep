import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

import SearchCep from './search-cep'
import ajax from '@fdaciuk/ajax'
import { updateAddress } from '../../redux-flow/reducers/address/action-creators'

class SearchCepContainer extends PureComponent {
  state = { isFetching: false }

  handleSubmit = async e => {
    e.preventDefault()
    this.setState({ isFetching: true })

    const cep = e.target.cep.value ? e.target.cep.value : '90000000'
    const response = await ajax().get(`https://viacep.com.br/ws/${cep}/json/`)

    this.props.updateAddress(response)
    this.setState({ isFetching: false })
  }

  render() {
    return (
      <SearchCep
        {...this.state}
        {...this.props.address}
        handleSubmit={this.handleSubmit}
      />
    )
  }
}

const mapStateToProps = state => ({
  address: state.address,
})

const mapDispatchToProps = {
  updateAddress,
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchCepContainer)
