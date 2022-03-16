import logo from "./logo.png";
import compi from "./compi.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={compi} className="App-compi" alt="compi" />
        <img src={logo} className="App-logo" alt="logo" />
        Your nutrition guide 🥦 Coming soon... 🎉
      </header>
    </div>
  );
}

export default App;
