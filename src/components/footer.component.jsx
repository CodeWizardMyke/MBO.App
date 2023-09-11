import wpp from '../public/images/whatsapp_5968841.png'

function Footer(){
    return(
        <>
            <footer className="py-5 footer-index">
                <div className='container'>
                    <div className="row">
                        <div className="col-6 col-md- mb-3 flex-center-col">
                            <div>
                                <h5>Support</h5>
                                <ul>
                                    <li>suporte@email.com</li>
                                    <li>11 9595-9595</li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-6 col-md- mb-3 flex-center-col">
                            <div>
                                <span>Entre em contato.</span>
                                <img src={wpp} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className='text-center'>
                        <div className=" border-top">
                        <p>Meu Bolso Online - Controle Financeiro Inteligente</p>
                        <p>© 2023 Company, Inc. All rights reserved.</p>

                    </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;