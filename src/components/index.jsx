import logo_security from '../public/images/cyber-security.png'

function Index(){
    return(
        <>
            <main>
                <div className="ssdr ">
                    <div className="box py-5 container mt-5">
                        <h4 className="">Bem-vindo ao Meu Bolso Online</h4>
                        <p> 
                            Sua ferramenta personalizada para uma gestão financeira inteligente e descomplicada. Sabemos que a vida moderna está repleta de desafios
                            financeiros, mas estamos aqui para ajudar a transformar suas preocupações em controle e confiança.
                        </p>
                    </div>
                    <div className="box-nav container py-5 mt-5">
                            <h4>Serviços oferecidos</h4>
                        <nav className="nav">   
                            <ul className="row">
                                <li className="col-5">
                                    <button type="button" className="btn">Orçamento Detalhado</button>
                                </li>
                                <li className="col-5">
                                    <button type="button" className="btn">Metas Claras</button>
                                </li>
                                <li className="col-5">
                                    <button type="button" className="btn">Controle de Dívidas</button>
                                </li>
                                <li className="col-5">
                                    <button type="button" className="btn">Acompanhamento Regular</button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <section className="ssdr-2 container mt-5">
                    <div className="bx-photo ">
                        <div>
                            <p>
                                "Fortaleça seu Futuro Financeiro: Orçamento Inteligente, Metas
                                 Concretas, Controle Total, Dívidas Sob Domínio  - O Caminho 
                                 para a Estabilidade!"
                            </p>
                        </div>
                    </div>
                    <div className="bx-security">
                        <div>
                            <img src={logo_security} alt="" />
                            <p>
                                Compreendemos a importância da privacidade e segurança dos seus 
                                dados financeiros. Aqui no Meu Bolso Online, a sua confiança é 
                                nossa prioridade máxima. Utilizamos tecnologias avançadas de 
                                criptografia para proteger todas as informações que você 
                                compartilha conosco
                            </p>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Index;