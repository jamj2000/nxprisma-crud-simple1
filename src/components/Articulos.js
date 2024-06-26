import {
    newArticulo,
    updateArticulo,
    deleteArticulo
} from '@/lib/actions'


function Articulos({ articulos }) {
    return (
        <>
            <form>
                <label>Nombre:
                    <input name='nombre' />
                </label>

                <label>Descripción:
                    <input name='descripcion' />
                </label>

                <label>Precio en €:
                    <input name='precio' type='number' step='0.01' />
                </label>

                <button formAction={newArticulo}>Nuevo artículo</button>
                <button className='action' type='reset'>Limpiar campos</button>
            </form>
            {
                articulos
                    .sort((a, b) => b.id - a.id)  // Orden inverso, de id mayor a menor
                    .map((articulo) => (
                        <form key={articulo.id}>
                            <input name='id' value={articulo.id} type='hidden' />

                            <label>Nombre:
                                <input name='nombre' defaultValue={articulo.nombre} />
                            </label>

                            <label>Descripción:
                                <input name='descripcion' defaultValue={articulo.descripcion} />
                            </label>

                            <label>Precio en €:
                                <input name='precio' defaultValue={(articulo.precio / 100).toString()} type='number' step='0.01' />
                            </label>

                            <button formAction={updateArticulo}>Actualizar artículo</button>
                            <button formAction={deleteArticulo}>Eliminar artículo</button>
                        </form>

                    ))
            }
        </>
    )
}

export default Articulos



