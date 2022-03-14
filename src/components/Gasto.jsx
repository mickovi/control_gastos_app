import {
    LeadingActions,
    SwipeableList,
    SwipeableListItem,
    SwipeAction,
    TrailingActions
} from 'react-swipeable-list';
import 'react-swipeable-list/dist/styles.css';
import { formatearFecha } from '../helpers';
import IconoAhorro from '../img/icono_ahorro.svg';
import IconoCasa from '../img/icono_casa.svg';
import IconoComida from '../img/icono_comida.svg';
import IconoGastos from '../img/icono_gastos.svg';
import IconoOcio from '../img/icono_ocio.svg';
import IconoSalud from '../img/icono_salud.svg';
import IconoSuscripciones from '../img/icono_suscripciones.svg';

/* TODO:
    - Cambiar el css de fecha-gasto
*/

const diccionarioIconos = {
    ahorro: IconoAhorro,
    comida: IconoComida,
    casa: IconoCasa,
    gastos: IconoGastos,
    ocio: IconoOcio,
    salud: IconoSalud,
    suscripciones: IconoSuscripciones
};

const Gasto = ({gasto, setGastoEditar}) => {

    const {conceptogasto, monto, categoria, fecha, id} = gasto

    const myLeadingActions = () => (
        <LeadingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Editar
            </SwipeAction>
        </LeadingActions>
    )
    
    const myTrailingActions = () => (
        <TrailingActions>
            <SwipeAction onClick={() => setGastoEditar(gasto)}>
                Eliminar
            </SwipeAction>
        </TrailingActions>
    )

    return ( 
        <SwipeableList>
            <SwipeableListItem
                leadingActions={myLeadingActions()}
                trailingActions={myTrailingActions()}
            >
                <div className="gasto sombra">
                    <div className="contenido-gasto">
                        <img src={diccionarioIconos[categoria]} alt="Icono Gasto" />
                        <div className="descripcion-gasto">
                            <p className="nombre-gasto">{conceptogasto}</p>
                            <p className="categoria">{categoria}</p>
                            <p className="fecha-gasto">
                                <span>Registrado el {formatearFecha(fecha)}</span>
                            </p>
                        </div>
                    </div>
                    <p className="cantidad-gasto">${monto}</p>
                </div>
            </SwipeableListItem>
        </SwipeableList>
     );
}
 
export default Gasto;