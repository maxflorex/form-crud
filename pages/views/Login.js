import loginEmailPassword from "../functions/loginEmailPassword";


const Login = () => {

    async function submitHandler(e) {
        e.preventDefault();
        const correo = e.target.correo.value;
        const contra = e.target.contra.value;
        await loginEmailPassword(correo, contra);
        console.log('Bienvenido!')
    }

    const formTw = 'flex flex-col gap-4 justify-center mx-auto'
    const inputTw = 'input input-bordered input-info w-full max-w-xs'
    const divTw = 'container mx-auto flex flex-col justify-center content-center gap-4 m-24'


    return (


        <div className={divTw}>
            <form className={formTw} onSubmit={submitHandler}>

                <input
                    className={inputTw}
                    id="correo"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder="Email"
                />

                <input
                    className={inputTw}
                    id="contra"
                    name="password"
                    type="password"
                    autoComplete="name"
                    required
                    placeholder="password"
                />
                <button
                    type="submit"
                    className="btn mx-auto m-4 self-start"
                >
                    Submit
                </button>
            </form>
        </div>

    );

}

export default Login;