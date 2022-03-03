import cerrarSesion from "../functions/signOut"
import getAllProducts from "../functions/getAllProducts"
import { useEffect, useState } from "react"
import Modal from "../components/Modal";
import { eliminarProductoHome } from "../functions/eliminarProductoHome";
import ModalEditar from "../components/ModalEditar";



function Home({ usuario }) {


    const [productos, setProductos] = useState([]);
    const [productoEditar, setProductoEditar] = useState(null);
    const [productoEstado, setProductoEstado] = useState({ ...productoEditar} );
    // const [isModalAdd, setIsModalAdd] = useState(false)
    // const [isModalEditar, setIsModalEditar] = useState(false)


    const inputTw = 'input input-bordered input-info w-full max-w-xs'
    const formTw = 'flex gap-4 justify-center ml-auto'
    const div2 = 'flex container py-8 mx-auto gap-4'

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

                        {productos && productos.map((producto, index) => (

                            <tr className="hover" key={index}>
                                <th>{index + 1}</th>
                                <td>{producto.titulo}</td>
                                <td>{producto.precio}</td>
                                <td>{producto.cantidad}</td>
                                <td>{producto.sku}</td>
                                <td className="flex gap-4">

                                    <ModalEditar actualizarEstadosProductos={actualizarEstadosProductos} setProductoEditar={setProductoEditar} productos={productos} setProductos={setProductos} productoEditar={productoEditar} productoEstado={productoEstado} setProductoEstado={setProductoEstado} />
                                    <Modal actualizarEstadosProductos={actualizarEstadosProductos} />


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
        </>
    )
}

export default Home


// isModalEdit={isModalEdit} setIsModalEdit={setIsModalEdit} actualizarEstadosProductos={actualizarEstadosProductos}