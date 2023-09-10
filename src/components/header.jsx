import LogoHeader from '../public/images/dollar.png'

function header (){
    return(
        <>
            <div className='header'>
                <div className='header-tt'>
                    <img src={LogoHeader} alt='meubolsoonline-logo' />
                    <h1>Meu bolso online</h1>
                </div>
            </div>
            <div className='h-nav'>
                <ul>
                    <li><a href="/">Beneficios</a></li>
                    <li><a href="/">Sobre</a></li>
                </ul>
                <div className='bt-right'>
                    <a href="/" className='bt-login'>login</a>
                </div>
            </div>
        </>
    )
}

export default header;