import './App.css';
import Cards from './components/Cards'
import {useState} from 'react'

function App() {

  const [state, setState] = useState([])

  return (
    <div className="App">
      <h1>All 905 Shiny Pokemon!</h1>
      <Cards state = {state} setState = {setState} />
    </div>
  );
}

export default App;
