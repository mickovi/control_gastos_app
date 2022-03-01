import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

/* Porqué pasar props presupuesto y setPresupuesto a Header si se puede pasar directo al NuevoPresupuesto? */

const Header = ({presupuesto, setPresupuesto, validarPresupuesto, setValidarPresupuesto}) => {
    return ( 
        <header>
            <h1>Planificador de Gastos</h1>

            {
                validarPresupuesto
                ? 
                    (
                        <ControlPresupuesto 
                            presupuesto={presupuesto}
                        />
                    )
                :
                    (
                        <NuevoPresupuesto 
                            presupuesto={presupuesto}
                            setPresupuesto={setPresupuesto}
                            setValidarPresupuesto={setValidarPresupuesto}
                        />
                    )
            }            
        </header>
     );
}
 
export default Header;