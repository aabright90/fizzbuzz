import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore}  from 'redux'
import './assets/styles.css'

import App from './components/App'
import reducers from './reducers/'

const store = createStore(reducers)


const root = document.getElementById('root')

render(<Provider store={store}>
    <App/>
</Provider>, root)

