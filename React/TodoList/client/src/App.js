import './App.css';
import Form from './components/Form'
import List from  './components/List'
import {useState} from 'react'

function App() {

  const [list, setList] = useState( () => {
    const savedList = localStorage.getItem("MY_LIST");
    if (savedList) {
      return JSON.parse(savedList);
    } else {
      return [];
    }
  });
  
  return (
    <div className="App">
      <Form list = {list} setList = {setList} />
      <List list = {list} setList = {setList} />
    </div>
  );
}

export default App;