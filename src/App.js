import { useState, useEffect } from 'react';
import './App.css';
import Dice1 from './Dice_Images/Dice1.png';
import Dice2 from './Dice_Images/Dice2.png';
import Dice3 from './Dice_Images/Dice3.png';
import Dice4 from './Dice_Images/Dice4.png';
import Dice5 from './Dice_Images/Dice5.png';
import Dice6 from './Dice_Images/Dice6.png';

function App() {
  const dice = [
    Dice1,
    Dice2,
    Dice3,
    Dice4,
    Dice5,
    Dice6,
  ];


  const [imageFirst, setNewImage1] = useState(dice[0]);
  const [imageSecond, setNewImage2] = useState(dice[0]);
  const [value, setValue] = useState(1);
  const [diceCount, setDiceCount] = useState(1);
  const [dice1, setDice1] = useState(1)
  const [dice2, setDice2] = useState(1)
  const [rolling, setRolling] = useState(false); 

  const updateDiceCount = (evt) => {
    const selectedValue = parseInt(evt.target.value) || 1;
    setDiceCount(selectedValue);
    setValue(selectedValue);
  };

  const rollDice = () => {
    setRolling(true);

    setTimeout(() => {
      const newDice1 = Math.floor(Math.random() * 6);
      setNewImage1(dice[newDice1]);

      const newDice2 = Math.floor(Math.random() * 6);
      setNewImage2(dice[newDice2]);

      setDice1(newDice1);
      setDice2(newDice2);

      setRolling(false);
    }, 2000);
  };

  useEffect(() => {
    if (value === 2) {
      rollDice();
    }
  }, [value]);

  return (
    <div className="App">
      <div>
        <select className="dropdown" value={diceCount} onChange={updateDiceCount}>
          <option value={1}>•</option>
          <option value={2}>••</option>
        </select>
      </div>

      {value === 1 ? (
        <img src={imageFirst} alt="Dice" className={`dice ${rolling ? "rolling" : ""}`} />
      ) : (
        <>
          <img src={imageFirst} alt="Dice" className={`dice ${rolling ? "rolling" : ""}`} />
          <img src={imageSecond} alt="Dice" className={`dice ${rolling ? "rolling" : ""}`} />
        </>
      )}

      <div>
        <button className='rollbtn' onClick={rollDice}>
          ROLL
        </button>
      </div>
    </div>
  );
}
export default App;
