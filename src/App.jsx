// const React = require('react')
import "./App.css";
import ListItems from "./components/ListItems/ListItems";
import Welcome from "./components/Welcome/Welcome";

function App() {
  const name = "Pepe";
  const whoIAm = <h1>Hola, me llamo {name}</h1>;
  const obj = { name: "The Bridge", place: "Valencia" };
  const numbers = [1, 2, 3, 4, 5];
  const books = [
    {
      title:'El Quijote',
      author:'Miguel de Cervantes'
    },
    {
      title:'1984',
      author:'Yorge Props oruellee'
    }
  ]
  return (
    <div className="App">
      {whoIAm}
      <Welcome obj={obj} />
     {/* <ListItems numbers={numbers}/> */}
     <ListItems books={books}/>

    </div>
  );
}

export default App;
