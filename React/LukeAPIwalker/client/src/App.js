import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Form from "./components/Form";
import People from "./components/People";
import Planets from "./components/Planets";
import Vehicles from "./components/Vehicles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Form/>
        <Routes>
            <Route path="/people/:id" element={<People />} />
            <Route path="/planets/:id" element={<Planets />} />
            <Route path="/vehicles/:id" element={<Vehicles />} />
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
