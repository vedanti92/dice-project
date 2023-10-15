import './App.css';

const dice = (
  <div className='face'>
    <span className='face-1'>
      <span className='dot'></span>
    </span>
    <div className='face-2'>
      <span className='dot'></span>
      <span className='dot'></span>
    </div>
    <div className='face-3'>
      <span className='dot'></span>
      <span className='dot'></span>
      <span className='dot'></span>
    </div>
    <div className='face-4'>
      <span className='dot'></span>
      <span className='dot'></span>
      <span className='dot'></span>
      <span className='dot'></span>
    </div>
    <div className='face-5'>
      <span className='dot'></span>
      <span className='dot'></span>
      <span className='dot'></span>
      <span className='dot'></span>
      <span className='dot'></span>
    </div>
    <div className='face-6'>
      <span className='dot'></span>
      <span className='dot'></span>
      <span className='dot'></span>
      <span className='dot'></span>
      <span className='dot'></span>
      <span className='dot'></span>
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
