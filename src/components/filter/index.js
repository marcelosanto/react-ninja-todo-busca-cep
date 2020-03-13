import React from 'react'
import { connect } from 'react-redux'

import * as actions from '../../redux-flow/reducers/visibility-filter/actions'
import { setVisibilityFilter } from '../../redux-flow/reducers/visibility-filter/actions-creators'

const Filter = ({ activeFilter, handleFilter }) => (
  <div>
    <h3>Mostrar</h3>
    {filterItems.map(item => {
      if (item.action === activeFilter) {
        return (
          <span style={{ marginRight: 10 }} key={item.action}>
            {item.label}
          </span>
        )
      }
      return (
        <a
          href=''
          key={item.action}
          onClick={handleFilter(item.action)}
          style={{ marginRight: 10 }}
        >
          {item.label}
        </a>
      )
    })}
  </div>
)

const filterItems = [
  { label: 'Todos', action: actions.SHOW_ALL },
  { label: 'Finalizados', action: actions.SHOW_COMPLETED },
  { label: 'A fazer', action: actions.SHOW_ACTIVE },
]

const mapStateToProps = state => ({
  activeFilter: state.visibilityFilter,
})

const mapDispatchToProps = dispatch => ({
  handleFilter: filter => e => {
    e.preventDefault()
    dispatch(setVisibilityFilter(filter))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
