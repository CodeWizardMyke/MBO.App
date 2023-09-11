import '../public/css/singin.css'

function singin(){
    return(
        <>
            <div className='userauth'>
            <div className="container">
                <form className="py-5 my-5 singin" id='singin_user'>
                <h4 className='pb-3'>Login</h4>
                    <div className="row mb-3">
                        <label for="singinemail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="email" name='email' className="form-control" id="singinemail" placeholder='digite seu login de usuário' />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <label for="singinpassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" name='password' className="form-control" id="singinpassword" placeholder='digite sua senha' />
                        </div>
                    </div>
                    <div className="row mb-3">
                        <div className="col-sm-10 offset-sm-2">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" id="auto_singin"/>
                            <label className="form-check-label" for="auto_singin">Manter Logado</label>
                        </div>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">Sign in</button>
                </form>
                <form className="py-5 my-5 singin" id='singup_user'>
                <h4 className='pb-3'>Cadastrar-se</h4>

                    <div className="row mb-3">
                        <label for="username" className="col-sm-2 col-form-label">Nome</label>
                        <div className="col-sm-10">
                        <input type="text" name='username' className="form-control" id="username" placeholder='nome completo...' />
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label for="singupemail" className="col-sm-2 col-form-label">Email</label>
                        <div className="col-sm-10">
                        <input type="email" name='email' className="form-control" id="singupemail" placeholder='email válido'/>
                        </div>
                    </div>

                    <div className="row mb-3">
                        <label for="singuppassword" className="col-sm-2 col-form-label">Password</label>
                        <div className="col-sm-10">
                        <input type="password" name='password' className="form-control" id="singuppassword" placeholder='uma senha extraforte' />
                        </div>
                    </div>

                    <button type="submit" className="btn btn-warning">Sign in</button>
                </form> 
            </div>
            </div>
        </>
    )
}

export default singin;