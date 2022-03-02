import addProduct from "../functions/addProduct"

const Modal = ({ isModalAdd, setIsModalAdd, actualizarEstadosProductos }) => {


    const formTw = 'flex flex-col gap-4 justify-center mx-auto'
    const inputTw = 'input input-bordered input-info w-50'
    const divTw = 'container mx-auto flex flex-col justify-center content-center gap-4 m-24'


    const addProductModal = () => {
        // OBTENER INFO DEL FORMULARIO
        const titulo = document.getElementById('titulo').value;
        const precio = document.getElementById('precio').value;
        const cantidad = document.getElementById('cantidad').value;
        const sku = document.getElementById('sku').value;
        // ENNVIAR INFOR A FIREBASE
        const infoProducto = { titulo, precio, cantidad, sku }
        addProduct(infoProducto)
        // ACTUALIZAR PRODUCTOS
        actualizarEstadosProductos()

    }

    return (
        <div className={divTw}>
            {/* OPEN */}
            <div className="mr-auto">
                <a href="#my-modal-2" className="btn">Agregar Producto</a>
            </div>
            {/* MODAL */}
            <div className="modal" id="my-modal-2">
                <div className="modal-box">


                    <div className='flex flex-col py-16'>
                        <h1 className="text-2xl text-center font-bold">Agregar nuevo producto</h1>
                        <form className="flex flex-col gap-4 p-8">

                            <input type='text' id="titulo" placeholder="Titulo" className={inputTw} />
                            <input type='number' id="precio" placeholder="Precio" className={inputTw} />
                            <input type='number' id="cantidad" placeholder="Cantidad" className={inputTw} />
                            <input type='text' id="sku" placeholder="Sku" className={inputTw} />

                        </form>
                        <div className="flex gap-4 px-8 justify-end">
                            <a className="btn btn-success" onClick={addProductModal} href='#' >Anadir</a>
                            <a className="btn btn-warning" href='#'>Cancelar</a>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default Modal;