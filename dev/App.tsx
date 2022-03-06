import React, { FC } from 'react'
import { render } from 'react-dom'

import { Loading } from '..'

import './style.scss'

const App: FC = () => {
    return (
        <div className='app'>
            <Loading shape='triangle' />
        </div>
    )
}

render(<App />, document.getElementById('root'))
