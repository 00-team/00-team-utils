import React, { FC } from 'react'
import { createRoot } from 'react-dom/client'

import './style.scss'

const App: FC = () => {
    return <div className='app'></div>
}

createRoot(document.getElementById('root')!).render(<App />)
