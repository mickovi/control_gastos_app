import { useState, useEffect } from 'react';
import Mensaje from './Mensaje';
import CerrarBtn from '../img/cerrar.svg';

/* TODO:
    - Agregar botón "regresar" al costado de añadir
*/

const Modal = ({
    setModal, 
    animarModal, 
    setAnimarModal, 
    guardarGasto,
    gastoEditar
}) => {

    const [ mensaje, setMensaje ] = useState('');

    const [ conceptogasto, setConceptoGasto ] = useState('');
    const [ monto, setMonto ] = useState(0);
    const [ categoria, setCategoria ] = useState('');
    
    useEffect(() => {
        if(Object.keys(gastoEditar).length) {
            setConceptoGasto(gastoEditar.conceptogasto);
            setMonto(gastoEditar.monto);
            setCategoria(gastoEditar.categoria);
        }
    }, [gastoEditar]);
    

    const cerrarModal = () => {
        setAnimarModal(false);

        setTimeout(() => {
            setModal(false);
          }, 200);
    };

    const handleSubmit = e => {
        e.preventDefault();

        if([conceptogasto, monto, categoria].includes('')) {
            setMensaje('Todos los campos son obligatorios');

            setTimeout(() => {
                setMensaje('');
            }, 2000);

            return;
        }
        
        guardarGasto({conceptogasto, monto, categoria});
    }

    return ( 
        <div className="modal">
            <div className="cerrar-modal">
                <img 
                    src={CerrarBtn} 
                    alt="cerrar modal" 
                    onClick={cerrarModal}
                />
            </div>
            <form 
                className={`formulario ${animarModal ? "animar" : "cerrar"}`}
                onSubmit={handleSubmit}
            >
                <legend>{gastoEditar.conceptogasto ? "Editar gasto" : "Nuevo Gasto"}</legend>
                {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}
                <div className="campo">
                    <label htmlFor="conceptogasto">Concepto</label>
                    <input
                        id="conceptogasto"
                        type="text"
                        placeholder="Concepto de gasto"
                        value={conceptogasto}
                        onChange={e => setConceptoGasto(e.target.value)}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="monto">Monto</label>
                    <input
                        id="monto"
                        type="number"
                        placeholder="Monto gastado"
                        value={monto}
                        onChange={e => setMonto(Number(e.target.value))}
                    />
                </div>
                <div className="campo">
                    <label htmlFor="categoria">Categoría</label>
                    <select 
                        name="categoria" 
                        id="categoria"
                        value={categoria}
                        onChange={e => setCategoria(e.target.value)}
                    >
                        <option value="">--- Seleccione una categoría ---</option>
                        <option value="ahorro">Ahorro</option>
                        <option value="comida">Comida</option>
                        <option value="casa">Casa</option>
                        <option value="gastos">Gastos varios</option>
                        <option value="ocio">Ocio</option>
                        <option value="salud">Salud</option>
                        <option value="suscripciones">Suscripciones</option>
                    </select>
                </div>
                <input 
                    type="submit" 
                    value={gastoEditar.conceptogasto ? "Editar gasto" : "Añadir Gasto"} 
                />
            </form>
        </div>
     );
}
 
export default Modal;