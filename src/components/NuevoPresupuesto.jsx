import Header from "./Header";
import Mensaje from "./Mensaje";
import { useState } from 'react';

/* TODO:
    - Invalidar la entra de letras y símbolos, solo números POSITIVOS.
    - Los mensajes de error se quitan cuando se corrigen en tiempo real.
*/

const NuevoPresupuesto = ({
    presupuesto, 
    setPresupuesto,
    setValidarPresupuesto
}) => {

    const [ mensaje, setMensaje ] = useState('');

    const handlePresupuesto = e => {
        e.preventDefault();

        if(!presupuesto || presupuesto < 0) {
            setMensaje('No es un presupuesto válido');
            return;
        } /* else {
            setMensaje('Sí es un presupuesto valido');
        } */

        setMensaje('');
        setValidarPresupuesto(true);
    }

    return ( 
        <div className="contenedor-presupuesto contenedor sombra">
            <form 
                className="formulario"
                onSubmit={handlePresupuesto}
            >
                <div className="campo">
                    <label>Definir Presupuesto</label>
                    <input 
                        type="number" 
                        className="nuevo-presupuesto"
                        placeholder="Añade tu presupuesto"
                        value={presupuesto}
                        onChange={e => setPresupuesto(Number(e.target.value))}
                    />
                </div>
                <input type="submit" value="Añadir" />
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
            </form>
        </div>
     );
}
 
export default NuevoPresupuesto;