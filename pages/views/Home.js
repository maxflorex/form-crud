import cerrarSesion from "../functions/signOut"
import getAllProducts from "../functions/getAllProducts"
import { useEffect, useState } from "react"
import Modal from "../components/Modal";
import { eliminarProductoHome } from "../functions/eliminarProductoHome";



function Home({ usuario }) {


    const [productos, setProductos] = useState([]);
    const [isModalAdd, setIsModalAdd] = useState(false)


    const inputTw = 'input input-bordered input-info w-full max-w-xs'
    const formTw = 'flex gap-4 justify-center ml-auto'
    const div2 = 'flex container py-8 mx-auto'

    function actualizarEstadosProductos() {
        getAllProducts().then((productos) => {
            setProductos(productos)
        })
    }


    const addProduct = () => {
        setProductos(true)
    }


    useEffect(() => {
        actualizarEstadosProductos()
    }, [])

    return (
        <>
            <div className="bg-slate-600">
                <div className="container mx-auto p-8 flex flex-col gap-4">
                    <h1 className='text-white text-3xl'>Bienvenido, {usuario.email}</h1>
                    <button className='btn mr-auto' onClick={cerrarSesion}>Cerrar Sesion</button>
                </div>
            </div>
            <div className={div2}>
                <form className={formTw}>
                    <input type="text" placeholder="Buscar" className={inputTw} />
                    <button className="btn btn-succes">Buscar</button>
                    <button className="btn btn-warning">Reset</button>
                </form>
            </div>
            <div className="container mx-auto">
                <table className="table w-full rounded-lg">

                    <thead>
                        <tr>
                            <th></th>
                            <td>Titulo</td>
                            <td>Precio</td>
                            <td>Cantidad</td>
                            <td>SKU</td>
                            <td>Acciones</td>
                        </tr>
                    </thead>
                    <tbody>

                        {productos && productos.map((productos, index) => (

                            <tr className="hover" key={index}>
                                <th>{index + 1}</th>
                                <td>{productos.titulo}</td>
                                <td>{productos.precio}</td>
                                <td>{productos.cantidad}</td>
                                <td>{productos.sku}</td>
                                <td className="flex gap-4">
                                    <button className="btn btn-info" onClick={addProduct}>Editar</button>
                                    <button className="btn btn-error" onClick={() => {
                                        eliminarProductoHome(productos).then(
                                            (confirmation) => {
                                                actualizarEstadosProductos();
                                            })
                                    }}>Eliminar</button>
                                </td>
                            </tr>

                        ))}

                    </tbody>
                </table>
            </div>
            <div className="div2">
                <Modal isModalAdd={isModalAdd} setIsModalAdd={setIsModalAdd} actualizarEstadosProductos={actualizarEstadosProductos} />
            </div>
        </>
    )
}

export default Home 