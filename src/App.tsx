import './App.css'

import { useDado } from './hooks/useDice';
import imagenesDados from './utils/diceImg';

function App() {
  const dado = useDado();
  const rollTime = 1000; // Tiempo de lanzamiento en milisegundos

  return (
    <>
      <div>
        <h1>Dados</h1>
        <img src={imagenesDados[dado.value - 1]} className="dice"/>
        <button onClick={() => dado.roll(rollTime)} disabled={dado.rolling}>
          {dado.rolling ? 'Lanzando...' : 'Lanzar'}
        </button>
      </div>
    </>
  )
}

export default App
