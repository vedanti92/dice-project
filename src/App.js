import './App.css';

function rollDice() {
  let counter = Math.floor(Math.random()*6)
}

function App() {
  return (
    <div className="App">
      <select className="dropdown">
        <option value="1">•</option>
        <option value="2">••</option>
      </select>
    </div>
  );
}

export default App;
