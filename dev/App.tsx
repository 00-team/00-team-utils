import React, { FC } from 'react'
import { render } from 'react-dom'

import { Hexaload } from '..'

import './style.scss'

const App: FC = () => {
    return (
        <div className='app'>
            <Hexaload />
        </div>
    )
}

render(<App />, document.getElementById('root'))
