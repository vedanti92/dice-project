import { useState } from 'react';
import './App.css';
import Dice1 from './Dice_Images/Dice1.png'
import Dice2 from './Dice_Images/Dice2.png'
import Dice3 from './Dice_Images/Dice3.png'
import Dice4 from './Dice_Images/Dice4.png'
import Dice5 from './Dice_Images/Dice5.png'
import Dice6 from './Dice_Images/Dice6.png'

function App() {

  function rollDice() {
    const newDice = Math.floor(Math.random()*6)
    setNewImage(dice[newDice])
  }

  const dice = [
    Dice1, Dice2, Dice3, Dice4, Dice5, Dice6
  ]

  const [image, setNewImage] = useState(dice[0])

  return (
    <div className="App">
      <select className="dropdown">
        <option value="1">•</option>
        <option value="2">••</option>
      </select>
      <img src={image} alt="Dice" />
      <div>
          <button onClick={rollDice}>ROLL</button>
      </div>
    </div>
  );
}

export default App;
