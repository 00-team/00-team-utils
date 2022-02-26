import React, { FC } from 'react'
import { render } from 'react-dom'

import { Avatar } from '..'

const App: FC = () => {
    return (
        <div>
            <Avatar username='12' />
        </div>
    )
}

render(<App />, document.getElementById('root'))
