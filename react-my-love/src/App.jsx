import { useState } from 'react';
import './styles/App.scss';
import spaceship from './images/ufo.jpg'

function App() {


  const [groguPosition, setGroguPosition] = useState(0);
  const [stock, setStock] = useState({ cookies: 3, eggs: 3, frogs: 3 });
  const [gameStatus, setGameStatus] = useState("En curso");


  const moveItem = (item) => {
    if (stock[item] > 0) {
      setStock({ ...stock, [item]: stock[item] - 1 });
      checkGameOver();
    }
  };

  const moveGrogu = () => {
    if (groguPosition < 6) {
      setGroguPosition(groguPosition + 1);
      setGameStatus("Avanza un paso Grogu");
      checkGameOver();
    }
  };

  const checkGameOver = () => {
    if (groguPosition >= 6) {
      setGameStatus("¡Grogu ha llegado al armario y se ha comido la mercancía! 😭");
    } else if (stock.cookies === 0 && stock.eggs === 0 && stock.frogs === 0) {
      setGameStatus("¡Misión cumplida! Has transportado toda la mercancía con éxito 🎉.");
    }
  };



  const rollDice = () => {
    const diceRoll = Math.floor(Math.random() * 4) + 1;
    console.log("Número del dado:", diceRoll);

    if (diceRoll === 1) {
      if (stock.cookies === 0) {
        rollDice();
      }
      else {
        moveItem("cookies");
      }
    }
    if (diceRoll === 2) {
      if (stock.cookies === 0) {
        rollDice();
      }
      else {
        moveItem("eggs");
      }
    }
    if (diceRoll === 3) {
      if (stock.cookies === 0) {
        rollDice();
      }
      else {
        moveItem("frogs");
      }
    }

    if (diceRoll === 4) moveGrogu();
    checkGameOver();

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
          {[...Array(7)].map((_, index) => (
            <div key={index} className="cell">
              {groguPosition === index && <div className="grogu">👣</div>}
            </div>

          ))}
        </section>

        <section>
          <button onClick={rollDice} className="dice">Lanzar Dado</button>
          <div className="game-status">{gameStatus}</div>
        </section>

        <div className="section-container">
          <section className="spaceship">
            <img src={spaceship}></img>
          </section>


          <section>
            <section className="goods-container">
              {stock.cookies > 0 && <div className="goods-item">🍪</div>}
              {stock.cookies > 1 && <div className="goods-item">🍪</div>}
              {stock.cookies > 2 && <div className="goods-item">🍪</div>}
            </section>
            <section className="goods-container">
              {stock.eggs > 0 && <div className="goods-item">🥚</div>}
              {stock.eggs > 1 && <div className="goods-item">🥚</div>}
              {stock.eggs > 2 && <div className="goods-item">🥚</div>}
            </section>
            <section className="goods-container">
              {stock.frogs > 0 && <div className="goods-item">🐸</div>}
              {stock.frogs > 1 && <div className="goods-item">🐸</div>}
              {stock.frogs > 2 && <div className="goods-item">🐸</div>}
            </section>
          </section>
        </div>

        <section>
          <button onClick={restartGame} className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </div>
  );
}

export default App;
