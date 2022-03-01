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

const Gasto = ({gasto}) => {

    const {conceptogasto, monto, categoria, fecha, id} = gasto
    return ( 
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
     );
}
 
export default Gasto;