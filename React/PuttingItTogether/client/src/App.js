import './App.css';
import PersonCard from './components/PersonCard'

const people = [
  {
    firstName:"Jane",
    lastName:"Doe",
    age:45,
    hairColor:"Black",
  },
  {
    firstName:"John",
    lastName:"Smith",
    age:88,
    hairColor:"Brown",
  }
]
function App() {
  return (
    <div className="App">
      {people.map((item, index) => (
        <PersonCard
          key={index}
          firstName={item.firstName}
          lastName={item.lastName}
          age={item.age}
          hairColor={item.hairColor}
          />
      ))}
      {/* <PersonCard
        firstName={"Jane"}
        lastName={"Doe"}
        age={45}
        hairColor={"Black"} />
      <PersonCard
        firstName={"John"}
        lastName={"Smith"}
        age={88}
        hairColor={"Brown"} /> */}
    </div>
  );
}

export default App;
