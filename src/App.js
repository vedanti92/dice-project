import './App.css';

const dice = (
  <div>
    <div className='face-1'>
      <div className='dot'></div>
    </div>
    <div className='face-2'>
      <div className='dot'></div>
      <div className='dot'></div>
    </div>
    <div className='face-3'>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
    </div>
    <div className='face-4'>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
    </div>
    <div className='face-5'>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
    </div>
    <div className='face-6'>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
      <div className='dot'></div>
    </div>
  </div>
)

function rollDice() {
  const newDice = []
  newDice.push(Math.floor(Math.random()*6))
  return newDice
}

function App() {
  return (
    <div className="App">
      <select className="dropdown">
        <option value="1">•</option>
        <option value="2">••</option>
      </select>
      <div>
        {dice}
      </div>
      <div>
          <button onClick={rollDice}>ROLL</button>
      </div>
    </div>
  );
}

export default App;
