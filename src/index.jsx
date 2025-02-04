import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createGlobalStyle } from 'styled-components'
import AppRoute from './components/AppRoutes'
import reset from './constants/css/reset'
import * as serviceWorker from './serviceWorker'
import configureStore from './store'
import rootSaga from './sagas'
// ... other imports

const GlobalStyle = createGlobalStyle`${reset}`
const store = configureStore()
store.runSaga(rootSaga)

ReactDOM.render(
  // <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <AppRoute />
      </Provider>
      <GlobalStyle />
    </BrowserRouter>,
  // </React.StrictMode>,
  document.getElementById('root')
)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
