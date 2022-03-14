import { useState, useEffect } from 'react';
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
  const [ gastos, setGastos ] = useState([]);
  const [ gastoEditar, setGastoEditar ] = useState({});

  useEffect(() => {
    if(Object.keys(gastoEditar).length) {
      setModal(true);

      setTimeout(() => {
        setAnimarModal(true);
      }, 200);
    }
  }, [gastoEditar]);

  const handleNuevoGasto = () => {
    setModal(true);
    setGastoEditar({});

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
    // Warning: Received `false` for a non-boolean attribute `className`.
    // <div className={modal && "fijar"}>
    <div className={modal ? "fijar" : ""}>
      <Header 
        presupuesto={presupuesto}
        setPresupuesto={setPresupuesto}
        validarPresupuesto={validarPresupuesto}
        setValidarPresupuesto={setValidarPresupuesto}
        gastos={gastos}
      />

      { 
        validarPresupuesto &&
          (
            <>
              <main>
                <ListadoGastos 
                  gastos={gastos}
                  setGastoEditar={setGastoEditar}
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
          gastoEditar={gastoEditar}
        />}
    </div>
  )
}

export default App;

/* Cuando un state pasa por varios componentes es mejor declararlo en el App  */