import React, { FC } from 'react'
import { render } from 'react-dom'

import { Avatar } from '..'

const App: FC = () => {
    return (
        <div style={{ width: '300px', fontFamily: 'sans-serif' }}>
            <Avatar username='💛' />
        </div>
    )
}

render(<App />, document.getElementById('root'))
