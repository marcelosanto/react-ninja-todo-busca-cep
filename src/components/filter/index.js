import React from 'react'

import * as actions from '../../redux-flow/reducers/visibility-filter/actions'
import FilterLink from './filter-link'

const Filter = ({}) => (
  <div>
    <h3>Mostrar</h3>
    {filterItems.map(item => {
      return (
        <FilterLink action={item.action} key={item.action}>
          {item.label}
        </FilterLink>
      )
    })}
  </div>
)

const filterItems = [
  { label: 'Todos', action: actions.SHOW_ALL },
  { label: 'Finalizados', action: actions.SHOW_COMPLETED },
  { label: 'A fazer', action: actions.SHOW_ACTIVE },
]

export default Filter
