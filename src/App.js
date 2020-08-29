import React from 'react'
import { Provider } from 'react-redux'

import Todos from './components/Todos'
import store from './store'


const App = () => {
  return (
    <Provider store={store} >
      <div>
        <Todos />
      </div>
    </Provider >
  )
}

export default App