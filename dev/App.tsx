import React, { FC } from 'react'
import { render } from 'react-dom'

import './style.scss'

const App: FC = () => {
    return <div className='app'></div>
}

render(<App />, document.getElementById('root'))
