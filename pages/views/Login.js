import loginEmailPassword from "../functions/loginEmailPassword";


const Login = () => {


    async function submitHandler(e) {
        e.preventDefault();
        const correo = e.target.formCorreo.value;
        const contra = e.target.formContra.value;
        await loginEmailPassword(correo, contra);
        console.log(correo, contra);
    }

    const formTw = 'flex gap-4 justify-center'
    const inputTw = 'input input-bordered input-info w-full max-w-xs'

    return (
        <div className="container mx-auto flex flex-col justify-center content-center gap-4 m-24">
            <h1 className="text-xl text-center m-4">Inicia sesion, por favor</h1>
            <form className={formTw} onSubmit={submitHandler} id="formCorreo" >
                <input type='text' placeholder='Enter email' className={inputTw} />
            </form>
            <form className={formTw} onSubmit={submitHandler} id="formContra">
                <input type='password' placeholder='Enter password' className={inputTw} />
            </form>
            <button className="btn mx-auto m-4" type="submit">Iniciar sesion</button>
        </div>
    );
}

export default Login; 