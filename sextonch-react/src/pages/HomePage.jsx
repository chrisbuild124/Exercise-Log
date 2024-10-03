import { Link } from 'react-router-dom';
import ExerciseCollection from '../components/ExerciseCollection';
import { useEffect, useState} from 'react';
import { IoCreateOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom'

function HomePage({setExerciseToEdit}) {
    const [exercises, setExercises] = useState([]);
    const navigate = useNavigate()

    const loadExercises = async () => {
        const response = await fetch('/exercises') // Runs in browser (react) not server
        const data = await response.json()
        setExercises(data)
    }

    const onDelete = async (_id) => {
        const response = await fetch(
            `/exercises/${_id}`,
            {method: "DELETE"}
        ) // Runs in browser (react) not server
        if (response.status === 204){
            setExercises(exercises.filter(ex => ex._id !== _id))
            alert(`Successfully deleted the exercise with _id = ${_id}`)
        }
        else {
            alert(`Failed to delete exercise with _id = ${_id}`)
        }
    }

    const onEdit = (exercise) => {
        setExerciseToEdit(exercise)
        navigate('/edit-exercise');
    }

    useEffect( () => {
            loadExercises() // Must be variable since can't pass in async function
        }, []
    )

    return (
        <>
            <header>
                <h1>
                    Exercise Logger
                </h1>
                <p>
                    Click on the add/remove icons to the right of the chart
                    or the add exercise link at the bottom to get started!
                </p>
            </header>
            <h2>List of Exercises</h2>
            <ExerciseCollection exercises={exercises} onDelete={onDelete} onEdit={onEdit}></ExerciseCollection>
            <footer>© 2024 Christopher Sexton</footer>
        </>
    );
}

export default HomePage;
