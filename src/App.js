import Turn from "./Components/Turn/Turn"
import GameBoard from "./Components/GameBoard/GameBoard"
import Preview from "./Components/Preview/Preview"
import './App.css';

function App() {
  return (
    <div className="App">
      <Turn />
      <GameBoard />
      <Preview />
    </div>
  );
}

export default App;
