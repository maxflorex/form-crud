import { useState } from "react"
import editProduct from '../functions/editProduct'

const ModalEditar = ({ actualizarEstadosProductos, setProductoEditar, productos, setProductos, productoEditar, productoEstado, setProductoEstado}) => {




    const inputTw = 'input input-bordered input-info w-50'
    const divTw = 'flex gap-4'


    const editProductModal = () => {
        // OBTENER INFO DEL FORMULARIO
        const titulo = document.getElementById('titulo2').value;
        const precio = document.getElementById('precio2').value;
        const cantidad = document.getElementById('cantidad2').value;
        const sku = document.getElementById('sku2').value;
        // ENNVIAR INFOR A FIREBASE
        const infoProducto = { titulo, precio, cantidad, sku }
        editProduct(infoProducto);
        // ACTUALIZAR PRODUCTOS
        actualizarEstadosProductos();
        // RESET
        setProductoEditar(null);

    }

    (console.log(productoEstado))

    return (
        <div className={divTw}>
            {/* OPEN */}


                <div className="mx-auto">
                    <a href="#modalEditar" className="btn btn-info">Editar</a>
                </div>


            {/* MODAL */}


            <div className="modal" id="modalEditar">
                <div className="modal-box">


                    {/* MODAL CONTAINER */}
                    <div className='flex flex-col py-16'>
                        <h1 className="text-2xl text-center font-bold">Editar producto</h1>
                        <form className="flex flex-col gap-4 p-8" id='formEditar'>

                            <input type='text' id="titulo2" placeholder="Titulo" className={inputTw} value={productoEstado.titulo} />
                            <input type='number' id="precio2" placeholder="Precio" className={inputTw} />
                            <input type='number' id="cantidad2" placeholder="Cantidad" className={inputTw} />
                            <input type='text' id="sku2" placeholder="Sku" className={inputTw} />

                        </form>
                        <div className="flex gap-4 px-8 justify-end">
                            <a className="btn btn-success" href='#' onClick={editProductModal}>Editar</a>
                            <a className="btn btn-warning" href='#' >Cancelar</a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default ModalEditar;