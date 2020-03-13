import React, { Children } from 'react'
import { connect } from 'react-redux'

import { setVisibilityFilter } from '../../redux-flow/reducers/visibility-filter/actions-creators'

const FilterLink = ({ action, activeFilter, handleFilter, children }) => {
  const span = { tag: 'span' }
  const onClick = handleFilter(action)
  const a = { tag: 'a', href: '#', onClick }
  const Component = action === activeFilter ? span : a

  return (
    <Component.tag
      href={Component.href}
      onClick={Component.onClick}
      style={{ marginRight: 10 }}
    >
      {children}
    </Component.tag>
  )
}

const mapStateToProps = state => ({
  activeFilter: state.visibilityFilter,
})

const mapDispatchToProps = dispatch => ({
  handleFilter: filter => e => {
    e.preventDefault()
    dispatch(setVisibilityFilter(filter))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink)
