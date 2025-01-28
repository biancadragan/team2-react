import { useState } from 'react';
import './styles/App.scss';

function App() {

  /*
 const handleClick = (ev) => {
  ev.preventDefault();

  const randomNumber = getRandomNumber(4);

  console.log(randomNumber);
  
 }
 function getRandomNumber(max) { 
  return Math.ceil(Math.random() * max); 
}
*/

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
