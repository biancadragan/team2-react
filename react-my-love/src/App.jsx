import { useState } from 'react';
import './styles/App.scss';

function App() {
  const [groguPosition, setGroguPosition] = useState(0);
  const [stock, setStock] = useState({ cookies: 3, eggs: 3, frogs: 3 });
  const [gameStatus, setGameStatus] = useState("En curso");

  const moveItem = (item) => {
    if (stock[item] > 0) {
      setStock({ ...stock, [item]: stock[item] - 1 });
    }
  };
  
  const moveGrogu = () => {
    if (groguPosition < 6) {
      setGroguPosition(groguPosition + 1);
    }
  };

  
  const rollDice = () => {
    const diceRoll = Math.floor(Math.random() * 4) + 1;
    console.log("Número del dado:", diceRoll);
    
    if (diceRoll === 1) moveItem("cookies");
    if (diceRoll === 2) moveItem("eggs");
    if (diceRoll === 3) moveItem("frogs");
    if (diceRoll === 4) moveGrogu();
  };

  const restartGame = () => {
    setGroguPosition(0);
    setStock({ cookies: 3, eggs: 3, frogs: 3 });
    setGameStatus("En curso");
  };

  return (
    <div className="image page">
      <header>
        <h1>¡Cuidado con Grogu!</h1>
      </header>
      <main className="page">
        <section className="board">
          <div className="cell"><div className="grogu">👣</div></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
          <div className="cell"></div>
        </section>

        <section>
          <button onClick={rollDice} className="dice">Lanzar Dado</button>
          <div className="game-status">{gameStatus}</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button onClick={restartGame} className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </div>
  );
}

export default App;
