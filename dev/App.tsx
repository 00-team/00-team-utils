import React, { FC } from 'react'
import { render } from 'react-dom'

import { NiceDoc } from '..'

import './style.scss'

const doc = `Line 1

Line 3`

const App: FC = () => {
    return (
        <div className='app'>
            <div className='doc'>
                <NiceDoc doc={doc} type='div' />
            </div>
        </div>
    )
}

render(<App />, document.getElementById('root'))
