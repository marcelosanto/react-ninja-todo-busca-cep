import React from 'react'

import Form from './components/form'
import Filter from './components/filter'
import TodosList from './components/todos-list'

function App() {
  return (
    <div>
      <Form />
      <TodosList />
      <Filter />
    </div>
  )
}

export default App
