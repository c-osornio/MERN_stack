import './App.css';
import BoxForm from './components/BoxForm';
import Display from './components/Display';
import { useState } from 'react';

function App() {

  const [boxes, setBoxes] = useState([])

  return (
    <div className="App">
      <BoxForm boxes = {boxes} setBoxes={setBoxes}/>
      <Display boxes = {boxes} />
    </div>
  );
}

export default App;
