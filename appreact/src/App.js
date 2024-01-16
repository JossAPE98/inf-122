import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Contador from './components/Contador';
import Boton from './components/Boton';

function App() {
  const [nroClicks, setNumClicks] = useState(0);
  const click = () =>{
    setNumClicks(nroClicks+1);
  }
  const reinciar = () =>{
    setNumClicks(0);
  }
  return (
    <div className='App'>
      <div className="contenedor-principal">
        <Contador nroClicks={nroClicks}/>
        <div className='contenedor-botones'>
          <Boton texto="Click" esBotonClick={true} funcionClick={click} />

          <Boton texto="Reiniciar" esBotonClick={false} funcionClick={reinciar} />
        </div>
      </div>
 
    </div>
  );
}

export default App;
