import LogoHeader from '../public/images/dollar.png'

function header (){
    return(
        <>
            <div className='header'>
                <div className='header-tt'>
                    <a href="/">
                        <img src={LogoHeader} alt='meubolsoonline-logo' />
                    </a>
                    <h1>Meu bolso online</h1>
                </div>
            </div>
            <div className='col-12 h-nav'>
                <div className='col-8 '>
                    <nav className='nav'>
                        <a href="/" className='nav-link'>Beneficios</a>
                        <a href="/" className='nav-link'>Sobre</a>
                    </nav>
                </div>
                <div className='col-2 nav'>
                    <a href="/singin" className='btn '>Login</a>
                </div>
            </div>
            <div>
            </div>
        </>
    )
}

export default header;