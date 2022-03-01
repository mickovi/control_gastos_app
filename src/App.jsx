import { useState } from 'react';
import Header from './components/Header';
import Modal from './components/Modal';
import ListadoGastos from './components/ListadoGastos';
import { generateID } from './helpers';
import IconoNuevoGasto from './img/nuevo-gasto.svg';

function App() {

  const [ presupuesto, setPresupuesto ] = useState(0);
  const [ validarPresupuesto, setValidarPresupuesto ] = useState(false);
  const [ modal, setModal ] = useState(false);
  const [ animarModal, setAnimarModal ] = useState(false);
  const [gastos, setGastos] = useState([]);

  const handleNuevoGasto = () => {
    setModal(true);

    setTimeout(() => {
      setAnimarModal(true);
    }, 200);  
  };

  const guardarGasto = gasto => {
    gasto.id = generateID();
    gasto.fecha = Date.now();
    setGastos([...gastos, gasto]);
    setAnimarModal(false);

    setTimeout(() => {
        setModal(false);
      }, 200);
  }

  return (
    <div className={modal && "fijar"}>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        validarPresupuesto={validarPresupuesto}
        setValidarPresupuesto={setValidarPresupuesto}
      />

      { 
        validarPresupuesto &&
          (
            <>
              <main>
                <ListadoGastos 
                  gastos={gastos}
                />
              </main>
              <div className="nuevo-gasto">
                <img 
                  src={IconoNuevoGasto} 
                  alt="icono nuevo gasto"
                  onClick={handleNuevoGasto}
                />
              </div>
            </>
          )
      }

      {modal && 
        <Modal 
          setModal={setModal}
          animarModal={animarModal}
          setAnimarModal={setAnimarModal}
          guardarGasto={guardarGasto}
        />}
    </div>
  )
}

export default App;

/* Cuando un state pasa por varios componentes es mejor declararlo en el App  */