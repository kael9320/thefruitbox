import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido a <code>The Fruit Box</code> Tu tienda online
        </p>
        <a className="App-link" href="https://www.metro.pe" target="_blank" rel="noopener noreferrer">Muy Pronto</a>
      </header>
    </div>
  );
}

export default App;
