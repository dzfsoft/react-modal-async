import logo from './logo.svg'
import './App.css'
import { Confirm } from './Confirm';

function App() {
  const nuevo = async () => {
    const resp = await Confirm()
    console.log(resp)
  }
  return (
    <div className="App">
      <button onClick={nuevo}>NUEVO</button>
    </div>
  );
}

export default App;
