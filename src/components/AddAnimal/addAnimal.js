import React, { useState } from 'react';

function AddAnimal(props) {

    const [state, setstate] = useState({
        message: "",
        animalName: "",
        nam: "bikram",
        count: 0
    })
    function updateAnimalName(event) {
        setstate({
            ...state,
            animalName: event.target.value
        })
    }
    //check validation after login button clicked
    function addAnimal() {
        const addNew = {
            id: Math.ceil(Math.random() * 10).toString(),//state.count.toString(), 
            name: state.animalName
        }
        props.onAddAnimals(addNew);
        setstate({
            ...state,
            message: "Added Successfully",
            count: state.count + 1
        })
    }
    return (
        <div>
            <h1>Animal lists</h1>
            <input id="username" onChange={updateAnimalName} autoFocus={true} type="text" placeholder="Type animal name" value={state.animalName} />
            <button onClick={addAnimal}>Add</button>
            <h2>{state.message}</h2>
        </div>
    )
}
export default AddAnimal;