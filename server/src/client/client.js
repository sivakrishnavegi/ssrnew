//startup point for client side app

import React from 'react'
import { ReactDOM } from 'react'
import Home from './components/Home'

ReactDOM.hydrate(<Home />,  document.querySelector('#root'));


