import React from 'react'

import Form from './components/form'
import Filter from './components/filter'
import TodosList from './components/todos-list'
import SearchCep from './components/search-cep'

import 'milligram'

function App() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        padding: 30,
        margin: 30,
      }}
    >
      <div>
        <Form />
        <TodosList />
        <Filter />
      </div>
      <div style={{ marginTop: 30 }}>
        <SearchCep />
      </div>
    </div>
  )
}

export default App
