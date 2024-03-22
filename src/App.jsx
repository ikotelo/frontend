import { useState } from 'react'
import Home from './views/Home'
import Archived from './views/Archived'

import './App.css'

function App() {
    const [category, setCategory] = useState('Novedades')
    const [view, setView] = useState('home')

    return (
        <>
            {view === 'home' && <Home category={category} setCategory={setCategory} setView={setView} />}
            {view === 'archived' && <Archived category={category} setCategory={setCategory} setView={setView} />}
        </>
    )
}

export default App
