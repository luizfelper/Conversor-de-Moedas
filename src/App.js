import './App.css';
import Conversor from './components/Conversor'

function App() {
  return (
    <div className="App">
      <Conversor moedaUSD="USD" moedaBRL="BRL"></Conversor>
    </div>
  );
}

export default App;
