import UserForm from './components/UserForm'
import UserCard from './components/UserCard'
import View from './components/View'
import {useState} from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newUser, setNewUser] = useState([]);

  return (
    <div className="App">
      <h2>{JSON.stringify(newUser)}</h2>
      <UserForm name ={name} email={email} password={password} setName={setName} setEmail={setEmail} setPassword={setPassword}  setNewUser={setNewUser} newUser={newUser} />
      <View name={name} email={email} password={password}/>
      {
        newUser.map((item,index) => (<UserCard key={index} index={index} name={item.name} email = {item.email} password={item.password} setUser={setNewUser} newUser={newUser} />) )
      }
    </div>
  );
}

export default App;
