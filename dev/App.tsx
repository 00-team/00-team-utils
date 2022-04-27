import React, { FC, useState } from 'react'
import { render } from 'react-dom'

import { CountAnim } from '..'

import './style.scss'

const App: FC = () => {
    const [Count, setCount] = useState(1e7)

    return (
        <div className='app'>
            <CountAnim end={Count} />
            <button onClick={() => setCount(s => s + 1)}>
                Add Count {Count}
            </button>
        </div>
    )
}

render(<App />, document.getElementById('root'))
