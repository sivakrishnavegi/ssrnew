//startup point for client side app

import React from 'react'
import { ReactDOM } from 'react'


import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'

ReactDOM.hydrate(<BrowserRouter>
<Routes />
</BrowserRouter>,  document.querySelector('#root'));


