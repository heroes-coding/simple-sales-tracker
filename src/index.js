import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import Store from './redux/configuration'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import App from './App'

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>, document.getElementById('root')
)
