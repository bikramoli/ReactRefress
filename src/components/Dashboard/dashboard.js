import React from 'react';
//import AddAnimal from '../AddAnimal/addAnimal';
import './dashboard.css'

function Dashboard(props) { //here props is simply property which is used to pass data between different components

    return (

        <ul className="list-item">

            {props.animalsName.map((task) => {
                return <li key={task.id}>{task.name}</li>


            })

            }
        </ul>
    )

}

export default Dashboard;