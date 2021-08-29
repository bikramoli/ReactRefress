
import React, { useState } from 'react';
import './App.css';
import AddAnimal from './components/AddAnimal/addAnimal';
//import './components/dashboard.js'
import Dashboard from './components/Dashboard/dashboard.js';

function App() {

  const [animals, newAnimal] = useState([{ id: '321', name: 'This is tiger' }, { id: "322", name: 'This is cat' }])


  function addNewAnimalHandler(addNew) {
    newAnimal(animals.concat(addNew))
    console.log(animals);
  }
  return (
    <div className="App">
      <AddAnimal onAddAnimals={addNewAnimalHandler} />
      <Dashboard animalsName={animals} />

    </div>
  );
}

export default App;
