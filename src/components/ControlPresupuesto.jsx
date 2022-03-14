import { useState, useEffect } from 'react';
const ControlPresupuesto = ({presupuesto, gastos}) => {

    const [ gastado, setGastado ] = useState(0);
    const [ disponible, setDisponible ] = useState(0);

    useEffect(() => {
      const totalGastado = gastos.reduce( (total, gasto) => gasto.monto + total, 0 );
      const totalDisponible = presupuesto - totalGastado;
      setGastado(totalGastado);
      setDisponible(totalDisponible);

      console.log(gastos)
    }, [gastos]);
    

    const formatearModeda = moneda => {
        return moneda.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    }
    
    return ( 
        <div className="contenedor-presupuesto contenedor sombra dos-columnas">
            <div>
                <p>Grafica</p>
            </div>
            <div className="contenido-presupuesto">
                <p>
                    <span>Presupuesto:</span> {formatearModeda(presupuesto)}
                </p>
                <p>
                    <span>Gastado:</span> {formatearModeda(gastado)}
                </p>
                <p>
                    <span>Disponible:</span> {formatearModeda(disponible)}
                </p>
            </div>
        </div>
    );
}
 
export default ControlPresupuesto;