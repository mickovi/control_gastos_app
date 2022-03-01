const ControlPresupuesto = ({presupuesto}) => {

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
                    <span>Gastado:</span> {formatearModeda(presupuesto)}
                </p>
                <p>
                    <span>Disponible:</span> {formatearModeda(0)}
                </p>
            </div>
        </div>
    );
}
 
export default ControlPresupuesto;