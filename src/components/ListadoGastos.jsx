import Gasto from "./Gasto";

const ListadoGastos = ({gastos}) => {
    return ( 
        <div className="listado-gastos contenedor">
            <h2>{gastos.length ? "Gastos registrados": "No hay gastos registrados"}</h2>
            {gastos.map(gasto => (
                <Gasto
                    key={gasto.id} 
                    gasto={gasto}
                />
            ))}
        </div>
     );
}
 
export default ListadoGastos;