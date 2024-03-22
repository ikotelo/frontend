import React from 'react'

const TopBar = ({ setCategory, setView }) => {
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <ul className="navbar-nav">
                    <li className='nav-item'>
                        <div className='nav-link' onClick={() => {
                            setView('home')
                            setCategory('Novedades')
                        }}>
                            Novedades
                        </div>
                    </li>
                    <li className='nav-item'>
                        <div className='nav-link' onClick={() => setCategory('Politica')}>Politica</div>
                    </li>
                    <li className='nav-item'>
                        <div className='nav-link' onClick={() => setCategory('Economia')}>Economia</div>
                    </li>
                    <li className='nav-item'>
                        <div className='nav-link' onClick={() => setCategory('Internacional')}>Internacional</div>
                    </li>
                    <li className='nav-item'>
                        <div className='nav-link' onClick={() => setCategory('Nacional')}>Nacional</div>
                    </li>
                    <li className='nav-item'>
                        <div className='nav-link' onClick={() => setCategory('Ciencia y Tecnología')}>Ciencia y Tecnología</div>
                    </li>
                    <li className='nav-item'>
                        <div className='nav-link' onClick={() => setCategory('Cultura y Entretenimiento')}>Cultura y Entretenimiento</div>
                    </li>
                    <li className='nav-item'>
                        <div className='nav-link' onClick={() => setCategory('Deportes')}>Deportes</div>
                    </li>
                    <li className='nav-item'>
                        <div className='nav-link' onClick={() => {
                            setView('archived')
                            setCategory('Archivo')
                        }}>
                            Archivo
                        </div>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default TopBar