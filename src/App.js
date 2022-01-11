import './App.css';

function App() {
  return (
    <div>
      <h2>Please leave feedback</h2>
      <ul>
        <li>
          <button>Good</button>
        </li>
        <li>
          <button>Neutral</button>
        </li>
        <li>
          <button>Bad</button>
        </li>
      </ul>
      <div>
        <h3>Statistics</h3>
        <ul>
          <li>
            <p>Good:</p>
          </li>
          <li>
            <p>Neutral:</p>
          </li>
          <li>
            <p>Bad:</p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
